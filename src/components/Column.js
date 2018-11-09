import { Flex } from 'rebass'
import styled, { css } from 'react-emotion'
import { layout } from '../styles/settings'
import { mq } from '../styles/utils'
import { modularScale } from 'polished'

const Column = styled(Flex)`
  flex-direction: column;
  margin: 0 auto;
  max-width: ${layout.container};
  width: 100%;
  padding: ${modularScale(1)};

  ${mq.medium(css`
    padding: ${modularScale(2)};
  `)};
  ${mq.large(css`
    padding: ${modularScale(3)};
  `)};
`

export default Column
