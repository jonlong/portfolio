import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import inlineImage from '../styles/inlineImage'
import { rem } from 'polished'
import PostColumn from './PostColumn'
import Description from './Description'

const Element = styled('div')`
  border-radius: ${rem('2px')};

  ${PostColumn} & {
    ${inlineImage};
  }

  img {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
`

const Still = ({ src, alt, description }) => (
  <Element>
    <img src={src} alt={alt} />
    {description && <Description>{description}</Description>}
  </Element>
)

Still.propTypes = {
  description: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Still

export { Element }
