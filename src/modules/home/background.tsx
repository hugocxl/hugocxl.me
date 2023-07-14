'use client'

import { GradientCanvas, Gradient } from 'shadergradient'

export function Background() {
  return (
    <GradientCanvas style={{ position: 'absolute' }}>
      <Gradient
        cDistance={32}
        cPolarAngle={125}
        color1='#ff5005'
        color2='#dbba95'
        color3='#d0bce1'
      />
    </GradientCanvas>
  )
}
