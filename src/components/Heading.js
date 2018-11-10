import React from 'react'
import styled, { css } from 'react-emotion'
import { lighten, modularScale } from 'polished'
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

  ${mq.medium(css`
    ${shevy.h2};
  `)};
  ${mq.large(css`
    ${shevy.h1};
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
  ${shevy.h5};
  color: ${lighten(0.3, colors.gray[2])};
`

const SectionTitle = styled(Base)`
  ${shevy.h5};
  color: ${colors.blue};
  border-bottom: 1px solid ${lighten(0.6, colors.gray[2])};
  padding-bottom: ${shevy.baseSpacing(0.25)};
`

export { Post, Title, Subtitle, TertiaryTitle, SectionTitle }
