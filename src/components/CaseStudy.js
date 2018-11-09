import { Box } from 'rebass'
import styled, { css } from 'react-emotion'
import { colors, shevy } from '../styles/settings'
import { mq } from '../styles/utils'
import { modularScale } from 'polished'
import Link from './Link'
import { Element as ListItem } from './ListItem'

const CaseStudyLink = styled(Link)`
  ${shevy.content};
  font-weight: 700;
  text-decoration: none;
  margin: 0;
  color: ${colors.gray[2]};
`
const CaseStudyListItem = styled(ListItem)`
  padding: ${modularScale(0)};
  padding-left: ${modularScale(1)};
  position: relative;
  margin-left: -${modularScale(1)};
  transition: all 0.2s ease-out;
  background: linear-gradient(0deg, ${colors.blue}, ${colors.blue}) no-repeat 0
    0;
  background-size: 0 100%;

  &:first-child {
    margin-top: 0;
  }

  ${mq.medium(css`
    display: flex;
    justify-content: space-between;
  `)};

  &:hover {
    cursor: pointer;
    background-size: ${modularScale(1)} 100%;
    padding-left: ${modularScale(3)};
    background-color: rgba(0, 0, 0, 0.025);
  }
`

const CaseStudyInfo = styled('p')`
  ${shevy.content};
  color: ${colors.gray[1]};
  font-style: italic;
  margin: 0;
`

const CaseStudyMeta = styled(Box)`
  margin-right: ${modularScale(2)};
  margin-bottom: ${modularScale(-3)};

  ${mq.medium(css`
    margin-bottom: 0;
  `)};
`

export { CaseStudyLink, CaseStudyListItem, CaseStudyInfo, CaseStudyMeta }
