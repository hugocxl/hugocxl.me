const tokens = {
  "colors.primary": {
    "value": "#76d9e6",
    "variable": "var(--colors-primary)"
  },
  "lineHeights.normal": {
    "value": "1.6",
    "variable": "var(--line-heights-normal)"
  },
  "fontWeights.medium": {
    "value": "400",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.bold": {
    "value": "500",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.bolder": {
    "value": "600",
    "variable": "var(--font-weights-bolder)"
  },
  "radii.sm": {
    "value": "8px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "12px",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "16px",
    "variable": "var(--radii-lg)"
  },
  "sizes.sm": {
    "value": "4px",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "12px",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "20px",
    "variable": "var(--sizes-lg)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.xs": {
    "value": "4px",
    "variable": "var(--spacing-xs)"
  },
  "spacing.sm": {
    "value": "8px",
    "variable": "var(--spacing-sm)"
  },
  "spacing.md": {
    "value": "16px",
    "variable": "var(--spacing-md)"
  },
  "spacing.lg": {
    "value": "32px",
    "variable": "var(--spacing-lg)"
  },
  "fontSizes.sm": {
    "value": "12px",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "14px",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "20px",
    "variable": "var(--font-sizes-lg)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "borders.primary": {
    "value": "var(--borders-primary)",
    "variable": "var(--borders-primary)"
  },
  "borders.secondary": {
    "value": "var(--borders-secondary)",
    "variable": "var(--borders-secondary)"
  },
  "colors.bg.primary": {
    "value": "var(--colors-bg-primary)",
    "variable": "var(--colors-bg-primary)"
  },
  "colors.bg.secondary": {
    "value": "var(--colors-bg-secondary)",
    "variable": "var(--colors-bg-secondary)"
  },
  "colors.bg.button": {
    "value": "var(--colors-bg-button)",
    "variable": "var(--colors-bg-button)"
  },
  "colors.bg.dock": {
    "value": "var(--colors-bg-dock)",
    "variable": "var(--colors-bg-dock)"
  },
  "colors.bg.dockButton": {
    "value": "var(--colors-bg-dock-button)",
    "variable": "var(--colors-bg-dock-button)"
  },
  "colors.border.primary": {
    "value": "var(--colors-border-primary)",
    "variable": "var(--colors-border-primary)"
  },
  "colors.border.secondary": {
    "value": "var(--colors-border-secondary)",
    "variable": "var(--colors-border-secondary)"
  },
  "colors.text.primary": {
    "value": "var(--colors-text-primary)",
    "variable": "var(--colors-text-primary)"
  },
  "colors.text.secondary": {
    "value": "var(--colors-text-secondary)",
    "variable": "var(--colors-text-secondary)"
  },
  "colors.text.tertiary": {
    "value": "var(--colors-text-tertiary)",
    "variable": "var(--colors-text-tertiary)"
  },
  "colors.text.dimmed": {
    "value": "var(--colors-text-dimmed)",
    "variable": "var(--colors-text-dimmed)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-sm": {
    "value": "calc(var(--spacing-sm) * -1)",
    "variable": "var(--spacing-sm)"
  },
  "spacing.-md": {
    "value": "calc(var(--spacing-md) * -1)",
    "variable": "var(--spacing-md)"
  },
  "spacing.-lg": {
    "value": "calc(var(--spacing-lg) * -1)",
    "variable": "var(--spacing-lg)"
  },
  "colors.colorPalette.primary": {
    "value": "var(--colors-color-palette-primary)",
    "variable": "var(--colors-color-palette-primary)"
  },
  "colors.colorPalette.secondary": {
    "value": "var(--colors-color-palette-secondary)",
    "variable": "var(--colors-color-palette-secondary)"
  },
  "colors.colorPalette.button": {
    "value": "var(--colors-color-palette-button)",
    "variable": "var(--colors-color-palette-button)"
  },
  "colors.colorPalette.dock": {
    "value": "var(--colors-color-palette-dock)",
    "variable": "var(--colors-color-palette-dock)"
  },
  "colors.colorPalette.dockButton": {
    "value": "var(--colors-color-palette-dock-button)",
    "variable": "var(--colors-color-palette-dock-button)"
  },
  "colors.colorPalette.tertiary": {
    "value": "var(--colors-color-palette-tertiary)",
    "variable": "var(--colors-color-palette-tertiary)"
  },
  "colors.colorPalette.dimmed": {
    "value": "var(--colors-color-palette-dimmed)",
    "variable": "var(--colors-color-palette-dimmed)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar