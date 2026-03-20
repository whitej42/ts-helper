/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Core rail palette (light-mode primary tokens) ──────────────
        rail: {
          navy: {
            DEFAULT: '#0A1E5E', // NSE Navy — primary / headers
            50:  '#E8ECF5',
            100: '#C2CCDF',
            200: '#97A7C8',
            300: '#6B82B0',
            400: '#3A5A95',
            500: '#0A1E5E',
            600: '#081849',
            700: '#061235',
            800: '#040D26',
            900: '#020815',
          },
          red: {
            DEFAULT: '#C8102E', // Signal Red — accent / CTAs
            light:   '#E52038',
            dark:    '#9A0B23',
          },
          amber: {
            DEFAULT: '#EDBA00', // Amber Warning — alerts / badges
            light:   '#F0C820', // Caution Yellow (dark mode variant)
            dark:    '#C9A000',
          },
          cream: '#F5F5F0',     // Platform Grey — light mode page bg
        },

        // ── Dark mode surfaces ─────────────────────────────────────────
        surface: {
          dark:          '#1A1E2E', // Night Track — dark page bg
          'dark-card':   '#252B42', // Depot Dark — card / surface
          'dark-alt':    '#292F48', // between Depot Dark and Track Border
          'dark-border': '#2E3450', // Track Border — borders / dividers
        },

        // ── Extra named tokens (available as utility classes) ──────────
        cornflower:      '#5B9BD5', // Secondary accent (light mode)
        'signal-blue':   '#4A7FC1', // Primary accent (dark mode)
        'red-aspect':    '#E8304A', // Highlight / danger (dark mode)
        'caution-yellow':'#F0C820', // Warnings / badges (dark mode)
        'mist-grey':     '#A8B4C8', // Body text (dark mode)
        'ballast-grey':  '#D0D0C8', // Borders / dividers (light mode)
        'carriage-white':'#FFFFFF', // Card / surface (light mode)
        'platform-grey': '#F5F5F0', // Page background (light mode)

        // ── Publisher tag colours ──────────────────────────────────────
        publisher: {
          ap:          '#aa0000', // Armstrong Powerhouse
          dovetail:    '#00b6e4', // Dovetail Games
          thomson:     '#7B2D8B', // Thomson Interactive
          jt:          '#2e5208', // Just Trains
          unspecified: '#6B7280', // Unknown
        },
      },

      // ── Typography ────────────────────────────────────────────────────
      fontFamily: {
        rail: ['"Franklin Gothic Medium"', '"Arial Narrow"', 'Arial', 'sans-serif'],
        sans: ['"Franklin Gothic Medium"', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },

      fontSize: {
        // Override defaults — base sizes were too small
        'xs':   ['0.875rem',  { lineHeight: '1.5' }],  // 14px  (was 12px)
        'sm':   ['1rem',      { lineHeight: '1.5' }],  // 16px  (was 14px)
        'base': ['1.125rem',  { lineHeight: '1.6' }],  // 18px  (was 16px)

        // Departure-board scale
        'display':  ['3.5rem', { lineHeight: '1',   letterSpacing: '-0.01em', fontWeight: '700' }],
        'board':    ['2rem',   { lineHeight: '1.1', letterSpacing: '0.06em',  fontWeight: '700' }],
        'board-sm': ['1.25rem',{ lineHeight: '1.2', letterSpacing: '0.04em',  fontWeight: '700' }],
      },

      letterSpacing: {
        rail:  '0.04em',
        board: '0.10em',
        tight: '-0.01em',
      },

      // ── Shadows ───────────────────────────────────────────────────────
      boxShadow: {
        rail:              '0 4px 6px -1px rgba(10,30,94,0.20), 0 2px 4px -1px rgba(10,30,94,0.10)',
        'rail-lg':         '0 10px 25px -4px rgba(10,30,94,0.30), 0 4px 6px -2px rgba(10,30,94,0.12)',
        board:             'inset 0 2px 6px rgba(0,0,0,0.60)',
        card:              '0 2px 8px rgba(0,0,0,0.10)',
        'card-hover':      '0 8px 24px rgba(0,0,0,0.22)',
        'dark-card':       '0 2px 8px rgba(0,0,0,0.50)',
        'dark-card-hover': '0 8px 24px rgba(0,0,0,0.70)',
      },

      // ── Border radius ─────────────────────────────────────────────────
      borderRadius: {
        rail: '2px',
        card: '4px',
      },

      // ── Extra spacing ─────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '88':  '22rem',
        '96':  '24rem',
        '128': '32rem',
      },

      // ── Animations ────────────────────────────────────────────────────
      animation: {
        'slide-in-right':  'slideInRight 0.25s ease-out',
        'slide-out-right': 'slideOutRight 0.25s ease-in',
        'fade-in':         'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideInRight:  { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        slideOutRight: { '0%': { transform: 'translateX(0)' },    '100%': { transform: 'translateX(100%)' } },
        fadeIn:        { '0%': { opacity: '0' },                  '100%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
};
