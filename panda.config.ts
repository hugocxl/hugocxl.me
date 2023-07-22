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
    normal: { value: '28px' }
  },
  fontWeights: {
    medium: { value: '400' },
    bold: { value: '500' },
    bolder: { value: '600' }
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
    lg: { value: '20px' }
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
          _osLight: 'hsl(0 0% 80%)',
          _osDark: 'hsl(0 0% 25%)'
        }
      },
      secondary: {
        value: {
          _osLight: 'hsl(0 0% 90%)',
          _osDark: 'hsl(0 0% 15%)'
        }
      }
    },
    text: {
      primary: {
        value: { _osLight: 'hsl(0 0% 0%)', _osDark: 'hsl(0 0% 100%)' }
      },
      secondary: {
        value: {
          _osLight: 'hsl(0 0% 30%)',
          _osDark: 'hsl(0 0% 70%)'
        }
      },
      dimmed: {
        value: { _osLight: 'hsl(0 0% 60%)', _osDark: 'hsl(0 0% 50%)' }
      }
    }
  }
})

const globalCss = defineGlobalStyles({
  '*': {
    textRendering: 'optimizeLegibility'
  },
  html: {
    backgroundColor: 'bg.primary',
    color: 'text.secondary',
    fontSize: 'md',
    lineHeight: 'normal'
  },
  body: {
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  button: {
    backgroundColor: 'bg.button',
    color: 'text.secondary',
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
  a: {
    textDecoration: 'underline',
    textDecorationColor: 'border.primary',
    textDecorationThickness: 1,
    textUnderlineOffset: 3,
    '&:hover': {
      color: 'text.dimmed'
    }
  },
  ul: {
    listStyle: 'disc',
    paddingInlineStart: '1rem'
  },
  hr: {
    borderColor: 'border.primary',
    borderStyle: 'solid'
  },
  i: {
    fontStyle: 'italic'
  },
  'b, strong, a': {
    color: 'text.secondary',
    fontWeight: 'medium',
    fontFamily: 'Newspaper',
    fontSize: 'calc(1rem + 1px)',
    _osDark: {
      color: 'text.primary'
    }
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Newspaper',
    color: 'text.primary',
    fontWeight: 'bolder'
  },
  code: {
    fontFamily: 'Menlo, monospace',
    fontSize: 'sm'
  },
  li: {
    marginBottom: 'md'
  },
  'p, .notion-text, .notion-toggle, .notion-code, .notion-quote, .notion-callout, .notion-asset-wrapper':
    {
      marginBottom: 'lg'
    },
  h1: {
    fontSize: '1.3rem',
    marginBottom: '1rem'
  },
  h2: {
    fontSize: '1rem',
    marginTop: '4rem',
    marginBottom: '0.75rem'
  },
  h3: {
    fontSize: '0.9rem',
    marginTop: '2.5rem'
  },
  h4: {
    fontSize: '0.9rem',
    marginTop: '1.5rem'
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
