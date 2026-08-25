import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Seo from "../components/Seo"

import { rhythm } from "../utils/typography"
import colors from "../styles/colors"

const PostHeader = styled.header`
margin-bottom: ${rhythm(1)};

h1 {
  margin-bottom: ${rhythm(0.5)};
}
`

const PostMeta = styled.div`
font-size: 0.85rem;
margin-bottom: ${rhythm(0.5)};
`

const PostTags = styled.div`
display: flex;
flex-wrap: wrap;

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

const BackLink = styled(Link)`
display: inline-block;
margin-top: ${rhythm(1)};
text-decoration: none;

:hover,
:focus,
:active {
  text-decoration: underline;
}
`

export const Head = ({ data }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    description={data.markdownRemark.frontmatter.description || data.markdownRemark.excerpt}
  />
)

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <article>
        <PostHeader>
          <h1>{post.frontmatter.title}</h1>
          <PostMeta>
            {post.frontmatter.date} &middot; {post.timeToRead} min read
          </PostMeta>
          {post.frontmatter.tags &&
            <PostTags>
              {post.frontmatter.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </PostTags>
          }
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <BackLink to="/blog">&larr; All posts</BackLink>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 280)
      frontmatter {
        title
        tags
        description
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
