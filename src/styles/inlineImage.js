import { css } from '@emotion/core'
import { modularScale } from 'polished'
import { mq } from './utils'

const inlineImage = css`
  margin: ${modularScale(4)} 0;

  ${mq.medium(css`
    margin-left: -${modularScale(4)};
    margin-right: -${modularScale(4)};
  `)};

  ${mq.large(css`
    margin-left: -${modularScale(6)};
    margin-right: -${modularScale(6)};
  `)};
`

export default inlineImage
