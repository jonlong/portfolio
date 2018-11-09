import React from 'react'
import { Flex } from 'rebass'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import BaseLayout from './base'
import { darken, modularScale } from 'polished'
import { colors, fontWeights } from '../styles/settings'
import Banner from '../components/Banner'
import PostColumn from '../components/PostColumn'
import Link from '../components/Link'
import gradients from '../styles/gradients'

const Pager = styled(Link)`
  font-weight: ${fontWeights.bold};
  color: white;
  padding: ${modularScale(-3)} ${modularScale(-1)};
  border-radius: ${modularScale(-4)};
  text-decoration: none;
  transition: 0.1s all linear;
`

const Next = styled(Pager)`
  margin-left: auto;
  background: ${colors.blue};
  ${({ background }) => gradients[background]};

  &:hover {
    background-color: ${darken(0.06, colors.blue)};
  }
`

const Prev = styled(Pager)`
  margin-right: auto;
  background: ${colors.green};
  ${({ background }) => gradients[background]};

  &:hover {
    background-color: ${darken(0.03, colors.green)};
  }
`

const Post = ({ data, pageContext }) => {
  const { mdx } = data
  const { frontmatter, code } = mdx
  const { prev, next } = pageContext

  return (
    <BaseLayout>
      <Banner
        background={frontmatter.background}
        overhang={frontmatter.overhang}
        title={frontmatter.title}
      />

      <MDXRenderer>{code.body}</MDXRenderer>

      <PostColumn>
        <Flex justifyContent="space-between" flexDirection="row">
          {prev && (
            <Prev
              to={prev.fields.slug}
              background={prev.frontmatter.background}
            >
              &larr;&nbsp;&nbsp;
              {prev.frontmatter.title}
            </Prev>
          )}
          {next && (
            <Next
              to={next.fields.slug}
              background={next.frontmatter.background}
            >
              {next.frontmatter.title}
              &nbsp;&nbsp;&rarr;
            </Next>
          )}
        </Flex>
      </PostColumn>
    </BaseLayout>
  )
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      fields {
        slug
      }
      frontmatter {
        title
        overhang
        background
      }
    }
  }
`
