import React from 'react'
import styled from 'react-emotion'
import { colors } from '../styles/settings'
import { rem } from 'polished'

const Element = styled('div')`
  background-color: ${colors.gray[3]};
  border-radius: ${rem('8px')};
  padding: ${rem('5px')} ${rem('5px')} ${rem('2px')};

  video {
    border-radius: ${rem('4px')};
  }
`

const Video = props => (
  <Element>
    <video {...props}>{props.children}</video>
  </Element>
)

export default Video

export { Element }
