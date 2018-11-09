import styled from 'react-emotion'
import { layout } from '../styles/settings'
import Column from './Column'

const PostColumn = styled(Column)`
  max-width: ${layout.textLength};
`

export default PostColumn
