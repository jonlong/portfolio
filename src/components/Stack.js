import React from 'react'
import styled from 'react-emotion'
import { modularScale, rem } from 'polished'
import { layout, colors, shevy } from '../styles/settings'
import { Element as ListItem } from './ListItem'
import { TertiaryTitle } from './Heading'

const Header = styled('h2')`
  // color: white;
`

const Container = styled('div')`
  max-width: ${layout.textLength};
  margin-bottom: ${modularScale(3)};
  font-size: 0.8rem;
  background: ${colors.gray[0]};
  padding: ${modularScale(1)};

  ${TertiaryTitle} {
    margin-top: ${modularScale(2)};
  }

  ${ListItem} {
    list-style: none;
    margin-bottom: ${rem('10px')};
    margin-right: ${rem('5px')};

    p {
      margin-bottom: 0;
      font-style: italic;
    }
  }

  ${Header} {
    ${shevy.h4};
    margin-right: ${modularScale(0)};
  }
`

const Stack = ({ children }) => (
  <Container>
    <Header>Stack</Header>
    {children}
  </Container>
)

export default Stack
