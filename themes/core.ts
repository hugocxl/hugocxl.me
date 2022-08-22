const fontFamilyHeader = 'Inter, sans-serif'
const fontFamilyBody = 'Inter, sans-serif'

const commonHeaderProps = {
  fontFamily: fontFamilyHeader,
  fontWeight: 700,
  letterSpacing: '-1px'
}

export const coreTheme = {
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
      fontWeight: 500
    },
    subtitle2: {
      fontWeight: 500
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

          return {
            ...(isHeader && {
              color: theme.palette.primary.main
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
    }
  }
}
