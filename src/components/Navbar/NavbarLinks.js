import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavItem = styled(Link)`
  font-weight: 800;
  text-decoration: none;

  /* A 320px screen leaves 272px inside the container padding, which the four
     links do not fit at full size. Scale the type with the viewport between
     320px and 480px. At 320px the row measures 245px, and larger phones stay
     close to full size. The container owns the spacing between the links. */
  font-size: clamp(0.875rem, 0.625rem + 1.40625vw, 1rem);

  :hover {
    text-decoration: underline;
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
