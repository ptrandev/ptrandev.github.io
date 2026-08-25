import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"
import colors from "../styles/colors"

import { LuPencilLine } from "react-icons/lu"

import { Card, CardTitle, CardSubtitle } from "../components/Card/Card"

const PostsContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

const Post = styled.div`
width: 100%;
margin-bottom: ${rhythm(1)};
`

const CardButtons = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: ${rhythm(-0.25)} !important;

a {
  text-decoration: none;
  margin-bottom: ${rhythm(0.25)};
}

a:first-child {
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  margin-right: ${rhythm(0.5)};
  transition: all 0.15s ease-out;

  :hover,
  :focus,
  :active {
    background-color: ${colors.secondary};
  }
}
`

const CardTags = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: ${rhythm(0.25)};

span {
  font-size: 0.65rem;
  text-transform: uppercase;
  border: 1px solid ${colors.black};
  margin-right: ${rhythm(0.25)};
  margin-bottom: ${rhythm(0.25)};
  padding: ${rhythm(0.125)} ${rhythm(0.25)};
}

span:last-child {
  margin-right: 0;
}
`

const TitleLink = styled(Link)`
color: inherit;
text-decoration: none;

:hover,
:focus,
:active {
  color: ${colors.primary};
}
`

const EmptyState = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border: 1px dashed ${colors.black}40;
padding: ${rhythm(2)} ${rhythm(1)};
margin-bottom: ${rhythm(1)};

svg {
  color: ${colors.primary};
  margin-bottom: ${rhythm(0.5)};
}

h3 {
  margin-bottom: ${rhythm(0.25)};
}

p {
  max-width: 28ch;
  margin-bottom: 0;
  opacity: 0.7;
}
`

export default function Blog({ data }) {
  return (
    <Layout
      title="Blog"
      description="Writing on human-robot interaction, product engineering, and craft by Phillip Tran"
    >
      <h1>
        Blog
      </h1>
      <p>
        Notes on human-robot interaction research, product engineering, and the
        craft of building software.
      </p>
      {data.allMarkdownRemark.edges.length === 0 &&
        <EmptyState>
          <LuPencilLine size="32" />
          <h3>No posts yet</h3>
          <p>The first one is being written. Check back soon.</p>
        </EmptyState>
      }
      <PostsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id}>
            <Card>
              {node.frontmatter.tags &&
                <CardTags>
                  {node.frontmatter.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </CardTags>
              }
              <CardTitle>
                <TitleLink to={node.fields.slug}>
                  {node.frontmatter.title}
                </TitleLink>
              </CardTitle>
              <CardSubtitle>
                {node.frontmatter.date} &middot; {node.timeToRead} min read
              </CardSubtitle>
              <p css={css`
                flex: 1;
                margin: 0;
              `}
              >
                {node.frontmatter.description || node.excerpt}
              </p>
              <hr></hr>
              <CardButtons>
                <Link to={node.fields.slug}>Read Post</Link>
              </CardButtons>
            </Card>
          </Post>
        ))}
      </PostsContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/src/pages/blog/"}
      },
      sort: { fields: [frontmatter___date], order: [DESC] }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 280)
          frontmatter {
            title
            tags
            description
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
