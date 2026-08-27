const SHOTS=[
 "The room, wide &#8212; evening service, tables dressed",
 "The bar &#8212; a pour, low light, hands in frame",
 "One signature plate &#8212; overhead, daylight",
 "The arrival &#8212; entrance or terrace at dusk"
];
const HOUSES=[
{id:"louve",pull:"A multi-level, immersive dining experience that blends Latin charm with contemporary elegance.",n:"01",name:"Louve",cat:"The Flagship",city:"New Delhi",ink:"#7B2233",
 tag:"Latin charm, met with contemporary elegance.",
 img:"brand-louve",gal:["gallery-dish"],
 tags:["Now Open","European &#183; Mediterranean","Asian"],
 cuisine:["European","Mediterranean","Italian","Asian"],
 body:["Campbell India's flagship, unveiled in February 2026 in Delhi's most prestigious retail destination &#8212; Khan Market. Spanning over 3,000 square metres with a capacity of 300+ guests, Louve offers a multi-level, immersive dining experience that blends Latin charm with contemporary elegance.",
 "A stunning open-air terrace hosts intimate evenings and premium lifestyle events. The ground level showcases progressive European, Mediterranean and contemporary Italian cuisine, while the upper level offers an elevated take on classic Asian fare."],
 addr:null},
{id:"cosy-box",pull:"Opulent settings that celebrate the allure of the silver screen.",n:"02",name:"Cosy Box",cat:"Cinematic Fine Dining",city:"Delhi &#183; Gurugram &#183; Mumbai &#183; Kolkata",ink:"#1F3A5F",
 tag:"From the Cannes Film Festival to four Indian cities.",
 img:"brand-cosybox",gal:["gallery-cosybox"],
 tags:["Mediterranean","Italian","Asian"],
 cuisine:["Mediterranean","Italian","Asian"],
 body:["From its origins as the official food partner of the Cannes Film Festival, Cosy Box brings cinematic glamour to India.",
 "Across Delhi, Gurugram, Mumbai and Kolkata, it offers a fusion of Mediterranean, Italian and Asian cuisines within opulent settings that celebrate the allure of the silver screen."],
 addr:null},
{id:"toy-room",pull:"A discerning clientele seeking exclusive entertainment.",n:"03",name:"Toy Room",cat:"Globally Recognised Nightlife",city:"Delhi &#183; Mumbai &#183; Kolkata &#183; Pune",ink:"#4A2E6B",
 tag:"The global nightlife name, in its Indian rooms.",
 img:"brand-toyroom",gal:[],
 tags:["Nightlife","High-Energy Club","Eclectic Music"],rejected:"The only second Toy Room image on file is a phone snapshot of guests with a mascot. It is not editorial photography and is deliberately not used here.",
 cuisine:[],
 body:["As a globally recognised nightlife brand, Toy Room delivers high-energy club experiences. Known for its vibrant ambiance and eclectic music, it caters to a discerning clientele seeking exclusive entertainment.",
 "With thriving locations in Delhi, Mumbai, Kolkata and Pune, Toy Room brings its signature blend of luxury and nightlife to India's most dynamic cities."],
 addr:null},
{id:"ophelia",pull:"Guests are transported to a Shakespearean era.",n:"04",name:"Ophelia",cat:"Restaurant & Bar",city:"New Delhi",ink:"#5C3A52",
 tag:"A Shakespearean era, in Renaissance-inspired d&#233;cor.",
 img:"gallery-ophelia",gal:["brand-ophelia"],
 tags:["Turkish","Italian","Innovative Cocktails"],
 cuisine:["Turkish","Italian"],
 body:["Nestled in Delhi's iconic The Ashok, Ophelia transports guests to a Shakespearean era with its Renaissance-inspired d&#233;cor.",
 "Offering a menu that spans Turkish to Italian delicacies, it provides an evocative dining experience complemented by ambient vibes and innovative cocktails."],
 addr:null},
{id:"meette",pull:"Food is an expression of artistry.",n:"05",name:"Meette",cat:"Atelier Patisserie",city:"Founded 2015",ink:"#4B5D3A",
 tag:"Pastry as artistry, since 2015.",
 img:"brand-meette",gal:["gallery-meette"],
 tags:["Artistic Pastry","Innovation","Tradition"],
 cuisine:["Patisserie"],
 body:["Founded in 2015 with a deep passion for culinary craftsmanship, Meette was born from a gap in the market for refined, artistic pastries that balance innovation with tradition.",
 "Here, food is an expression of artistry &#8212; every creation crafted with meticulous attention to detail for a clientele who share an appreciation for the beauty in every bite."],
 addr:null},
{id:"dodicci",pull:"Full details will be unveiled soon.",n:"06",name:"Dodicci",cat:"The Newest House",city:"Coming Soon",ink:"#9A4A22",
 tag:"Taking shape.",
 img:null,gal:[],
 tags:["Coming Soon"],
 cuisine:[],
 body:["Dodicci is the newest addition to the Campbell India portfolio &#8212; an intimate new dining concept currently taking shape.",
 "Full details will be unveiled soon."],
 addr:null,soon:true}
];
const CITIES=[["New Delhi","Louve &#183; Ophelia &#183; Cosy Box &#183; Toy Room"],["Gurugram","Cosy Box"],["Mumbai","Cosy Box &#183; Toy Room"],["Kolkata","Cosy Box &#183; Toy Room"],["Pune","Toy Room"]];
const PILLARS=[["Dining","Three open houses across European, Mediterranean, Italian, Asian and Turkish kitchens, and a fourth still taking shape."],
["Patisserie","Meette works to the standards of an atelier: small batches, technical pastry, and a display case treated as a shopfront."],
["Nightlife","Toy Room arrives with an international reputation and runs the late half of the evening in four cities."]];

