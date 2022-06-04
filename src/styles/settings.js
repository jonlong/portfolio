import { rem, em } from 'polished'
import Shevy from 'shevyjs'

export const shevy = new Shevy({
  baseFontSize: '1em',
})

export const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  caseStudyLabels: '(min-width: 650px) and (max-width: 992px)',
  pagination: '(min-width: 650px)',
}

export const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 700,
  xbold: 900,
}

export const layout = {
  container: `${rem(breakpoints.medium)}`,
  textLength: `${rem(650)}`,
}

export const colors = {
  red: '#fa1955',
  orange: '#FF7F21',
  yellow: '#f6d000',
  green: '#009f6a',
  blue: '#509afc',
  darkblue: '#3c6496',
  gray: ['#ddd', '#999', '#303336', '#181e2a'],
  background: ['#f2f5f7', '#dce0e5'],
}

export const galleryBaseHeight = em('847px')

// scales the overall size of the device
export const galleryScale = [rem('9px')]
