import React from 'react'
import styled from 'react-emotion'
import Description from './Description'

const Element = styled('div')`
  video {
    border: 1px solid rgba(0, 0, 0, 0.15);
    display: block;
  }
`

const Video = props => (
  <Element>
    <video {...props}>{props.children}</video>
    {props.description && <Description>{props.description}</Description>}
  </Element>
)

export default Video

export { Element }
