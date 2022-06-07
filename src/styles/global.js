import { css } from '@emotion/core'
import { colors } from './settings'

const global = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Roboto Light', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    background: ${colors.background[0]};
    color: ${colors.gray[2]};
  }

  @media screen and (min-width: 800px) {
    html {
      font-size: calc(1.125em + 0.05vw);
    }
  }
`

export default global
