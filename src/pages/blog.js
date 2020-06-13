import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import { Card, CardTitle, CardSubtitle } from "../components/Card/Card"

export default function Blog({ data }) {
  return (
    <Layout
      title="Blog"
      description="Personal portfolio of Phillip Tran: a freshman at Boston
    University with an interest in computer science and biology."
    >
      <h1>
        Blog
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            css={{
              color: 'inherit',
              textDecoration: 'inherit'
            }}
            to={node.fields.slug}
          >
          <Card hover>
              <CardTitle>
                {node.frontmatter.title}
              </CardTitle>
              <CardSubtitle>
                {node.frontmatter.date}
              </CardSubtitle>
              <p>
                {node.excerpt}
              </p>
          </Card>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/"}},
      sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
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