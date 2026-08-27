/**
 * Motion engine for the Season Programme design.
 *
 * Classes: arrival (once per page) — staged reveals are legitimate here and are
 * the premium signal. Everything is transform/opacity/clip-path only, every
 * effect is removed under prefers-reduced-motion, and nothing is load-bearing:
 * if this file fails to run, the inline watchdog in the layout un-arms `.rv`
 * and the page renders fully visible.
 */
const RM = window.matchMedia('(prefers-reduced-motion: reduce)');
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

let raf = null, px = [], rail = [], mastEl = null, progEl = null, lastY = 0;

function closeNav() {
  document.documentElement.classList.remove('navopen');
  document.querySelectorAll('[data-nav]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
}
function toggleNav() {
  const open = document.documentElement.classList.toggle('navopen');
  document.querySelectorAll('[data-nav]').forEach((b) => b.setAttribute('aria-expanded', String(open)));
}

function frame() {
  const y = window.scrollY, vh = window.innerHeight;
  if (progEl) {
    const d = document.body.scrollHeight - vh;
    progEl.style.transform = 'scaleX(' + (d > 0 ? Math.min(1, y / d) : 0) + ')';
  }
  if (mastEl) {
    const solid = y > vh - 90;
    mastEl.classList.toggle('solid', solid);
    mastEl.classList.toggle('onphoto', !solid);
    mastEl.classList.toggle('up', y > lastY && y > vh * 0.9 && !document.documentElement.classList.contains('navopen'));
  }
  lastY = y;
  if (!RM.matches) {
    for (const el of px) {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      el.style.transform = 'translate3d(0,' + (((r.top + r.height / 2 - vh / 2) / vh) * -7).toFixed(2) + '%,0)';
    }
  }
  if (rail.length) {
    // A rail sitting over a full-bleed ink band must invert, or it vanishes.
    const mid = vh / 2;
    let over = false;
    for (const bd of document.querySelectorAll('[data-band]')) {
      const r = bd.getBoundingClientRect();
      if (r.top < mid && r.bottom > mid) { over = true; break; }
    }
    document.documentElement.classList.toggle('onink', over);
    document.documentElement.classList.toggle('railon', y > vh * 0.78);
    for (const a of rail) {
      const t = document.getElementById(a.dataset.sec);
      if (!t) continue;
      const r = t.getBoundingClientRect();
      a.classList.toggle('act', (r.top < vh * 0.42 && r.bottom > 0) || (r.top < 0 && r.top > -t.offsetHeight));
    }
  }
  raf = null;
}
function onScroll() { if (raf === null) raf = requestAnimationFrame(frame); }

function init() {
  closeNav();
  mastEl = document.getElementById('mast');
  progEl = document.getElementById('prog');
  px = [...document.querySelectorAll('.px')];
  rail = [...document.querySelectorAll('.rail a')];

  const hero = document.querySelector('.hero');
  const ink = hero ? getComputedStyle(hero).getPropertyValue('--house').trim() : '';
  if (progEl) progEl.style.background = ink || '';

  window.removeEventListener('scroll', onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.removeEventListener('resize', onScroll);
  window.addEventListener('resize', onScroll, { passive: true });
  lastY = 0; frame();

  const hi = document.querySelector('.hero-img img');
  if (hi) requestAnimationFrame(() => hi.classList.add('on'));

  const items = [...document.querySelectorAll('.rv-i,.rise,.plate,.fig')];
  const showAll = () => items.forEach((x) => x.classList.add('on'));
  window.__revealReady = true;

  if (!('IntersectionObserver' in window) || RM.matches) { showAll(); return; }

  const heroBits = [...document.querySelectorAll('.hero .rv-i,.hero .rise')];
  heroBits.forEach((x, i) => setTimeout(() => x.classList.add('on'), 120 + i * 110));

  const io = new IntersectionObserver((es) => {
    es.forEach((en) => {
      if (!en.isIntersecting) return;
      const sibs = [...en.target.parentElement.children].filter((c) => c.matches('.rv-i,.rise,.plate,.fig'));
      setTimeout(() => en.target.classList.add('on'), Math.min(Math.max(0, sibs.indexOf(en.target)), 4) * 90);
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -9% 0px', threshold: 0.05 });
  items.forEach((x) => { if (!heroBits.includes(x)) io.observe(x); });
  setTimeout(showAll, 5000);

  document.querySelectorAll('.house-row').forEach((r) => {
    r.addEventListener('pointerenter', () => r.classList.add('warm'));
    r.addEventListener('pointerleave', () => r.classList.remove('warm'));
  });
}

/* ---- the ink curtain, played across a real page navigation ---- */
async function curtainIn(to) {
  const c = document.getElementById('curtain');
  if (!c || RM.matches) return;
  const meta = (window.__CAMPBELL_INK || {})[to.replace(/\/$/, '')] || {};
  c.style.background = meta.ink || '#16130F';
  c.querySelector('.cn').textContent = meta.name || 'Campbell';
  c.classList.add('lit');
  await c.animate([{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }],
    { duration: 560, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }).finished;
}
async function curtainOut() {
  const c = document.getElementById('curtain');
  if (!c || RM.matches) return;
  c.classList.remove('lit');
  await c.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
    { duration: 640, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }).finished;
  c.getAnimations().forEach((a) => a.cancel());
  c.style.transform = 'translateY(100%)';
}

if (!window.__campbellBound) {
  window.__campbellBound = true;
  document.addEventListener('click', (ev) => {
    if (ev.target.closest('[data-nav]')) { ev.preventDefault(); toggleNav(); return; }
    if (ev.target.closest('[data-notes]')) { ev.preventDefault(); document.documentElement.classList.toggle('notes'); return; }
    if (ev.target.closest('a[href]')) closeNav();
  });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeNav(); });

  // Wrap Astro's loader so the curtain closes BEFORE the swap and lifts after.
  document.addEventListener('astro:before-preparation', (ev) => {
    const original = ev.loader;
    ev.loader = async () => { await curtainIn(new URL(ev.to).pathname); await original(); };
  });
  // The incoming document has no `rv` class (it is added by an inline script
  // that does not re-run on a view transition), so re-arm it on the new
  // document BEFORE the swap — otherwise every page after the first renders
  // with the reveal already finished.
  document.addEventListener('astro:before-swap', (ev) => {
    ev.newDocument.documentElement.classList.add('rv');
  });
  document.addEventListener('astro:after-swap', () => { window.scrollTo(0, 0); });
  document.addEventListener('astro:page-load', () => { init(); curtainOut(); });
}
