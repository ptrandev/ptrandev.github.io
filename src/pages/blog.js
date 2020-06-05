import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { Card, CardTitle, CardSubtitle } from "../components/Card/Card"

export default function Blog({ data }) {
  return (
    <Layout>
      <h1>
        Blog
      </h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Card link={node.fields.slug}>
              <CardTitle>
                {node.frontmatter.title}{" "}
              </CardTitle>
              <CardSubtitle>
                {node.frontmatter.date}
              </CardSubtitle>
              <p>
                {node.excerpt}
              </p>
          </Card>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
      sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`