const fontFamilyHeader = 'Monument, Helvetica, Arial, sans-serif'
const fontFamilyBody = 'Space Grotesk, Helvetica, Arial, sans-serif'

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
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    }
  }
}
