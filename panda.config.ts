import {
  defineConfig,
  defineGlobalStyles,
  defineSemanticTokens,
  defineTokens
} from '@pandacss/dev'

const tokens = defineTokens({
  colors: {
    primary: { value: '#76d9e6' }
  },
  lineHeights: {
    normal: { value: '1.6' }
  },
  fontWeights: {
    medium: { value: '400' },
    bold: { value: '500' },
    bolder: { value: '700' }
  },
  radii: {
    sm: { value: '8px' },
    md: { value: '12px' },
    lg: { value: '16px' }
  },
  shadows: {
    sm: { value: '0 2px 6px rgba(0, 0, 0, 0.12)' },
    md: { value: '0 8px 16px rgba(0, 0, 0, 0.12)' },
    lg: { value: '0 16px 32px rgba(0, 0, 0, 0.12)' }
  },
  sizes: {
    sm: { value: '4px' },
    md: { value: '12px' },
    lg: { value: '20px' }
  },
  spacing: {
    xs: { value: '4px' },
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '32px' }
  },
  fontSizes: {
    sm: { value: '12px' },
    md: { value: '16px' },
    lg: { value: '18px' }
  },
  borders: {}
})

const semanticTokens = defineSemanticTokens({
  borders: {
    primary: {
      value: '1px solid {colors.border.primary}'
    },
    secondary: {
      value: '1px solid {colors.border.secondary}'
    }
  },
  colors: {
    bg: {
      primary: {
        value: {
          _osLight: 'hsl(0 0% 100%)',
          _osDark: 'hsl(0 0% 10%)'
        }
      },
      secondary: {
        value: {
          _osLight: 'hsl(0 0% 97%)',
          _osDark: 'hsl(0 0% 14%)'
        }
      },
      code: {
        value: {
          _osLight: 'hsl(0 0% 97%)',
          _osDark: 'hsl(0 0% 14%)'
        }
      },
      button: {
        value: {
          _osLight: 'hsl(0 0% 94%)',
          _osDark: 'hsl(0 0% 15%)'
        }
      }
    },
    border: {
      primary: {
        value: {
          _osLight: 'rgba(0,0,0,0.07)',
          _osDark: 'hsl(0 0% 25%)'
        }
      },
      secondary: {
        value: {
          _osLight: 'rgba(0,0,0,0.04)',
          _osDark: 'hsl(0 0% 15%)'
        }
      }
    },
    text: {
      primary: {
        value: { _osLight: 'hsl(0 0% 5%)', _osDark: 'hsl(0 0% 100%)' }
      },
      secondary: {
        value: { _osLight: 'hsl(0 0% 20%)', _osDark: 'hsl(0 0% 100%)' }
      },
      tertiary: {
        value: {
          _osLight: 'hsl(0 0% 22%)',
          _osDark: 'hsl(216deg 12.2% 83.92%)'
        }
      },
      dimmed: {
        value: { _osLight: 'hsl(0 0% 60%)', _osDark: 'hsl(0 0% 50%)' }
      }
    }
  }
})

const globalCss = defineGlobalStyles({
  html: {
    backgroundColor: 'bg.primary',
    color: 'text.tertiary',
    fontSize: 'md',
    lineHeight: 'normal'
  },
  body: {
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  button: {
    backgroundColor: 'bg.button',
    color: 'text.tertiary',
    padding: 'sm',
    borderRadius: 'sm',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      color: 'text.secondary',
      bg: 'bg.secondary'
    }
  },
  i: {
    fontStyle: 'italic'
  },
  a: {
    color: 'text.primary',
    fontWeight: 'medium',
    textDecoration: 'underline',
    textDecorationColor: 'border.primary',
    textDecorationThickness: 2,
    textUnderlineOffset: 3,
    '&:hover': {
      color: 'text.dimmed'
    }
  },
  ul: {
    listStyle: 'disc',
    paddingInlineStart: '2rem'
  },
  hr: {
    borderColor: 'border.primary',
    borderStyle: 'solid'
  },
  'b, strong': {
    color: 'text.secondary',
    fontWeight: 'bold'
  },
  'h1, h2, h3, h4, h5, h6': {
    color: 'text.primary',
    fontWeight: 'bolder'
  },
  'p, li, .notion-text, .notion-toggle, .notion-code, .notion-quote, .notion-callout, .notion-asset-wrapper':
    {
      marginBottom: 'md'
    },
  h1: {
    fontSize: '1.3rem',
    marginBottom: '1rem'
  },
  h2: {
    fontSize: '1.15rem',
    marginTop: '4rem',
    marginBottom: '0.75rem'
  },
  h3: {
    fontSize: '1.05rem',
    marginTop: '2.5rem',
    marginBottom: '0.5rem'
  },
  h4: {
    fontSize: '1rem',
    marginTop: '1.5rem',
    marginBottom: '0.25rem'
  },
  '::selection': {
    color: 'black',
    background: 'primary'
  },
  '::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: 'transparent'
  },
  '::-webkit-scrollbar-track': {
    borderRadius: 10
  },
  '::-webkit-scrollbar:vertical': {
    width: 4
  },
  '::-webkit-scrollbar:horizontal': {
    height: 4
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: 10,
    backgroundColor: 'bg.secondary'
  }
})

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  globalCss,
  theme: {
    extend: {},
    tokens,
    semanticTokens
  },
  conditions: {
    light: '[data-theme-mode=light] &',
    dark: '[data-theme-mode=dark] &'
  },
  jsxFramework: 'react'
})
