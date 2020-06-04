import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

const CardElement = styled.div`
box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
background: #fff;
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
transition-property: box-shadow;

:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

:last-child {
  margin-bottom: ${rhythm(1)};
}
`

const CardBody = styled.div`
padding: ${rhythm(1)};
`

const LinkCard = styled.a`
color: inherit;
text-decoration: none;
`

const CardTitle = styled.h3`
margin-bottom: ${rhythm(0.5)};
`

const CardSubtitle = styled.h5`
margin-bottom: ${rhythm(0.5)};
`

const CardExcerpt = styled.p`
margin-bottom: 0;
`
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Card = (props) => {
  return (
    <ConditionalWrapper
      condition={props.link}
      wrapper = {children => <LinkCard href={props.link}>{children}</LinkCard>}
    >
      <CardElement>
        <CardBody>
          {props.children}
        </CardBody>
      </CardElement>
    </ConditionalWrapper>
  )
}

export {
  Card,
  CardTitle,
  CardSubtitle,
  CardExcerpt
}