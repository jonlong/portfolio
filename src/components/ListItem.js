import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Element = styled('li')`
  list-style: none;
`

const ListItem = ({ children }) => <Element>{children}</Element>

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ListItem

export { Element }
