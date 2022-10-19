import { ThemeOptions } from '@mui/material'

const fontFamilyHeader =
  'Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
const fontFamilyBody =
  'Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'

const commonHeaderProps = {
  fontFamily: fontFamilyHeader,
  fontWeight: 600
}

export const coreTheme: ThemeOptions = {
  typography: {
    fontFamily: fontFamilyBody,
    h1: {
      ...commonHeaderProps,
      letterSpacing: '-3px'
    },
    h2: {
      ...commonHeaderProps,
      letterSpacing: '-3px'
    },
    h3: {
      ...commonHeaderProps,
      letterSpacing: '-0.5px'
    },
    h4: {
      ...commonHeaderProps,
      letterSpacing: '-0.5px'
    },
    h5: {
      ...commonHeaderProps,
      letterSpacing: '-0.5px'
    },
    h6: {
      ...commonHeaderProps,
      letterSpacing: '-0.5px'
    },
    subtitle1: {
      ...commonHeaderProps
    },
    subtitle2: {
      ...commonHeaderProps
    },
    button: {},
    body1: {
      lineHeight: 2
    },
    body2: {
      // fontSize: '0.7rem'
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
          const isHeader = ownerState.variant[0] === 'h'
          const isSubtitle = ownerState.variant.includes('subtitle')
          const isParagraph = ownerState.paragraph

          return {
            ...((isHeader || isSubtitle) && {
              color: theme.palette.primary.main
            }),
            ...(isHeader && {
              marginBottom: theme.spacing(2)
            }),
            ...(isParagraph && {
              marginBottom: theme.spacing(3)
            })
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '12px 20px',
          textTransform: 'none',
          fontSize: '1rem'
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
          borderRadius: 6
        }
      }
    }
  }
}