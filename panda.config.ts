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
    normal: { value: '1.65' }
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
    lg: { value: '20px' },
    content: { value: '680px' }
  },
  spacing: {
    xs: { value: '4px' },
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '32px' }
  },
  fontSizes: {
    sm: { value: '13px' },
    md: { value: '15px' },
    lg: { value: '18px' }
  },
  borders: {},
  contentWidth: {
    value: '640px'
  }
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
          _osDark: 'hsl(0 0% 0%)'
        }
      },
      secondary: {
        value: {
          _osLight: 'hsl(0 0% 97%)',
          _osDark: 'hsl(0 0% 8%)'
        }
      },
      code: {
        value: {
          _osLight: 'hsl(0 0% 97%)',
          _osDark: 'hsl(0 0% 10%)'
        }
      },
      button: {
        value: {
          _osLight: 'hsl(0 0% 94%)',
          _osDark: 'hsl(0 0% 10%)'
        }
      }
    },
    border: {
      primary: {
        value: {
          _osLight: 'hsl(0 0% 70%)',
          _osDark: 'hsl(0 0% 30%)'
        }
      },
      secondary: {
        value: {
          _osLight: 'hsl(0 0% 90%)',
          _osDark: 'hsl(0 0% 10%)'
        }
      }
    },
    text: {
      primary: {
        value: { _osLight: 'hsl(0 0% 0%)', _osDark: 'hsl(0 0% 100%)' }
      },
      secondary: {
        value: {
          _osLight: 'hsl(0 0% 0%)',
          _osDark: 'hsl(0 0% 90%)'
        }
      },
      dimmed: {
        value: { _osLight: 'hsl(0 0% 60%)', _osDark: 'hsl(0deg 0% 45%)' }
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
    lineHeight: 'normal',
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol',
    mdDown: {
      fontSize: 'sm'
    }
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
    color: 'text.primary',
    textDecoration: 'underline',
    textDecorationColor: 'border.primary',
    textDecorationThickness: 1,
    textUnderlineOffset: 3,
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: 'text.dimmed'
    }
  },
  ul: {
    listStyle: 'disc',
    paddingInlineStart: '1rem'
  },
  hr: {
    borderColor: 'border.secondary',
    borderStyle: 'solid'
  },
  i: {
    fontStyle: 'italic'
  },
  'b, strong': {
    lineHeight: 1.3,
    fontWeight: 'medium',
    fontFamily: 'Newspaper',
    fontSize: 'calc(1rem + 2px)',
    color: 'text.primary'
  },
  'h1, h2, h3, h4, h5, h6': {
    letterSpacing: '-.04em',
    color: 'text.primary',
    fontWeight: 'bolder'
  },
  code: {
    fontFamily: 'Menlo, monospace',
    fontSize: '0.85rem'
  },
  li: {
    marginBottom: 'sm'
  },
  'p, .notion-text, .notion-toggle, .notion-code, .notion-quote, .notion-callout, .notion-asset-wrapper':
    {
      marginBottom: 'lg'
    },
  h1: {
    marginBottom: '1rem'
  },
  h2: {
    marginTop: '3rem',
    marginBottom: '0.75rem'
  },
  h3: {
    marginTop: '2rem',
    marginBottom: '0.5rem'
  },
  h4: {
    marginTop: '1rem',
    marginBottom: '0.5rem'
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
