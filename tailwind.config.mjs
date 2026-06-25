import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#cac5c9",
        "surface-variant": "#363434",
        "outline-variant": "#49473f",
        "on-primary-fixed": "#1d1c17",
        "surface-dim": "#141313",
        "primary-fixed": "#e7e2da",
        "on-primary-container": "#67645e",
        "secondary": "#B08D57",
        "on-tertiary": "#323033",
        "on-error-container": "#ffdad6",
        "on-secondary": "#141313",
        "inverse-primary": "#615e58",
        "surface": "#141313",
        "surface-container-lowest": "#0f0e0e",
        "on-primary": "#32302b",
        "secondary-fixed": "#ffdeae",
        "on-secondary-container": "#d5af76",
        "tertiary": "#ffffff",
        "inverse-on-surface": "#31302f",
        "on-background": "#F4EFE7",
        "surface-container-highest": "#363434",
        "on-surface-variant": "#cbc6bc",
        "on-error": "#690005",
        "surface-container-low": "#1c1b1b",
        "surface-container-high": "#2b2a29",
        "secondary-fixed-dim": "#e8c086",
        "surface-tint": "#cac6be",
        "on-secondary-fixed-variant": "#5d4213",
        "inverse-surface": "#e6e2e0",
        "tertiary-fixed": "#e7e1e5",
        "on-tertiary-fixed": "#1d1b1e",
        "on-surface": "#F4EFE7",
        "primary": "#F4EFE7",
        "background": "#0E0E0F",
        "tertiary-container": "#e7e1e5",
        "primary-fixed-dim": "#cac6be",
        "surface-bright": "#3a3938",
        "on-tertiary-fixed-variant": "#494649",
        "error": "#ffb4ab",
        "primary-container": "#e7e2da",
        "on-primary-fixed-variant": "#494741",
        "on-secondary-fixed": "#281800",
        "outline": "#B08D57",
        "surface-container": "#201f1f",
        "on-tertiary-container": "#676367",
        "error-container": "#93000a",
        "secondary-container": "#5d4213",
        "brass": "#B08D57"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1440px",
        "section-padding-mobile": "64px",
        "gutter": "32px",
        "section-padding": "120px",
        "unit": "8px"
      },
      fontFamily: {
        "headline-md": [
          "Bodoni Moda"
        ],
        "button": [
          "Hanken Grotesk"
        ],
        "body-lg": [
          "Hanken Grotesk"
        ],
        "headline-lg": [
          "Bodoni Moda"
        ],
        "label-caps": [
          "Hanken Grotesk"
        ],
        "display-lg-mobile": [
          "Bodoni Moda"
        ],
        "display-lg": [
          "Bodoni Moda"
        ],
        "body-md": [
          "Hanken Grotesk"
        ]
      },
      fontSize: {
        "headline-md": [
          "32px",
          {
            "lineHeight": "40px",
            "fontWeight": "500"
          }
        ],
        "button": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.05em",
            "fontWeight": "600"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0.01em",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "48px",
          {
            "lineHeight": "56px",
            "fontWeight": "500"
          }
        ],
        "label-caps": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.15em",
            "fontWeight": "600"
          }
        ],
        "display-lg-mobile": [
          "48px",
          {
            "lineHeight": "52px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "display-lg": [
          "84px",
          {
            "lineHeight": "92px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ]
      },
    },
  },
  plugins: [forms, containerQueries],
};
