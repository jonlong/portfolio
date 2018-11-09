import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { modularScale } from 'polished'
import { galleryBaseHeight, galleryScale } from '../styles/settings'
import { Window } from './Browser'
import { Element as Video } from './Video'
import { Element as Still } from './Still'

const Element = styled('div')`
  padding: ${modularScale(1)};

  &:not(:first-child) {
    padding-left: 0;
  }

  img {
    height: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
  }

  ${Still} {
    img {
      height: calc(${galleryBaseHeight} + 15px);
    }
  }

  ${Window} {
    img {
      height: calc(${galleryBaseHeight} - 12px);
    }
  }

  ${Video} {
    img, video {
      height: calc(${galleryBaseHeight} + 3px);
    }
  }


  ${Window}, ${Video}, ${Still} {
    img,
    video {
      font-size: ${galleryScale[0]};
      width: auto;
    }
  }
`

const GalleryItem = ({ children }) => <Element>{children}</Element>

GalleryItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GalleryItem

export { Element }
