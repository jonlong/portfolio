const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    /*
     * Create paths for posts based on directory structure in `/content`
     */

    const slug = createFilePath({
      node,
      getNode,
      basePath: 'content/',
    })

    // assign this path to the `slug` field for each post
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/layouts/post.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx(
            sort: { order: DESC, fields: [frontmatter___order] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  draft
                  title
                  overhang
                  background
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // return posts
        const posts = _.filter(result.data.allMdx.edges, edge => {
          const slug = _.get(edge, `node.fields.slug`)
          const draft = _.get(edge, `node.frontmatter.draft`)
          if (!slug) return undefined

          if (slug && !draft) {
            return edge
          }

          return undefined
        })

        // create post pages
        posts.forEach(({ node }, index) => {
          const next = index === 0 ? null : posts[index - 1].node
          const prev = index === posts.length - 1 ? null : posts[index + 1].node

          createPage({
            path: node.fields.slug,
            component: postTemplate,
            context: {
              slug: node.fields.slug,
              prev,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
