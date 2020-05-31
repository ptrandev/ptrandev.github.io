import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import "../styles/global.scss"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Container = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
`

const Content = styled.div`
margin: 0 auto;
max-width: 768px;
padding: ${rhythm(1)};
padding-top: ${rhythm(1.5)};
flex: 1;
`

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Container>
      <Navbar
        navbarTitle={data.site.siteMetadata.title}
      />
      <Content>
        {children}
      </Content>
      <Footer
        CopyrightYear="MMXX"
      />
    </Container>
  )
}