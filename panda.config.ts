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
    md: { value: '14px' },
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
          base: 'hsl(0 0% 100%)',
          _dark: 'hsl(0 0% 8.5%)'
        }
      },
      secondary: {
        value: {
          base: 'hsl(0 0% 97%)',
          _dark: 'hsl(0 0% 11.3%)'
        }
      },
      button: {
        value: {
          base: 'hsl(0 0% 94%)',
          _dark: 'hsl(0 0% 15%)'
        }
      },
      dock: {
        value: {
          base: 'rgba(255, 255, 255, 0.7)',
          _dark: 'rgba(255, 255, 255, 0.1)'
        }
      },
      'dock-button': {
        value: {
          base: 'linear-gradient(10deg, rgba(230,230,230,1), rgba(250,250,250,1))',
          _dark: 'linear-gradient(10deg, rgba(70,70,70,1), rgba(110,110,110,1))'
        }
      }
    },
    border: {
      primary: {
        value: {
          base: 'rgba(0,0,0,0.07)',
          _dark: 'rgba(255,255,255,0.085)'
        }
      },
      secondary: {
        value: {
          base: 'rgba(0,0,0,0.04)',
          _dark: 'rgba(255,255,255,0.06)'
        }
      }
    },
    text: {
      primary: {
        value: { base: 'hsl(0 0% 0%)', _dark: 'hsl(0 0% 100%)' }
      },
      secondary: {
        value: { base: 'hsl(0 0% 20%)', _dark: 'hsl(0 0% 80%)' }
      },
      tertiary: {
        value: { base: 'hsl(0 0% 40%)', _dark: 'hsl(0 0% 60%)' }
      },
      dimmed: {
        value: { base: 'hsl(0 0% 60%)', _dark: 'hsl(0 0% 40%)' }
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
  a: {
    color: 'text.secondary',
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationColor: 'border.primary',
    textDecorationThickness: 2,
    textUnderlineOffset: 3,
    '&:hover': {
      color: 'text.dimmed'
    }
  },
  ul: {
    listStyle: 'disc'
  },
  hr: {
    borderColor: 'border.primary',
    borderStyle: 'solid',
    borderWidth: '1px'
  },
  'b, strong': {
    color: 'text.secondary',
    fontWeight: 'bold'
  },
  'h1, h2, h3, h4, h5, h6': {
    color: 'text.primary',
    fontWeight: 'bolder'
    // letterSpacing: '-0.03rem'
  },
  'p, li, .notion-text, .notion-toggle, .notion-code, .notion-quote, .notion-callout, .notion-asset-wrapper':
    {
      marginBottom: 'md'
    },
  h1: {
    fontSize: '1.2rem',
    marginTop: '6rem',
    marginBottom: '1rem'
  },
  h2: {
    fontSize: '1rem',
    marginTop: '4rem',
    marginBottom: '0.5rem'
  },
  h3: {
    fontSize: '1rem',
    marginTop: '2.5rem',
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
  outdir: './src/shared/styles/styled-system',
  jsxFramework: 'react'
})
