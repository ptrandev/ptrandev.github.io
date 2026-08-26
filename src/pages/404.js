import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Seo from "../components/Seo"

import { rhythm } from "../utils/typography"
import colors from "../styles/colors"

import { LuCompass } from "react-icons/lu"

const NotFound = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: ${rhythm(2)} 0;

svg {
  color: ${colors.primary};
  margin-bottom: ${rhythm(0.5)};
}

p {
  max-width: 40ch;
}
`

const Suggestions = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

a {
  text-decoration: none;
  color: ${colors.primary};
  margin: 0 ${rhythm(0.5)} ${rhythm(0.25)};

  :hover,
  :focus,
  :active {
    color: ${colors.secondary};
    text-decoration: underline;
  }
}
`

export const Head = () => (
  <Seo
    title="Page Not Found"
    description="That page does not exist on ptran.dev"
  />
)

export default function NotFoundPage() {
  return (
    <Layout>
      <NotFound>
        <LuCompass size="32" />
        <h1>Page not found</h1>
        <p>
          That address does not point at anything. The link may be old, or the
          page may have moved.
        </p>
        <Suggestions>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </Suggestions>
      </NotFound>
    </Layout>
  )
}
