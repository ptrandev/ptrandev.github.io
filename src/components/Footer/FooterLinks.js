import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

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

@media(min-width: 450px) {
  margin-right: ${rhythm(1)};
}
`

const FooterLinks = () => {
  return (
    <>
        <FooterItem href="https://github.com/ptrandev">Github</FooterItem>
        <FooterItem href="https://linkedin.com/in/ptrandev">LinkedIn</FooterItem>
        <FooterItem href="https://instagram.com/ptrandev">Instagram</FooterItem>
    </>
  )
}

export default FooterLinks