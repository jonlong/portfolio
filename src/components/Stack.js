import React from 'react'
import styled from '@emotion/styled'
import { modularScale, rem, lighten, darken } from 'polished'
import { layout, colors } from '../styles/settings'
import { Element as ListItem } from './ListItem'
import { TertiaryTitle, SmallCapsTitle } from './Heading'

const Container = styled('div')`
  max-width: ${layout.textLength};
  margin-bottom: ${modularScale(3)};
  font-size: 0.8rem;
  background: ${props =>
    props.theme ? lighten(0.43, colors[props.theme]) : colors.gray[0]};
  border: 1px solid;
  border-color: ${props =>
    props.theme ? lighten(0.2, colors[props.theme]) : colors.gray[0]};
  border-radius: 0.4rem;
  padding: ${modularScale(1)};

  ${TertiaryTitle} {
    color: ${props => (props.theme ? darken(0.2, colors[props.theme]) : 'inherit')};
    margin-top: ${modularScale(2)};
  }

  ${ListItem} {
    list-style: disc;
    margin-bottom: ${rem('10px')};
    margin-right: ${rem('5px')};
    margin-left: ${rem('13px')};
    color: ${props => (props.theme ? darken(0.35, colors[props.theme]) : 'inherit')};

    a {
      color: ${props =>
        props.theme ? darken(0.35, colors[props.theme]) : 'inherit'};
    }

    p {
      margin-bottom: 0;
      font-style: italic;
    }
  }

  ${SmallCapsTitle} {
    margin-right: ${modularScale(0)};
    color: ${props => (props.theme ? darken(0.2, colors[props.theme]) : 'inherit')};
  }
`

const Stack = ({ children, theme = false }) => (
  <Container theme={theme}>
    <SmallCapsTitle element="h2" theme={theme}>Stack</SmallCapsTitle>
    {children}
  </Container>
)

export default Stack
