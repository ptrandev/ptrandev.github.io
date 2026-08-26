import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import { rhythm } from "../../utils/typography";

const NavItem = styled(Link)`
  font-weight: 800;
  text-decoration: none;

  /* Four links at full size need 330px, but a 320px screen leaves 266px inside
     the container padding. Step the type and the gaps down so the row still
     fits. Below 400px the container distributes the gaps instead of margins. */
  font-size: 0.75rem;
  margin-right: 0;

  :hover {
    text-decoration: underline;
  }

  @media (min-width: 400px) {
    font-size: 0.875rem;
    margin-right: ${rhythm(0.5)};
  }

  @media (min-width: 480px) {
    font-size: 1rem;
    margin-right: ${rhythm(1)};
  }

  :last-child {
    margin-right: 0;
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
