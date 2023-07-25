import {
  defineConfig,
  defineGlobalStyles,
  defineSemanticTokens,
  defineTokens
} from '@pandacss/dev'

const hsl = n => `hsl(0 0% ${n}%)`

const tokens = defineTokens({
  colors: {
    primary: { value: '#76d9e6' }
  },
  lineHeights: {
    sm: { value: '1.35' },
    md: { value: '1.4' },
    lg: { value: '1.9' }
  },
  fontWeights: {
    medium: { value: '400' },
    bold: { value: '600' }
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
  spacing: {
    xs: { value: '4px' },
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '32px' }
  },
  fontSizes: {
    sm: { value: '12px' },
    md: { value: '14px' },
    lg: { value: '24px' }
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
          _osLight: hsl(97),
          _osDark: hsl(7)
        }
      },
      secondary: {
        value: {
          _osLight: hsl(95),
          _osDark: hsl(10)
        }
      },
      code: {
        value: {
          _osLight: hsl(92),
          _osDark: hsl(12)
        }
      },
      button: {
        value: {
          _osLight: hsl(92),
          _osDark: hsl(12)
        }
      }
    },
    border: {
      primary: {
        value: {
          _osLight: hsl(70),
          _osDark: hsl(40)
        }
      },
      secondary: {
        value: {
          _osLight: hsl(90),
          _osDark: hsl(10)
        }
      }
    },
    text: {
      primary: {
        value: { _osLight: hsl(0), _osDark: hsl(100) }
      },
      secondary: {
        value: { _osLight: hsl(0), _osDark: hsl(75) }
      },
      dimmed: {
        value: { _osLight: hsl(60), _osDark: hsl(40) }
      }
    }
  }
})

const globalCss = defineGlobalStyles({
  html: {
    backgroundColor: 'bg.primary',
    textRendering: 'optimizeLegibility',
    color: 'text.secondary',
    fontSize: 'md',
    fontWeight: 'medium',
    lineHeight: 'md',
    smDown: {
      lineHeight: 'sm',
      fontSize: 'sm'
    }
  },
  button: {
    backgroundColor: 'bg.button',
    color: 'text.primary',
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
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationColor: 'border.primary',
    textDecorationThickness: 1,
    textUnderlineOffset: 4,
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: 'text.dimmed'
    }
  },
  ul: {
    listStyle: 'disc',
    paddingInlineStart: '2rem'
  },
  hr: {
    borderColor: 'border.secondary',
    borderStyle: 'solid'
  },
  'b, strong': {
    color: 'text.primary',
    fontWeight: 'bold'
  },
  'h1, h2, h3, h4, h5, h6': {
    letterSpacing: '.15em',
    color: 'text.dimmed',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '0.75rem'
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
      marginBottom: 'md'
    },
  h1: {
    marginBottom: '1rem',
    fontSize: 'lg',
    color: 'text.primary',
    textTransform: 'capitalize',
    letterSpacing: 'inherit'
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
