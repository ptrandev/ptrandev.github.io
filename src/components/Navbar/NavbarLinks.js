import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import { rhythm } from "../../utils/typography";

const NavItem = styled(Link)`
  font-weight: 800;
  text-decoration: none;

  /* Four links plus full-size gaps need 331px of the 266px a 320px screen
     leaves inside the container padding, so they wrap into a ragged block.
     Tighten the type and the gaps until there is room for one row. */
  font-size: 0.875rem;
  margin-right: ${rhythm(0.5)};

  :hover {
    text-decoration: underline;
  }

  :last-child {
    margin-right: 0;
  }

  @media (min-width: 420px) {
    font-size: 1rem;
    margin-right: ${rhythm(1)};
  }
`;

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/research">Research</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
    </>
  );
};

export default NavbarLinks;
