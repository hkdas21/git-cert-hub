/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub Primer colors
        primer: {
          canvas: {
            default: '#ffffff',
            subtle: '#f6f8fa',
            inset: '#f6f8fa',
          },
          border: {
            default: '#d0d7de',
            muted: '#d8dee4',
          },
          fg: {
            default: '#24292f',
            muted: '#57606a',
            subtle: '#6e7781',
          },
          accent: {
            fg: '#0969da',
            emphasis: '#0969da',
            muted: 'rgba(84, 174, 255, 0.4)',
            subtle: '#ddf4ff',
          },
          success: {
            fg: '#1a7f37',
            emphasis: '#1f883d',
            muted: 'rgba(74, 194, 107, 0.4)',
            subtle: '#dafbe1',
          },
          danger: {
            fg: '#cf222e',
            emphasis: '#a40e26',
            muted: 'rgba(255, 129, 130, 0.4)',
            subtle: '#ffebe9',
          },
          dark: {
            canvas: {
              default: '#0d1117',
              subtle: '#161b22',
              inset: '#010409',
            },
            border: {
              default: '#30363d',
              muted: '#21262d',
            },
            fg: {
              default: '#e6edf3',
              muted: '#7d8590',
              subtle: '#6e7681',
            },
          },
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
