import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import PageTransition from 'gatsby-plugin-page-transitions'
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
width: 100%;
max-width: 768px;
padding: ${rhythm(1)};
padding-top: ${rhythm(1.5)};
flex: 1;
`

export default function Layout( props ) {
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
      <Helmet>
        <html lang="en"/>
        <title>{props.title} // Phillip Tran</title>
        <meta name="description" content={props.description} />
      </Helmet>
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
          <PageTransition
            defaultStyle={{
              transition: 'opacity 0.15s cubic-bezier(0.35, 0.055, 0.675, 0.19), transform 0.15s cubic-bezier(0.19, 1, 0.22, 1)',
              transform: `translateY(5rem)`,
              opacity: 0
            }}
            transitionStyles={{
              entering: {
                opacity: 0,
                transform: `translateY(5rem)`
              },
              entered: {
                opacity: 1,
                transform: `translateY(0)`
              },
              exiting: {
                opacity: 0,
                transform: `translateY(-5rem)`
              }
            }}
            transitionTime={150}
          >
          { props.children }
          </PageTransition>
        </Content>
        <Footer
          CopyrightYear="MMXXI"
        />
      </Container>
    </div>
  )
}
