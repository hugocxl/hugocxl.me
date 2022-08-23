import { ThemeOptions } from '@mui/material'

const fontFamilyHeader =
  'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
const fontFamilyBody =
  'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'

const commonHeaderProps = {
  fontFamily: fontFamilyHeader,
  fontWeight: 700,
  letterSpacing: '-1px'
}

export const coreTheme: ThemeOptions = {
  typography: {
    fontFamily: fontFamilyBody,
    h1: {
      ...commonHeaderProps
    },
    h2: {
      ...commonHeaderProps
    },
    h3: {
      ...commonHeaderProps
    },
    h4: {
      ...commonHeaderProps
    },
    h5: {
      ...commonHeaderProps
    },
    h6: {
      ...commonHeaderProps
    },
    subtitle1: {
      fontWeight: 700
    },
    subtitle2: {
      fontWeight: 700
    },
    button: {},
    body1: {},
    body2: {}
  },
  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const isHeader =
            ownerState.variant[0] === 'h' ||
            ownerState.variant.includes('subtitle')
          const isParagraph = ownerState.paragraph

          return {
            ...(isHeader && {
              color: theme.palette.primary.main
            }),
            ...(isParagraph && {
              marginBottom: theme.spacing(3)
            })
          }
        }
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiLink: {
      defaultProps: {
        color: 'secondary',
        underline: 'hover'
      }
    },
    MuiChip: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        color: 'secondary'
      },
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    }
  }
}