const gap=(cls,label,what,owe)=>`<div class="gap ${cls||''}"><div class="lbl">${label}</div><div class="what">${what}</div><div class="owe">${owe||'To be supplied by the client'}</div></div>`;
const note=(t,b)=>`<div class="note"><b>${t}</b>${b}</div>`;
const sechead=(n,t,id)=>`<div class="sechead"${id?` id="${id}"`:''}><span class="n num">${n}</span><span class="eyebrow">${t}</span></div>`;
const rise=(tag,cls,lines)=>`<${tag} class="dsp ${cls} rise">${lines.map(l=>`<span class="ln"><b${l[1]?' class="it"':''}>${l[0]}</b></span>`).join('')}</${tag}>`;
const band=(q,attr,ink)=>`<section class="band" data-band="1"${ink?` style="--house:${ink}"`:''}><div class="wrap">${rise('p','q',q.map(x=>[x]))}<div class="attr rv-i">${attr}</div></div></section>`;

function foot(){return `<footer class="foot"><div class="wrap">
<div class="logo">CAMPBELL<sup>&#174;</sup></div>
<div class="foot-grid">
 <div><div class="lede" style="color:#EDE6D9;max-width:26ch;font-size:1.35rem">Six houses, one standard of luxury.</div>
 <p style="margin-top:18px;font-size:.85rem;color:#8A8074;max-width:44ch">Campbell Property &amp; Hospitality &#183; Founded 2019 &#183; New Delhi, Gurugram, Mumbai, Kolkata, Pune</p></div>
 <div><h5>The Houses</h5><ul>${HOUSES.map(h=>`<li><a href="#/${h.id}">${h.name}</a></li>`).join('')}</ul></div>
 <div><h5>Enquiries</h5><ul><li><a href="mailto:">General enquiries</a></li><li><a href="mailto:">Private events</a></li><li><a href="mailto:">Press</a></li></ul>
 ${note('Blocked','No verified email address exists for Campbell. The four addresses on the live site were invented during the build and are still unconfirmed.')}</div>
</div></div></footer>`}

function mast(h){
 const burger=`<button class="navbtn" onclick="toggleNav()" aria-label="Menu"><i></i><i></i><i></i></button>`;
 const right=h
  ?`<div class="mnav"><span class="runorder hide-sm">HOUSE <b>${h.n}</b> / 06</span><button class="i-btn" onclick="toggleNotes()" aria-label="Design notes">i</button><a href="#/" class="back"><span class="ar">&#8592;</span> Back to Campbell India</a>${burger}</div>`
  :`<div class="mnav"><a href="#the-house" class="hide-sm">The House</a><a href="#the-houses" class="hide-sm">The Houses</a><a href="#locations" class="hide-sm">Locations</a><button class="i-btn" onclick="toggleNotes()" aria-label="Design notes">i</button>${burger}</div>`;
 return `<header class="mast onphoto" id="mast"${h?' data-house="1"':''}><div class="mast-in"><a href="#/" class="logo">CAMPBELL<sup>&#174;</sup></a>${right}</div></header>`}

