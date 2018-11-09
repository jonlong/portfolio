import React from 'react'
import { Flex } from 'rebass'
import styled from 'react-emotion'
import BaseLayout from '../layouts/base'
import { colors, shevy } from '../styles/settings'
import { modularScale } from 'polished'
import Column from '../components/Column'
import Section from '../components/Section'
import Badge from '../components/Badge'
import List from '../components/List'
import { Element as ListItem } from '../components/ListItem'
import { Title, Subtitle, SectionTitle } from '../components/Heading'
import {
  CaseStudyLink,
  CaseStudyListItem,
  CaseStudyInfo,
  CaseStudyMeta,
} from '../components/CaseStudy'

const Copy = styled('p')`
  ${shevy.content};
  color: ${colors.gray[2]};
`

const SectionLink = styled(CaseStudyLink)`
  margin-right: ${modularScale(0)};

  &:hover {
    box-shadow: 0 ${modularScale(-5)} 0 0 ${colors.blue};
  }
`

const IndexPage = () => (
  <BaseLayout>
    <Column>
      <Section>
        <Title element="h1">Jon Long</Title>
        <Flex width={2 / 3}>
          <Subtitle element="p">
            Creative Technologist. <br />In the past I've worked as a Designer,
            Developer, Product Manager, and VP of Engineering.
          </Subtitle>
        </Flex>
      </Section>

      <Section>
        <SectionTitle element="h2">Selected Work</SectionTitle>

        <List>
          <CaseStudyListItem>
            <CaseStudyMeta>
              <CaseStudyLink to="/work/criterion">
                The Criterion Collection
              </CaseStudyLink>
              <CaseStudyInfo>Website</CaseStudyInfo>
            </CaseStudyMeta>
            <List inline>
              <ListItem>
                <Badge variant="dev" />
              </ListItem>
            </List>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyMeta>
              <CaseStudyLink to="/work/remedy-plan/">
                Remedy Plan Therapeutics
              </CaseStudyLink>
              <CaseStudyInfo>Website, Branding, Crowdfunding</CaseStudyInfo>
            </CaseStudyMeta>
            <List inline>
              <ListItem>
                <Badge variant="ux" />
              </ListItem>
              <ListItem>
                <Badge variant="design" />
              </ListItem>
              <ListItem>
                <Badge variant="dev" />
              </ListItem>
              <ListItem>
                <Badge variant="lead" />
              </ListItem>
            </List>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyMeta>
              <CaseStudyLink to="/work/redds">
                Redd's Apple Launcher
              </CaseStudyLink>
              <CaseStudyInfo>Web-based game, Connected Hardware</CaseStudyInfo>
            </CaseStudyMeta>
            <List inline>
              <ListItem>
                <Badge variant="ux" />
              </ListItem>
              <ListItem>
                <Badge variant="dev" />
              </ListItem>
              <ListItem>
                <Badge variant="lead" />
              </ListItem>
            </List>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyMeta>
              <CaseStudyLink to="/work/national-geographic">
                National Geographic
              </CaseStudyLink>
              <CaseStudyInfo>Website</CaseStudyInfo>
            </CaseStudyMeta>
            <List inline>
              <ListItem>
                <Badge variant="dev" />
              </ListItem>
              <ListItem>
                <Badge variant="lead" />
              </ListItem>
            </List>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyMeta>
              <CaseStudyLink to="/work/component-libraries">
                Component Libraries
              </CaseStudyLink>
              <CaseStudyInfo>Living Styleguides</CaseStudyInfo>
            </CaseStudyMeta>
            <List inline>
              <ListItem>
                <Badge variant="dev" />
              </ListItem>
            </List>
          </CaseStudyListItem>

          <CaseStudyListItem>
            <CaseStudyMeta>
              <CaseStudyLink to="/page-2/">Product Development</CaseStudyLink>
              <CaseStudyInfo>Research, Prototyping</CaseStudyInfo>
            </CaseStudyMeta>
            <List inline>
              <ListItem>
                <Badge variant="ux" />
              </ListItem>
              <ListItem>
                <Badge variant="design" />
              </ListItem>
              <ListItem>
                <Badge variant="dev" />
              </ListItem>
              <ListItem>
                <Badge variant="lead" />
              </ListItem>
            </List>
          </CaseStudyListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle element="h2">About Me</SectionTitle>
        <Copy>
          I’ve worked in large publishing organizations and small agencies. I’ve
          led front-end and full stack engineering portions of projects with
          budgets in the millions. I’ve been on every side of the equation, from
          management to client to design and development, and have planned and
          built solutions for some of the largest brands and companies in the
          world.
        </Copy>

        <Copy>
          In my spare time I play pinball, make music, and founded and and run
          the Philly Pinball Club.
        </Copy>
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
            <SectionLink to="https://github.com/jonlong">Github</SectionLink>
          </ListItem>
        </List>
      </Section>
    </Column>
  </BaseLayout>
)

export default IndexPage