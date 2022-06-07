import React from 'react'
import PropTypes from 'prop-types'
import { Global, css, CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import Helmet from 'react-helmet'
import data from '../../config/data'
import resetStyles from '../styles/reset'
import globalStyles from '../styles/global'
import deviceStyles from '../styles/device'
import { normalize } from 'polished'

const BaseLayout = ({ children }) => (
  <CacheProvider value={createCache({
    key: 'portfolio'
  })}>
    <Global
      styles={css`
        ${normalize()}
        ${resetStyles}
        ${globalStyles}
        ${deviceStyles}
      `}
    />
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{data.site.title}</title>
    </Helmet>
    {children}
  </CacheProvider>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
