import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import { rhythm } from "../../utils/typography";

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

  @media (max-width: 425px) {
    margin-right: ${rhythm(.5)};
  }
`;

const NavItemAnchor = styled.a`
  font-weight: 800;
  text-decoration: none;
  margin-right: ${rhythm(1)};

  :hover {
    text-decoration: underline;
  }

  :last-child {
    margin-right: 0;
  }

  @media (max-width: 425px) {
    margin-right: ${rhythm(.5)};
  }
`;

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/research">Research</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItemAnchor href="https://drive.google.com/file/d/17iHpJ0vyYoUBL6EvWBSxSZhjrdKDjjmX/view?usp=sharing">
        Resume
      </NavItemAnchor>
    </>
  );
};

export default NavbarLinks;
