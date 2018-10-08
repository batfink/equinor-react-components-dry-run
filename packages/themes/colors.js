import { hsl } from 'polished'

/* eslint-disable no-multi-spaces */
/* eslint-disable key-spacing */

export const colors = {
    white:    { hue: 100, saturation: 1.00, lightness:  1.00 },
    black:    { hue:   0, saturation: 0.00, lightness:  0.20 },
    energy:   { hue: 348, saturation: 1.00, lightness:  0.54 },
    heritage: { hue: 343, saturation: 1.00, lightness:  0.24 },
    slate:    { hue: 206, saturation: 0.32, lightness:  0.21 },
    moss:     { hue: 184, saturation: 1.00, lightness:  0.24 },
    spruce:   { hue:  25, saturation: 1.00, lightness:  0.92 },
    lichen:   { hue: 138, saturation: 0.67, lightness:  0.94 },
    mist:     { hue: 199, saturation: 0.58, lightness:  0.90 },
}

export const white     = hsl(colors.white)
export const black     = hsl(colors.black)
export const energy    = hsl(colors.energy)
export const heritage  = hsl(colors.heritage)
export const slate     = hsl(colors.slate)
export const moss      = hsl(colors.moss)
export const spruce    = hsl(colors.spruce)
export const lichen    = hsl(colors.lichen)
export const mist      = hsl(colors.mist)
