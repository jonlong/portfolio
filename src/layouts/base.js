import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'react-emotion'
import Helmet from 'react-helmet'
import data from '../../config/data'
import resetStyles from '../styles/reset'
import globalStyles from '../styles/global'
import deviceStyles from '../styles/device'
import { normalize } from 'polished'

injectGlobal`
  ${normalize()}
  ${resetStyles}
  ${globalStyles}
  ${deviceStyles}
`

const BaseLayout = ({ children }) => (
  <div>
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{data.site.title}</title>
    </Helmet>
    {children}
  </div>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
