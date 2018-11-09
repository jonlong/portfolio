import React from 'react'
import { css } from 'react-emotion'
import { Link as GatsbyLink } from 'gatsby'
import { colors } from '../styles/settings'

const styles = css`
  color: ${colors.blue};
  text-decoration: none;
`

const Link = ({ children, to, ...other }) => {
  // Any link with http:// or https:// is external
  const external = /^(https?:\/\/)/.test(to)

  if (external) {
    return (
      <a className={styles} href={to} {...other}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink className={styles} to={to} {...other}>
      {children}
    </GatsbyLink>
  )
}

export default Link
