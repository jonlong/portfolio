import { css } from '@emotion/core'

const reset = css`
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
  }
`

export default reset
