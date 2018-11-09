import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { colors, fontWeights } from '../styles/settings'
import { modularScale } from 'polished'

const variants = {
  design: colors.red,
  dev: colors.orange,
  lead: colors.green,
  ux: colors.blue,
}

const Element = styled('span')`
  font-size: ${modularScale(-1)};
  display: inline-block;
  padding: ${modularScale(-3)} ${modularScale(-1)};
  border-radius: ${modularScale(-4)};
  font-weight: ${fontWeights.semibold};
  color: white;
  ${({ variant }) => css`
    background-color: ${variants[variant]};
  `};
`

const Badge = ({ variant }) => (
  <Element variant={variant}>
    {variant === 'design' && 'Design'}
    {variant === 'dev' && 'Development'}
    {variant === 'lead' && 'Lead'}
    {variant === 'ux' && 'User Experience'}
  </Element>
)

Badge.propTypes = {
  variant: PropTypes.string.isRequired,
}

export default Badge
