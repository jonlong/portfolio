import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { Element as ListItem } from './ListItem'
import { modularScale } from 'polished'

const Element = styled('ul')`
  margin: 0;
  padding: 0;
  border: 0;

  ${props =>
    props.inline &&
    css`
      margin: 0 -${modularScale(-5)};

      ${ListItem} {
        display: inline-block;
        margin: ${modularScale(-5)};
      }
    `};
`

const List = ({ children, inline }) => (
  <Element inline={inline}>{children}</Element>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
}

export default List

export { Element }
