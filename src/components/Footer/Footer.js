import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

import FooterLinks from "./FooterLinks"

const FooterElement = styled.footer`
background-color: #191919;
color: #f1f1f1;
flex-shrink: 0;
padding: ${rhythm(0.75)} 0 ${rhythm(1)} 0;
`

const FooterContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
max-width: 768px;
margin: 0 auto;
padding: 0 ${rhythm(1)};
`

const Copyright = styled.span`
margin-top: ${rhythm(0.25)};
`

const Footer = props => {
  return (
    <FooterElement>
      <FooterContainer>
        <div>
          <FooterLinks></FooterLinks>
        </div>
        <Copyright>© {props.CopyrightYear}</Copyright>
      </FooterContainer>
    </FooterElement>
  )
}

export default Footer