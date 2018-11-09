import styled from 'react-emotion'
import { shevy } from '../styles/settings'
import { modularScale } from 'polished'

const Markdown = styled('div')`
  &:first-child {
    margin-top: ${modularScale(2)};
  }

  & + & {
    margin-top: ${modularScale(4)};
  }

  h2 {
    ${shevy.h3};
  }

  h3 {
    ${shevy.h4};
  }

  h4 {
    ${shevy.h5};
  }

  p,
  li {
    ${shevy.content};
  }

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul li {
    list-style: disc;
  }
`

export default Markdown
