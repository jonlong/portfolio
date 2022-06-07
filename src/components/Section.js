import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { mq } from '../styles/utils'
import { modularScale } from 'polished'

const Element = styled('section')`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  margin-bottom: ${modularScale(1)};

  &:last-child {
    margin-bottom: 0;
  }

  ${mq.medium(css`
    margin-bottom: ${modularScale(2)};
  `)};
  ${mq.large(css`
    margin-bottom: ${modularScale(3)};
  `)};
`

const Section = ({ children, flexDirection }) => (
  <Element flexDirection={flexDirection}>{children}</Element>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string,
}

export default Section
