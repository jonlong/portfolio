import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import BaseLayout from '../layouts/base'
import { colors } from '../styles/settings'
import { mq } from '../styles/utils'
import { modularScale } from 'polished'
import Column from '../components/Column'
import Section from '../components/Section'
import Badge from '../components/Badge'
import List from '../components/List'
import Link from '../components/Link'
import { Element as ListItem } from '../components/ListItem'
import { Title, Subtitle, SectionTitle } from '../components/Heading'
import {
  CaseStudyTitle,
  CaseStudyListItem,
  CaseStudyInfo,
  CaseStudyMeta,
  CaseStudyLink,
} from '../components/CaseStudy'

const SectionLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  margin: 0 ${modularScale(0)} 0 0;
  color: ${colors.gray[2]};

  &:hover {
    box-shadow: 0 ${modularScale(-5)} 0 0 ${colors.blue};
  }
`

const Subhead = styled('div')`
  display: flex;

  ${mq.small(css`
    width: 66%;
  `)};
`

const IndexPage = () => (
  <BaseLayout>
    <Column>
      <Section>
        <Title element="h1">Jon Long</Title>
        <Subhead>
          <Subtitle element="p">UI Developer and Tech Lead</Subtitle>
        </Subhead>
      </Section>

      <Section>
        <SectionTitle element="h2">Selected Work</SectionTitle>

        <List>
          <CaseStudyListItem>
            <CaseStudyLink to="/work/criterion">
              <CaseStudyMeta>
                <CaseStudyTitle>The Criterion Collection</CaseStudyTitle>
                <CaseStudyInfo>Website</CaseStudyInfo>
              </CaseStudyMeta>
              <List inline>
                <ListItem>
                  <Badge variant="dev" />
                </ListItem>
              </List>
            </CaseStudyLink>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyLink to="/work/design-systems">
              <CaseStudyMeta>
                <CaseStudyTitle>Design Systems</CaseStudyTitle>
                <CaseStudyInfo>Component Libraries and Styleguides</CaseStudyInfo>
              </CaseStudyMeta>
              <List inline>
                <ListItem>
                  <Badge variant="lead" />
                </ListItem>
                <ListItem>
                  <Badge variant="dev" />
                </ListItem>
              </List>
            </CaseStudyLink>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyLink to="/work/remedy-plan">
              <CaseStudyMeta>
                <CaseStudyTitle>Remedy Plan Therapeutics</CaseStudyTitle>
                <CaseStudyInfo>Website, Branding, Crowdfunding</CaseStudyInfo>
              </CaseStudyMeta>
              <List inline>
                <ListItem>
                  <Badge variant="design" />
                </ListItem>
                <ListItem>
                  <Badge variant="ux" />
                </ListItem>
                <ListItem>
                  <Badge variant="lead" />
                </ListItem>
                <ListItem>
                  <Badge variant="dev" />
                </ListItem>
              </List>
            </CaseStudyLink>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyLink to="/work/redds">
              <CaseStudyMeta>
                <CaseStudyTitle>Redd's Apple Launcher</CaseStudyTitle>
                <CaseStudyInfo>
                  Web-based game, Connected Hardware
                </CaseStudyInfo>
              </CaseStudyMeta>
              <List inline>
                <ListItem>
                  <Badge variant="ux" />
                </ListItem>
                <ListItem>
                  <Badge variant="lead" />
                </ListItem>
                <ListItem>
                  <Badge variant="dev" />
                </ListItem>
              </List>
            </CaseStudyLink>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyLink to="/work/national-geographic">
              <CaseStudyMeta>
                <CaseStudyTitle>National Geographic</CaseStudyTitle>
                <CaseStudyInfo>Website</CaseStudyInfo>
              </CaseStudyMeta>
              <List inline>
                <ListItem>
                  <Badge variant="lead" />
                </ListItem>
                <ListItem>
                  <Badge variant="dev" />
                </ListItem>
              </List>
            </CaseStudyLink>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyLink to="/work/product-development">
              <CaseStudyMeta>
                <CaseStudyTitle>Product Development</CaseStudyTitle>
                <CaseStudyInfo>Research, Prototyping</CaseStudyInfo>
              </CaseStudyMeta>
              <List inline>
                <ListItem>
                  <Badge variant="design" />
                </ListItem>
                <ListItem>
                  <Badge variant="ux" />
                </ListItem>
                <ListItem>
                  <Badge variant="lead" />
                </ListItem>
                <ListItem>
                  <Badge variant="dev" />
                </ListItem>
              </List>
            </CaseStudyLink>
          </CaseStudyListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle element="h2">Links</SectionTitle>
        <List inline>
          <ListItem>
            <SectionLink to="https://resume.linesandwaves.com">
              Résumé
            </SectionLink>
          </ListItem>
          <ListItem>
            <SectionLink to="https://github.com/jonlong">GitHub</SectionLink>
          </ListItem>
        </List>
      </Section>
    </Column>
  </BaseLayout>
)

export default IndexPage
