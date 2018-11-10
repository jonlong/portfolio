import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import BaseLayout from './base'
import Banner from '../components/Banner'
import PostColumn from '../components/PostColumn'
import Pagination, { Prev, Next } from '../components/Pagination'

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

      <Pagination>
        {prev && (
          <Prev to={prev.fields.slug} background={prev.frontmatter.background}>
            &larr;&nbsp;&nbsp;
            {prev.frontmatter.title}
          </Prev>
        )}
        {next && (
          <Next to={next.fields.slug} background={next.frontmatter.background}>
            {next.frontmatter.title}
            &nbsp;&nbsp;&rarr;
          </Next>
        )}
      </Pagination>
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
