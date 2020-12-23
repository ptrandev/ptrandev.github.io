import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"
import colors from "../styles/colors"

import { Card, CardTitle, CardSubtitle } from "../components/Card/Card"

const ProjectsContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

const Project = styled.div`
width: 100%;
margin-bottom: ${rhythm(1)};

@media (min-width: 768px) {
  width: calc(50% - ${rhythm(0.5)});

  :nth-child(odd) {
    margin-right: ${rhythm(1)};
  }
}
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

a:nth-child(2) {
  border: 1px solid ${colors.primary};
  padding: calc(${rhythm(0.25)} - 1px) calc(${rhythm(0.5)} - 1px);
  transition: all 0.15s ease-out;

  :hover,
  :focus,
  :active {
    border-color: ${colors.secondary};
    color: ${colors.secondary};
  }
}
`

const CardTags = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: ${rhythm(0.25)};

span {
  font-size: 0.8rem;
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

export default function Projects({ data }) {
  return (
    <Layout
      title="Media"
      description="Personal portfolio of Phillip Tran: a freshman at Boston
    University with an interest in computer science and biology."
    >
      <h1>
        Media
      </h1>
      <p>Here are a few highlights of things I've made (without code) over the
        years.</p>
      <ProjectsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Project key={node.id}>
            <Card
              src={`https://res.cloudinary.com/donutdeflector/image/upload/h_480,f_auto,q_auto:/v1577645297/ptran.dev/media/${node.frontmatter.meta.hero}`}
              alt={`${node.frontmatter.title} hero`}
            >
              <CardTags>
                {node.frontmatter.tags.map(tag => (
                  <span>{tag}</span>
                ))}
              </CardTags>
              <CardTitle>
                {node.frontmatter.title}{" "}
              </CardTitle>
              <CardSubtitle>
                {node.frontmatter.meta.date}
              </CardSubtitle>
              <p css={css`
                flex: 1;
                margin: 0;
              `}
              >
              {node.rawMarkdownBody}
              </p>
              <hr></hr>
              <CardButtons>
                {node.frontmatter.meta.listen &&
                  <a target="_blank" rel="noopener noreferrer" href={node.frontmatter.meta.listen}>Listen</a>
                }
                {node.frontmatter.meta.socials &&
                  <a target="_blank" rel="noopener noreferrer" href={node.frontmatter.meta.socials}>Socials</a>
                }
                {node.frontmatter.meta.video &&
                  <a target="_blank" rel="noopener noreferrer" href={node.frontmatter.meta.video}>View Video</a>
                }
              </CardButtons>
            </Card>
          </Project>
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/media/"},
        frontmatter: {featured: {eq: true}}
      },
      sort: { fields: [frontmatter___meta___date], order: [DESC] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            meta {
              date
              site
              code
              video
              hero
              socials
              listen
            }
          }
          rawMarkdownBody
          fields {
            slug
          }
        }
      }
    }
  }
`