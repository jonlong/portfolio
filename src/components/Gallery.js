import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'
import styled from '@emotion/styled'
import { rem } from 'polished'
import Impetus from '../assets/js/vendor/impetus'
import imagesLoaded from 'imagesloaded'

const OverflowContainer = styled(Flex)`
  overflow-x: scroll;
  margin-bottom: ${rem('-30px')};
  padding-bottom: ${rem('30px')};
  position: relative;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;

  // use hardware acceleration
  transform: translateZ(0);
`

const ScrollBarClip = styled('div')`
  overflow: hidden;
  cursor: move;
  cursor: grab;
`

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.impetusSource = React.createRef()
  }

  componentDidMount() {
    const el = this.impetusSource.current
    console.log({el})

    imagesLoaded(el, () => {
      const maxScroll = el.scrollWidth - el.offsetWidth

      new Impetus({
        source: el,
        boundX: [-maxScroll, 0],
        bounce: true,
        update: x => {
          const leftPosition = -x
          el.scrollLeft = leftPosition

          // enable elastic effect past scroll boundaries with transforms
          if (leftPosition < 0) {
            el.style.transform = `translateX(${x}px)`
          } else if (leftPosition > maxScroll) {
            el.style.transform = `translateX(-${leftPosition - maxScroll}px)`
          } else {
            el.style.transform = 'translateX(0)'
          }
        },
      })
    })
  }

  render() {
    return (
      <ScrollBarClip>
        <OverflowContainer ref={this.impetusSource}>
          {this.props.children}
        </OverflowContainer>
      </ScrollBarClip>
    )
  }
}

Gallery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Gallery