function chrome(){return `
<div class="prog" id="prog"></div>
<div class="curtain" id="curtain"><div class="cn"></div></div>
<div class="nav" id="nav"><div class="nav-in">
 <div class="eyebrow" style="margin-bottom:clamp(20px,3vw,38px)">The season &#183; 01 &#8212; 06</div>
 ${HOUSES.map(h=>`<a class="nav-row" href="#/${h.id}" style="--house:${h.ink}">
   <span class="nn num">${h.n}</span><span class="nname">${h.name}</span>
   ${h.img?`<img class="nav-thumb" src="${IMG[h.img]}" alt="">`:''}
   <span class="ncity">${h.city}</span></a>`).join('')}
<div class="nav-note"><button class="i-btn" onclick="toggleNotes()" aria-label="Design notes">i</button> Design notes</div>
</div></div>`}

function home(){
 const bill=HOUSES.map(h=>{
  const fig=h.img?`<a class="fig" href="#/${h.id}" style="--house:${h.ink}"><img src="${IMG[h.img]}" alt="${h.name}"></a>`
   :`<div class="fig" style="--house:${h.ink};clip-path:none">${gap('','Plate 01','A first photograph of Dodicci','Revealing Soon')}</div>`;
  const txt=`<div class="rv-i" style="--house:${h.ink}">
   <div class="hr-n num">${h.n}</div>
   <h3 class="hr-name">${h.name}</h3>
   <div class="hr-meta"><span class="pill">${h.cat}</span><span class="city">${h.city}</span></div>
   <p class="tagline">${h.tag}</p>
   ${h.soon?'<span class="enter" style="opacity:.45;pointer-events:none">Revealing soon</span>':`<a class="enter" href="#/${h.id}">Enter the house <span class="ar">&#8594;</span></a>`}
  </div>`;
  return `<article class="house-row" data-ink="${h.ink}" style="--house:${h.ink}">${fig}${txt}</article>`}).join('');

 return mast(null)+`
<section class="hero">
 <div class="hero-img"><div class="px"><img src="${IMG.atmosphere}" alt="Campbell India"></div></div>
 <div class="hero-in">
  <div class="eyebrow rv-i">Campbell India &#183; The Season</div>
  ${rise('h1','dsp-xl',[['The Houses.']])}
  <p class="hero-sub rv-i">Six worlds under one name. Dining, patisserie and nightlife across five Indian cities.</p>
 </div>
 <div class="hero-foot"><span>01 &#8212; 06</span><span class="cue"></span></div>
</section>

<section class="sec" id="the-house"><div class="wrap">
 ${sechead('&#8212;','The House')}
 <div class="split">
  <div>${rise('h2','dsp-l',[['Six houses.'],['One standard.',1]])}</div>
  <div class="rv-i">
   <p class="lede" style="margin-bottom:26px">Campbell Property &amp; Hospitality was founded in 2019. It runs six houses across five Indian cities.</p>
   <p class="body">A flagship in New Delhi. A Cannes import in four cities. An internationally recognised club. A Renaissance restaurant and bar. An atelier patisserie working since 2015. And one house still taking shape.</p>
   ${note('Copy status','Every outlet detail on this page &#8212; name, category, location, status and body copy &#8212; is verbatim from the deployed build. Only the one-line taglines are new, and each is a compression of that house&#8217;s own paragraph.')}
  </div>
 </div>
 <div class="plate" style="margin-top:clamp(48px,7vw,88px)"><div class="px"><img src="${IMG['gallery-louve']}" alt="" style="aspect-ratio:21/8"></div></div>
</div></section>

<section class="sec" id="the-houses" style="padding-top:0;padding-bottom:0"><div class="wrap">
 ${sechead('01 &#8212; 06','The Houses')}
 <div class="bill">${bill}</div>
</div></section>

${band(['Six houses,','one standard','of luxury.'],'Campbell Property &amp; Hospitality')}

<section class="sec"><div class="wrap">
 ${sechead('&#8212;','What we do')}
 <div class="g3">${PILLARS.map((p,i)=>`<div class="pillar rv-i"><div class="eyebrow" style="margin-bottom:14px">0${i+1}</div><h4>${p[0]}</h4><p class="body">${p[1]}</p></div>`).join('')}</div>
</div></section>

<section class="sec" id="locations" style="padding-top:0"><div class="wrap">
 ${sechead('&#8212;','Where to find us')}
 <div class="split" style="margin-bottom:44px">
  ${rise('h2','dsp-m',[['Five cities.'],['Six houses.',1]])}
  <div class="rv-i"><p class="body">${note('Unverified','The city-to-house mapping below is read off the client&#8217;s own brand copy. Exact room counts and street addresses per city have never been supplied, and none are stated here.')}</p></div>
 </div>
 <div class="cities rv-i">${CITIES.map(c=>`<div><div class="cn">${c[0]}</div><div class="cc">${c[1]}</div></div>`).join('')}</div>
</div></section>
`+foot()}

function house(h){
 const i=HOUSES.indexOf(h),prev=HOUSES[(i+5)%6],next=HOUSES[(i+1)%6];
 const galReal=h.gal.map((g,k)=>`<figure class="plate"><img src="${IMG[g]}" alt="" style="aspect-ratio:${k%2?'3/4':'4/3'}"></figure>`).join('');
 const galGaps=SHOTS.slice(0,4-h.gal.length+(h.soon?1:1)).map((s,k)=>`<div class="rv-i">${gap('','Plate '+String(k+1+h.gal.length).padStart(2,'0'),s,'Shoot required')}</div>`).join('');
 const hero=h.img?`<div class="hero-img"><div class="px"><img src="${IMG[h.img]}" alt="${h.name}"></div></div>`
  :`<div class="hero-img" style="background:var(--ink);display:flex;align-items:center;justify-content:center"><div style="max-width:540px;width:86%">${gap('ondark','Hero plate','A wide photograph of the room, shot at dusk','Revealing Soon')}</div></div>`;
 const SECS=[['01','The House'],['02','The Table'],['03','The Room'],['04','Occasions'],['05','Plates'],['06','Finding it']];

 return mast(h)+`
<nav class="rail" style="--house:${h.ink}">${SECS.map(x=>`<a href="#s${x[0]}" data-sec="s${x[0]}"><span class="bar"></span>${x[0]}</a>`).join('')}</nav>
<section class="hero" style="--house:${h.ink}">
 ${hero}
 <div class="hero-in">
  <div class="eyebrow rv-i">${h.n} &#183; ${h.cat} &#183; ${h.city}</div>
  ${rise('h1','dsp-xl',[[h.name+'.']])}
  <p class="hero-sub rv-i">${h.tag}</p>
 </div>
 <div class="hero-foot"><span>Campbell &#8212; House ${h.n} of 06</span><span class="cue"></span></div>
</section>

<div style="--house:${h.ink}">

<section class="sec"><div class="wrap">
 ${sechead('01','The House','s01')}
 <div class="split">
  <div class="rv-i"><div class="hr-n num" style="font-size:clamp(3.2rem,6.5vw,5.6rem);opacity:.26;margin-bottom:6px">${h.n}</div>
   ${rise('h2','dsp-m',[[h.cat+'.']])}
   <div class="hr-meta" style="margin-top:22px">${h.tags.map(t=>`<span class="pill">${t}</span>`).join('')}</div></div>
  <div class="rv-i">${h.body.map(b=>`<p class="body">${b}</p>`).join('')}
  ${note('Source','Verbatim from the client&#8217;s copy in the current build. Nothing added.')}</div>
 </div>
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
 ${sechead('02','The Table','s02')}
 <div class="split">
  <div>${h.cuisine.length?rise('h2','dsp-m',h.cuisine.map(c=>[c+'.'])):(h.soon?rise('h2','dsp-m',[['Kitchen'],['not yet announced.',1]]):rise('h2','dsp-m',[['No kitchen'],['on this house.',1]]))}</div>
  <div class="rv-i">${gap('','Food &amp; drinks','Menu highlights, the chef, the signature dishes and the bar programme &#8212; three to four sentences','Copy required')}</div>
 </div>
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
 ${sechead('03','The Room','s03')}
 <div class="g2">
  <div>${h.gal[0]?`<figure class="plate"><img src="${IMG[h.gal[0]]}" alt="" style="aspect-ratio:4/5"></figure>`:`<div class="rv-i">${gap('tall','Plate','Interior, wide &#8212; the room as a guest first sees it','Shoot required')}</div>`}</div>
  <div class="rv-i" style="align-self:center">${gap('','The experience','What the evening actually feels like &#8212; the arrival, the service, the music, the hours','Copy required')}</div>
 </div>
</div></section>

</div>
${band(h.pull.split(/(?<=[,.]) /).slice(0,4),h.name+' &#183; House '+h.n,h.ink)}
<div style="--house:${h.ink}">

<section class="sec"><div class="wrap">
 ${sechead('04','Occasions','s04')}
 <div class="rv-i">${gap('wide','Private events','Capacities per space, the kinds of occasion hosted, and one enquiry route','Copy required &#8212; and a decision on where an enquiry goes')}</div>
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
 ${sechead('05','Plates','s05')}
 <div class="g2">${galReal}${galGaps}</div>
 ${h.rejected?note('Asset rejected',h.rejected):''}
 ${note('Photography',`This house currently holds ${h.gal.length + (h.img?1:0)} usable photographs. The gallery as designed needs six to eight.`)}
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
 ${sechead('06','Finding it','s06')}
 <div class="split">
  <div>${rise('h2','dsp-m',[[h.city]])}
   ${h.addr?`<p class="lede rv-i" style="margin-top:18px;color:var(--ink-2)">${h.addr}</p>`:''}</div>
  <div class="rv-i">${gap('','Address &amp; hours','Full street address, opening hours per day, and a map reference for each city','Client facts required')}</div>
 </div>
</div></section>

</div>

<nav class="nextprod">
 <a href="#/${prev.id}"><div class="k">&#8592; House ${prev.n}</div><div class="v">${prev.name}</div></a>
 <a href="#/${next.id}" class="r"><div class="k">House ${next.n} &#8594;</div><div class="v">${next.name}</div></a>
</nav>
`+foot()}

/* ================= ENGINE ================= */
const RM=window.matchMedia('(prefers-reduced-motion: reduce)');
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function toggleNotes(){document.documentElement.classList.toggle('notes')}
function toggleNav(){document.documentElement.classList.toggle('navopen')}
function closeNav(){document.documentElement.classList.remove('navopen')}

let busy=false;
async function go(hash,ink,name){
 if(busy)return; 
 if(RM.matches){closeNav();location.hash=hash;return}
 busy=true;closeNav();
 const c=document.getElementById('curtain');
 c.style.background=ink||'#16130F';
 c.querySelector('.cn').textContent=name||'';
 c.classList.add('lit');
 await c.animate([{transform:'translateY(100%)'},{transform:'translateY(0)'}],{duration:560,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'}).finished;
 location.hash=hash;
 await wait(140);
 c.classList.remove('lit');
 await c.animate([{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:640,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'}).finished;
 c.style.transform='translateY(100%)';c.getAnimations().forEach(a=>a.cancel());
 busy=false;
}
document.addEventListener('click',ev=>{
 const a=ev.target.closest('a[href^="#/"]'); if(!a)return;
 const id=a.getAttribute('href').slice(2);
 if(('#/'+id)===location.hash||(id===''&&(location.hash===''||location.hash==='#/'))){ev.preventDefault();closeNav();return}
 const h=HOUSES.find(x=>x.id===id);
 ev.preventDefault();
 go(a.getAttribute('href'),h?h.ink:'#16130F',h?h.name:'Campbell');
},true);
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')closeNav()});

let raf=null,px=[],rail=[],mastEl=null,progEl=null,lastY=0;
function frame(){
 const y=window.scrollY,vh=window.innerHeight;
 if(progEl){const d=document.body.scrollHeight-vh;progEl.style.transform='scaleX('+(d>0?Math.min(1,y/d):0)+')'}
 if(mastEl){
  const solid=y>vh-90;
  mastEl.classList.toggle('solid',solid);mastEl.classList.toggle('onphoto',!solid);
  mastEl.classList.toggle('up', y>lastY&&y>vh*0.9&&!document.documentElement.classList.contains('navopen'));
 }
 lastY=y;
 if(!RM.matches)for(const el of px){
  const r=el.parentElement.getBoundingClientRect();
  if(r.bottom<-200||r.top>vh+200)continue;
  const p=(r.top+r.height/2-vh/2)/vh;
  el.style.transform='translate3d(0,'+(p*-7).toFixed(2)+'%,0)';
 }
 if(rail.length){document.documentElement.classList.toggle('railon',y>vh*0.78);const bands=[...document.querySelectorAll('[data-band]')];
  const mid=vh/2;let over=false;
  for(const bd of bands){const r=bd.getBoundingClientRect();if(r.top<mid&&r.bottom>mid){over=true;break}}
  document.documentElement.classList.toggle('onink',over);
 }
 for(const a of rail){
  const t=document.getElementById(a.dataset.sec);
  if(!t)continue;const r=t.getBoundingClientRect();
  a.classList.toggle('act',r.top<vh*0.42&&r.bottom>0||r.top<0&&r.top>-t.offsetHeight);
 }
 raf=null;
}
function onScroll(){if(raf===null)raf=requestAnimationFrame(frame)}

function init(){
 mastEl=document.getElementById('mast');progEl=document.getElementById('prog');
 px=[...document.querySelectorAll('.px')];
 rail=[...document.querySelectorAll('.rail a')];
 const heroInk=getComputedStyle(document.querySelector('.hero')||document.body).getPropertyValue('--house');
 if(progEl&&heroInk)progEl.style.background=heroInk.trim()||'#16130F';
 window.removeEventListener('scroll',onScroll);window.addEventListener('scroll',onScroll,{passive:true});
 window.removeEventListener('resize',onScroll);window.addEventListener('resize',onScroll,{passive:true});
 lastY=0;frame();
 const hi=document.querySelector('.hero-img img');
 if(hi)requestAnimationFrame(()=>{hi.classList.add('on');const w=hi.closest('.plate,.fig');});
 const heroImgWrap=document.querySelector('.hero-img');
 const items=[...document.querySelectorAll('.rv-i,.rise,.plate,.fig')];
 const showAll=()=>items.forEach(x=>x.classList.add('on'));
 if(!('IntersectionObserver'in window)||RM.matches){showAll();return}
 // hero content fires immediately, staged
 const heroBits=[...document.querySelectorAll('.hero .rv-i,.hero .rise')];
 heroBits.forEach((x,i)=>setTimeout(()=>x.classList.add('on'),120+i*110));
 const io=new IntersectionObserver(es=>{es.forEach(en=>{
   if(!en.isIntersecting)return;
   const sibs=[...en.target.parentElement.children].filter(c=>c.matches('.rv-i,.rise,.plate,.fig'));
   const d=Math.max(0,sibs.indexOf(en.target));
   setTimeout(()=>en.target.classList.add('on'),Math.min(d,4)*90);
   io.unobserve(en.target);
 })},{rootMargin:'0px 0px -9% 0px',threshold:.05});
 items.forEach(x=>{if(!heroBits.includes(x))io.observe(x)});
 setTimeout(showAll,5000);
 // bill row ink wash
 document.querySelectorAll('.house-row').forEach(r=>{
  r.addEventListener('pointerenter',()=>r.classList.add('warm'));
  r.addEventListener('pointerleave',()=>r.classList.remove('warm'));
 });
}
function render(){
 const id=(location.hash||'#/').replace('#/','').replace(/\/$/,'');
 const h=HOUSES.find(x=>x.id===id);
 document.documentElement.classList.toggle('home',!h);
 document.getElementById('app').innerHTML=h?house(h):home();
 window.scrollTo(0,0);
 requestAnimationFrame(init);
}
document.documentElement.classList.add('rv');
document.getElementById('chrome').innerHTML=chrome();
window.addEventListener('hashchange',render);
render();
