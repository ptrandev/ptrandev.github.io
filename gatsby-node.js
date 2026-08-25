const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const isBlogPost = node => node.fileAbsolutePath.includes(`/src/pages/blog/`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Blog posts are the only content that uses `date` and `description`. Declare
  // them so the blog queries still compile when no post is present. Everything
  // else on frontmatter stays inferred.
  createTypes(`
    type MarkdownRemarkFrontmatter {
      title: String
      tags: [String]
      featured: Boolean
      description: String
      date: Date @dateformat
    }
  `)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `pages` })

    // Blog post files are named YYYY-MM-DD-title.md so they sort by date on
    // disk. The date belongs in the frontmatter, not the URL, so strip it.
    if (isBlogPost(node)) {
      slug = slug.replace(/\/\d{4}-\d{2}-\d{2}-/, `/`)
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // Blog posts get their own template. Everything else (projects, media,
    // research) keeps rendering through blog-post.js.
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        isBlogPost(node) ? `./src/templates/blog.js` : `./src/templates/blog-post.js`
      ),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}