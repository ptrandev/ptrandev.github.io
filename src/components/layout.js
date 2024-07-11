import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

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
  // get current year in roman numerals
  const year = new Date().getFullYear();

  const romanize = (num) => {
    if (isNaN(num))
      return NaN;
    var digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D",
        "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L",
        "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V",
        "VI", "VII", "VIII", "IX"],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  const romanYear = romanize(year);

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
          { props.children }
        </Content>
        <Footer
          CopyrightYear={romanYear}
        />
      </Container>
    </div>
  )
}
