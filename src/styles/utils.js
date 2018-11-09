import { css } from 'react-emotion'
import { breakpoints } from './settings'

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : '(min-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px)'

  accumulator[label] = cls =>
    css`
      @media ${prefix + breakpoints[label] + suffix} {
        ${cls};
      }
    `
  return accumulator
}, {})
