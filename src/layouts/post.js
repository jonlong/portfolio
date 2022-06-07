import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import BaseLayout from './base'
import Banner from '../components/Banner'
import Pagination, { Prev, Next } from '../components/Pagination'

const Post = ({ data, pageContext }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { prev, next } = pageContext

  return (
    <BaseLayout>
      <Banner
        background={frontmatter.background}
        overhang={frontmatter.overhang}
        title={frontmatter.title}
      />

      <MDXRenderer>{body}</MDXRenderer>

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
      body
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
