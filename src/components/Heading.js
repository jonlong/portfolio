import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { lighten, modularScale, rem } from 'polished'
import { colors, shevy } from '../styles/settings'
import { mq } from '../styles/utils'

const Base = ({ children, element, ...props }) => {
  return React.createElement(element, props, children)
}

const Post = styled(Base)`
  font-size: ${modularScale(3)};
  line-height: 0.9;

  ${mq.medium(css`
    font-size: ${modularScale(4)};
  `)};

  ${mq.large(css`
    font-size: ${modularScale(5)};
    line-height: 0.9;
  `)};
`

const Title = styled(Base)`
  ${shevy.h3};
  margin-bottom: ${rem('6px')};

  ${mq.medium(css`
    ${shevy.h2};
    margin-bottom: ${rem('8px')};
  `)};
  ${mq.large(css`
    ${shevy.h1};
    margin-bottom: ${rem('10px')};
  `)};
`

const Subtitle = styled(Base)`
  ${shevy.h5};

  ${mq.medium(css`
    ${shevy.h4};
  `)};
  ${mq.large(css`
    ${shevy.h3};
  `)};
  color: ${lighten(0.3, colors.gray[2])};
  font-weight: 300;
`

const TertiaryTitle = styled(Base)`
  ${shevy.h6};
  color: ${lighten(0.3, colors.gray[2])};
  margin-bottom: ${rem('10px')};
  font-weight: 600;
`

const SmallCapsTitle = styled(Base)`
  font-size: ${rem('14px')};
  font-weight: 600;
  letter-spacing: ${rem('1px')};
  text-transform: uppercase;
  color: ${lighten(0.3, colors.gray[2])};
  margin-bottom: ${rem('12px')};
`

const SectionTitle = styled(Base)`
  ${shevy.h5};
  color: ${colors.blue};
  border-bottom: 1px solid ${lighten(0.6, colors.gray[2])};
  padding-bottom: ${shevy.baseSpacing(0.25)};
`

Base.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string.isRequired
}

export { Post, Title, Subtitle, TertiaryTitle, SmallCapsTitle, SectionTitle }
