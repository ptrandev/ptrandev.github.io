import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

import { Card, CardTitle, CardExcerpt, CardSubtitle } from "../components/Card/Card"

export default function Blog({ data }) {
  return (
    <Layout>
      <h1>
        Blog
      </h1>

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Card link={node.fields.slug}>
              <CardTitle>
                {node.frontmatter.title}{" "}
              </CardTitle>
              <CardSubtitle>
                {node.frontmatter.date}
              </CardSubtitle>
              <CardExcerpt>
                {node.excerpt}
              </CardExcerpt>
          </Card>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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