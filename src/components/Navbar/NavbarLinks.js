import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

const NavItem = styled(Link)`
font-weight: 800;
text-decoration: none;
margin-right: ${rhythm(1)};

:hover {
  text-decoration: underline;
}

:last-child {
  margin-right: 0;
}
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
    </>
  )
}

export default NavbarLinks