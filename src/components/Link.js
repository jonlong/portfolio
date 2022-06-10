/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { jsx } from '@emotion/react'
import { Link as GatsbyLink } from 'gatsby'
import { colors } from '../styles/settings'

const styles = css`
  color: ${colors.blue};

  &:visited {
    color: ${colors.darkblue};
  }
`

const Link = ({ children, to, ...other }) => {
  // Any link with http:// or https:// is external
  const external = /^(https?:\/\/)/.test(to)

  if (external) {
    return (
      <a css={styles} href={to} {...other}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink css={styles} to={to} {...other}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link
