const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const isBlogPost = node => node.fileAbsolutePath.includes(`/src/pages/blog/`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Blog posts are the only content that uses `date` and `description`. Declare
  // them so the blog queries still compile when no post is present. Everything
  // else on frontmatter stays inferred.
  createTypes(`
    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields
    }

    type MarkdownRemarkFields {
      slug: String
    }

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
  if (node.internal.type === `MarkdownRemark` && isBlogPost(node)) {
    // Blog post files are named YYYY-MM-DD-title.md so they sort by date on
    // disk. The date belongs in the frontmatter, not the URL, so strip it.
    const slug = createFilePath({ node, getNode, basePath: `pages` }).replace(
      /\/\d{4}-\d{2}-\d{2}-/,
      `/`
    )

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Only blog posts get their own page. Project, research, and media markdown
  // is a one-paragraph blurb that the index card already shows in full, so a
  // detail page for it would duplicate the card and nothing links to it.
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
