import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'
import styled from 'react-emotion'
import { rem } from 'polished'
import imagesLoaded from 'imagesloaded'

const OverflowContainer = styled(Flex)`
  overflow-x: scroll;
  margin-bottom: ${rem('-30px')};
  padding-bottom: ${rem('30px')};
  position: relative;
  touch-action: pan-x;

  // use hardware acceleration
  transform: translateZ(0);
`

const ScrollBarClip = styled('div')`
  overflow: hidden;
  cursor: move;
  cursor: grab;
`

const Gallery = ({ children }) => (
  <ScrollBarClip>
    <OverflowContainer>{children}</OverflowContainer>
  </ScrollBarClip>
)

Gallery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Gallery
