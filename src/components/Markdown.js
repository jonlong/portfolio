import styled from '@emotion/styled'
import { shevy } from '../styles/settings'
import { modularScale } from 'polished'
import { colors } from '../styles/settings'

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
    margin-left: ${modularScale(0)};
    padding-left: ${modularScale(-2)}
  }

  li {
    ul {
      margin-top: ${modularScale(1)};
    }
    li {
      margin-bottom: 0;
      margin-top: ${modularScale(0)};

      &::marker {
        color: ${colors.gray[1]}
        content: "►";
      }
    }
  }
`

export default Markdown
