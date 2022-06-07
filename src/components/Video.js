import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
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

Video.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string
}

export default Video

export { Element }
