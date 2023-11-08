import React from "react";
import styled from "@emotion/styled";

import { rhythm } from "../../utils/typography";

import { LuGithub, LuLinkedin, LuInstagram, LuFileText } from "react-icons/lu";

const FooterItem = styled.a`
  color: #f1f1f1;
  font-weight: 800;
  text-decoration: none;
  margin-right: ${rhythm(0.5)};

  :hover {
    text-decoration: underline;
  }

  :last-child {
    margin-right: 0;
  }

  vertical-align: middle;
`;

const FooterLinks = () => {
  return (
    <>
      <FooterItem href="https://drive.google.com/file/d/17iHpJ0vyYoUBL6EvWBSxSZhjrdKDjjmX/view?usp=sharing">
        <LuFileText size='24'></LuFileText>
      </FooterItem>
      <FooterItem href="https://github.com/ptrandev">
        <LuGithub size='24'></LuGithub>
      </FooterItem>
      <FooterItem href="https://linkedin.com/in/ptrandev">
        <LuLinkedin size='24'></LuLinkedin>
      </FooterItem>
      <FooterItem href="https://instagram.com/ptrandev">
        <LuInstagram size='24'></LuInstagram>
      </FooterItem>
    </>
  );
};

export default FooterLinks;