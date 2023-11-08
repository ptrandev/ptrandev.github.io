import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import colors from "../../styles/colors"

import NavbarLinks from "./NavbarLinks"

const NavbarElement = styled.nav`
border-top: ${rhythm(0.25)} solid ${colors.primary};
padding: ${rhythm(0.5)} 0 ${rhythm(0.75)} 0;
box-shadow: 0 0 1rem rgba(0,0,0,0.15);
`

const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
max-width: 768px;
margin: 0 auto;
padding: 0 ${rhythm(1)};
`

const NavbarTitle = styled.h3`
font-style: normal;
display: inline-block;
margin-bottom: 0;
margin-right: ${rhythm(1)};
margin-top: ${rhythm(0.25)};
`

const NavbarLinksContainer = styled.div`
display: flex;
align-items: center;
margin-top: ${rhythm(0.25)};
flex-wrap: wrap;
`

const Navbar = props => {
  return (
    <NavbarElement>
      <NavbarContainer>
        <NavbarTitle>{props.navbarTitle}</NavbarTitle>
        <NavbarLinksContainer>
          <NavbarLinks></NavbarLinks>
        </NavbarLinksContainer>
      </NavbarContainer>
    </NavbarElement>
  )
}

export default Navbar