import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import colors from "../styles/colors"

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
    <div>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          
          html {
            background-color: ${colors.white};
            color: ${colors.black};
          }
        `}
      />
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
    </div>
  )
}