/* eslint-disable */
export type Token =
  | 'colors.primary'
  | 'lineHeights.normal'
  | 'fontWeights.medium'
  | 'fontWeights.bold'
  | 'fontWeights.bolder'
  | 'radii.sm'
  | 'radii.md'
  | 'radii.lg'
  | 'shadows.sm'
  | 'shadows.md'
  | 'shadows.lg'
  | 'sizes.sm'
  | 'sizes.md'
  | 'sizes.lg'
  | 'sizes.breakpoint-sm'
  | 'sizes.breakpoint-md'
  | 'sizes.breakpoint-lg'
  | 'sizes.breakpoint-xl'
  | 'sizes.breakpoint-2xl'
  | 'spacing.xs'
  | 'spacing.sm'
  | 'spacing.md'
  | 'spacing.lg'
  | 'fontSizes.sm'
  | 'fontSizes.md'
  | 'fontSizes.lg'
  | 'breakpoints.sm'
  | 'breakpoints.md'
  | 'breakpoints.lg'
  | 'breakpoints.xl'
  | 'breakpoints.2xl'
  | 'borders.primary'
  | 'borders.secondary'
  | 'colors.bg.primary'
  | 'colors.bg.secondary'
  | 'colors.bg.button'
  | 'colors.bg.dock'
  | 'colors.bg.dockButton'
  | 'colors.bg.dockButtonHover'
  | 'colors.border.primary'
  | 'colors.border.secondary'
  | 'colors.text.primary'
  | 'colors.text.secondary'
  | 'colors.text.tertiary'
  | 'colors.text.dimmed'
  | 'spacing.-xs'
  | 'spacing.-sm'
  | 'spacing.-md'
  | 'spacing.-lg'
  | 'colors.colorPalette.primary'
  | 'colors.colorPalette.secondary'
  | 'colors.colorPalette.button'
  | 'colors.colorPalette.dock'
  | 'colors.colorPalette.dockButton'
  | 'colors.colorPalette.dockButtonHover'
  | 'colors.colorPalette.tertiary'
  | 'colors.colorPalette.dimmed'

export type ColorPalette = 'bg' | 'border' | 'text'

export type ColorToken =
  | 'primary'
  | 'bg.primary'
  | 'bg.secondary'
  | 'bg.button'
  | 'bg.dock'
  | 'bg.dockButton'
  | 'bg.dockButtonHover'
  | 'border.primary'
  | 'border.secondary'
  | 'text.primary'
  | 'text.secondary'
  | 'text.tertiary'
  | 'text.dimmed'
  | 'colorPalette.primary'
  | 'colorPalette.secondary'
  | 'colorPalette.button'
  | 'colorPalette.dock'
  | 'colorPalette.dockButton'
  | 'colorPalette.dockButtonHover'
  | 'colorPalette.tertiary'
  | 'colorPalette.dimmed'

export type LineHeightToken = 'normal'

export type FontWeightToken = 'medium' | 'bold' | 'bolder'

export type RadiusToken = 'sm' | 'md' | 'lg'

export type ShadowToken = 'sm' | 'md' | 'lg'

export type SizeToken =
  | 'sm'
  | 'md'
  | 'lg'
  | 'breakpoint-sm'
  | 'breakpoint-md'
  | 'breakpoint-lg'
  | 'breakpoint-xl'
  | 'breakpoint-2xl'

export type SpacingToken =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | '-xs'
  | '-sm'
  | '-md'
  | '-lg'

export type FontSizeToken = 'sm' | 'md' | 'lg'

export type BreakpointToken = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type BorderToken = 'primary' | 'secondary'

export type Tokens = {
  colors: ColorToken
  lineHeights: LineHeightToken
  fontWeights: FontWeightToken
  radii: RadiusToken
  shadows: ShadowToken
  sizes: SizeToken
  spacing: SpacingToken
  fontSizes: FontSizeToken
  breakpoints: BreakpointToken
  borders: BorderToken
} & { [token: string]: never }

export type TokenCategory =
  | 'zIndex'
  | 'opacity'
  | 'colors'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'
  | 'sizes'
  | 'shadows'
  | 'spacing'
  | 'radii'
  | 'borders'
  | 'durations'
  | 'easings'
  | 'animations'
  | 'blurs'
  | 'gradients'
  | 'breakpoints'
  | 'assets'
