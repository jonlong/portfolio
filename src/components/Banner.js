import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { modularScale } from 'polished'
import { Post as Title } from './Heading'
import { mq } from '../styles/utils'
import gradients from '../styles/gradients'
import { window, exists } from 'browser-monads';

const Element = styled('div')`
  padding: ${modularScale(4)};
  ${({ background }) => gradients[background]};

  ${mq.medium(css`
    padding: ${modularScale(6)};
  `)};

  ${mq.large(css`
    padding: ${modularScale(7)};
  `)};

  ${({ overhang }) =>
    overhang &&
    css`
      padding-bottom: ${modularScale(9)};
      margin-bottom: -${modularScale(8.6)};

      ${mq.medium(css`
        padding-bottom: ${modularScale(10)};
        margin-bottom: -${modularScale(9)};
      `)};
      ${mq.large(css`
        padding-bottom: ${modularScale(10)};
        margin-bottom: -${modularScale(9)};
      `)};
    `};
`

const Heading = styled(Title)`
  color: white;
`

class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.storedBackgrounds = this.getReservedBackgrounds()

    if (props.background) {
      this.storeReservedBackground()
    }
  }

  storeReservedBackground = () => {
    // If it's not already stored, add it to storage
    if (!this.storedBackgrounds.includes(this.props.background)) {
      this.storedBackgrounds.push(this.props.background)

      window.sessionStorage.setItem(
        'backgrounds',
        JSON.stringify(this.storedBackgrounds)
      )
    }
  }

  getReservedBackgrounds = () => {

    const reserved = exists(window) ? JSON.parse(window.sessionStorage.getItem('backgrounds')) : false;
    return reserved && reserved.length > 0 ? reserved : []
  }

  pickRandomBackground = () => {
    const keys = Object.keys(gradients)
    const randomIndex = Math.floor(Math.random() * keys.length)
    const color = keys[randomIndex]
    const reserved = this.getReservedBackgrounds()

    // if it's a reserved background color, pick again
    if (reserved.includes(color)) {
      return this.pickRandomBackground()
    }

    return color
  }

  render() {
    return (
      <Element
        overhang={this.props.overhang}
        background={this.props.background || this.pickRandomBackground()}
      >
        <Heading element="h1">{this.props.title}</Heading>
      </Element>
    )
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  overhang: PropTypes.bool,
  background: PropTypes.string,
}

export default Banner
