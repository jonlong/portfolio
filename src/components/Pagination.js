import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { darken, modularScale, rem } from 'polished'
import Link from './Link'
import gradients from '../styles/gradients'
import { colors, fontWeights } from '../styles/settings'
import { mq } from '../styles/utils'
import PostColumn from './PostColumn'

const Pager = styled(Link)`
  font-weight: ${fontWeights.bold};
  padding: ${modularScale(-3)} ${modularScale(-1)};
  border-radius: ${modularScale(-4)};
  text-decoration: none;
  transition: 0.1s all linear;
  width: 100%;
  margin-bottom: ${modularScale(1)};
  text-align: center;
  color: white;

  &:visited {
    color: white;
  }

  ${mq.pagination(css`
    width: auto;
    margin-bottom: 0;
    text-align: left;
  `)};
`

const Next = styled(Pager)`
  margin-left: auto;
  background: ${colors.blue};
  ${({ background }) => gradients[background]};

  &:hover {
    background-color: ${darken(0.06, colors.blue)};
  }
`

const Prev = styled(Pager)`
  margin-right: auto;
  background: ${colors.green};
  ${({ background }) => gradients[background]};

  &:hover {
    background-color: ${darken(0.03, colors.green)};
  }
`

const Element = styled(PostColumn)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 0 !important;

  ${mq.pagination(css`
    flex-direction: row;
    margin-top: ${rem('-5px')};
  `)};
`

const Pagination = ({ children }) => <Element>{children}</Element>

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
}

Next.propTypes = {
  background: PropTypes.string,
}

Prev.propTypes = {
  background: PropTypes.string,
}

export default Pagination

export { Pager, Next, Prev }
