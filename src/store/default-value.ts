import { createColor, createShadow } from '@/lib/utils'

import { Gradient } from './constants'

import type { Styles } from './interface'

export const defaultBackgroundColor = '#FFFFFF00'
export const defaultBorderColor = '#FFFFFF00'
export const defaultTextColor = '#000'
export const defaultShadowColor = 'rgba(0, 0, 0, 0)'
export const defaultIconColor = '#FFFFFF'
export const defaultTextFont = 'sans-serif'
export const defaultTextShadowAndIconShadowColor = 'rgba(0, 0, 0, 0)'

export const defaultStyles: Styles = {
  backgroundColors: [createColor(defaultBackgroundColor)],
  backgroundGradient: Gradient.Linear,
  backgroundRotation: 180,
  borderColors: [createColor(defaultBorderColor)],
  borderGradient: Gradient.Linear,
  borderRadius: [64, 64, 64, 64],
  borderRotation: 180,
  borderWidth: 8,
  iconColor: defaultIconColor,
  iconOffset: [0, 0],
  iconPerspective: [false, 0, 0],
  iconRotation: 0,
  iconShadow: [createShadow(defaultTextShadowAndIconShadowColor)],
  iconSize: 256,
  insetShadows: [createShadow(defaultShadowColor)],
  padding: true,
  shadows: [createShadow(defaultShadowColor)],
  textColorRotation: 0,
  textColors: [createColor(defaultTextColor)],
  textFont: defaultTextFont,
  textGradient: Gradient.Linear,
  textItalic: false,
  textOffset: [0, 0],
  textPerspective: [false, 0, 0],
  textRotation: 0,
  textShadow: [createShadow(defaultTextShadowAndIconShadowColor)],
  textSize: 128,
  textStroke: false,
  textStrokeColor: defaultBackgroundColor,
  textStrokeWidth: 2,
  textValue: '',
  textWeight: '400',
}
