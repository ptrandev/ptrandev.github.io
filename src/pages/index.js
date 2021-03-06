import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styled from "@emotion/styled"


const Avatar = styled.img`
max-height: 200px;
border-radius: 50%;
margin-right: 0;
margin-bottom: ${rhythm(1)};

@media (min-width: 576px) {
  margin-bottom: 0;
  margin-right: ${rhythm(1)};
}
`

const Introduction = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: ${rhythm(1)};

p {
  margin: 0;
}

@media (min-width: 576px) {
  flex-direction: row;
}
`

const Greeting = styled.h1`
text-align: center;

@media (min-width: 576px) {
  text-align: left;
}
`

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Personal portfolio of Phillip Tran: a freshman at Boston
      University with an interest in computer science and biology."
    >
      <Greeting>
        Hi, I'm Phillip.
      </Greeting>
      <Introduction>
      <Avatar src="https://res.cloudinary.com/donutdeflector/image/upload/h_300,f_auto,q_auto:/v1608789330/ptran.dev/avatar.jpg"></Avatar>
      <p>
        I'm a freshman at Boston University with an interest in computer science
        and biology. I'm a founding member of Forvava, a startup aiming to
        help people rent/lease storage and parking space.
      </p>
      </Introduction>
      <p>
        Within the world of software enginneering, I am most interest in crafting
        beautiful, functional web applications and developing robust, adaptable
        computer vision systems for robots. Feel free to check out my projects <Link to="/projects">here</Link>.
      </p>
      <p>
        If I'm not programming, you'll find me co-hosting podcasts or making
        music with my band, <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chaoticsanitymusic/">Chaotic Sanity</a>. Go ahead and
        check out my media involvement <Link to="/media">here</Link>.
      </p>
    </Layout>
  )
}
