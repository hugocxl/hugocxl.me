import {
  defineConfig,
  defineGlobalStyles,
  defineSemanticTokens,
  defineTokens
} from '@pandacss/dev'

const hsl = n => `hsl(0 0% ${n}%)`

const tokens = defineTokens({
  lineHeights: {
    sm: { value: '1.35' },
    md: { value: '1.5' },
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
          _light: hsl(97),
          _dark: hsl(7)
        }
      },
      secondary: {
        value: {
          _light: hsl(95),
          _dark: hsl(10)
        }
      },
      code: {
        value: {
          _light: hsl(92),
          _dark: hsl(12)
        }
      },
      button: {
        value: {
          _light: hsl(92),
          _dark: hsl(12)
        }
      }
    },
    border: {
      primary: {
        value: {
          _light: hsl(90),
          _dark: hsl(15)
        }
      },
      secondary: {
        value: {
          _light: hsl(90),
          _dark: hsl(12)
        }
      }
    },
    text: {
      primary: {
        value: { _light: hsl(0), _dark: hsl(100) }
      },
      secondary: {
        value: { _light: hsl(30), _dark: hsl(85) }
      },
      dimmed: {
        value: { _light: hsl(60), _dark: hsl(40) }
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
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      color: 'text.dimmed',
      bg: 'bg.secondary'
    }
  },
  a: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationColor: 'text.dimmed',
    textDecorationThickness: 1,
    textUnderlineOffset: 4,
    transition: 'color 0.2s ease-in-out',
    color: 'text.primary',
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
  'p, li, .notion-text, .notion-toggle, .notion-code, .notion-quote, .notion-callout, .notion-asset-wrapper':
    {
      marginTop: 'md'
    },
  '.notion-callout': {
    marginTop: 'lg',
    marginBottom: 'lg'
  },
  '.notion-asset-wrapper-image > div': {
    marginTop: 'lg',
    marginBottom: 'lg',
    maxWidth: '120%!',
    width: '120%!'
  },
  h1: {
    fontSize: '1.25rem',
    color: 'text.primary',
    textTransform: 'lowercase',
    letterSpacing: 'inherit'
  },
  h2: {
    marginTop: '4rem',
    fontSize: '0.85rem'
  },
  h3: {
    marginTop: '3rem'
  },
  h4: {
    marginTop: '2.5rem'
  },
  '::selection': {
    color: 'bg.primary',
    background: 'text.primary'
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
