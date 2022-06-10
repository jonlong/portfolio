import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { modularScale } from 'polished'
import { colors } from '../styles/settings'
import inlineImage from '../styles/inlineImage'
import { lighten, rem } from 'polished'
import { Element as Still } from './Still'
import { Element as Video } from './Video'
import Description from './Description'
import PostColumn from './PostColumn'
import Markdown from './Markdown'

const Control = styled('span')`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;

  ${({ variant }) => css`
    background-color: ${colors[variant]};
    border: 1px solid ${colors[variant]};
  `};
`

const Chrome = styled('div')`
  background-color: ${lighten(0.06, colors.gray[0])};
  padding: 5px 12px;
  border-radius: ${rem('8px')};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${colors.gray[0]};
`

const Window = styled('div')`
  overflow: hidden;
`

const Wrapper = styled('div')`
  font-size: ${rem('12px')};

  ${PostColumn} & {
    ${inlineImage};
  }

  ${Video} {
    video {
      width: 100%;
      border-radius: 0;
    }

    border: 0;
    padding: 0;
    border-radius: 0;
    background: none;
  }

  ${Still} {
    ${PostColumn} & {
      margin: 0;
    }

    img {
      border-color: ${colors.gray[0]};
      border-top: 0;
    }
  }
`

const Browser = ({ children, description }) => (
  <Wrapper>
    <Window>
      <Chrome>
        <Control variant="red" />
        <Control variant="yellow" />
        <Control variant="green" />
      </Chrome>
      {children}
    </Window>
    {description && <Description>{description}</Description>}
  </Wrapper>
)

Browser.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string
}

Control.propTypes = {
  variant: PropTypes.string
}

export default Browser

export { Window }
