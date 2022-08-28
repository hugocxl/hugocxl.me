import { ThemeOptions } from '@mui/material'

const fontFamilyHeader =
  'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
const fontFamilyBody =
  'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'

const commonHeaderProps = {
  fontFamily: fontFamilyHeader,
  fontWeight: 600
  // letterSpacing: '-1px'
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
      fontWeight: 600,
      letterSpacing: '0px'
    },
    subtitle2: {
      fontWeight: 600,
      letterSpacing: '0px'
    },
    button: {},
    body1: {
      lineHeight: 1.75
    },
    body2: {
      fontSize: '0.7rem'
    }
  },
  shadows: [
    'none',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)',
    '0 8px 12px 0 rgb(0 0 0 / 8%)'
  ],
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
    MuiTooltip: {
      defaultProps: {
        arrow: true
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
