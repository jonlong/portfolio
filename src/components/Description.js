import styled from 'react-emotion'
import { colors } from '../styles/settings'
import { rem, modularScale } from 'polished'

const Description = styled('p')`
  font-size: ${rem('12px')};
  font-style: italic;
  color: ${colors.gray[1]};
  margin-top: ${modularScale(0)};
`
export default Description
