import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

const CardElement = styled.div`
display: flex;
flex-direction: column;
height: 100%;
box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
background: #fff;
transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);

${props => props.horizontal ? `
  @media (min-width: 768px) {
    flex-direction: row;
  }
` : ``}

:hover {
  box-shadow: ${props => props.hover ? `0 0.5rem 1rem rgba(0, 0, 0, 0.15)`: `0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)`};
}

:last-child {
  margin-bottom: ${rhythm(1)};
}
`

const CardBody = styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding: ${rhythm(1)};

> *:last-child {
  margin-bottom: 0;
}
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

const CardImgContainer = styled.div`
flex-shrink: 0;
overflow: hidden;
max-height: 300px;

${props => props.horizontal ? `
  width: 280px;
  max-height: none;

  @media (max-width: 767px) {
    width: 100%;
    height: 220px;
  }
` : ``}
`

const CardImg = styled.img`
margin: 0;
width: 100%;
height: 100%;
object-fit: cover;
display: block;
`

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Card = (props) => {
  return (
    <ConditionalWrapper
      condition={props.link}
      wrapper = {children => <LinkCard href={props.link}>{children}</LinkCard>}
    >
      <CardElement
        hover={props.hover}
        horizontal={props.horizontal}
      >
        {props.src &&
          <CardImgContainer horizontal={props.horizontal}>
            <CardImg src={props.src} alt={props.alt}></CardImg>
          </CardImgContainer>
        }
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
  CardSubtitle
}