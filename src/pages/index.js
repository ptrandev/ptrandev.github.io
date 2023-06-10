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
      description="Phillip Tran: Full Stack Developer at Atllas, Inc. // Honors Student at Boston University"
    >
      <Greeting>
        Hi, I'm Phillip.
      </Greeting>
      <Introduction>
        <Avatar src="https://res.cloudinary.com/donutdeflector/image/upload/h_300,f_auto,q_auto:/v1664390255/ptran.dev/headshot.jpg"></Avatar>
        <p>
          I am a graduate student at Boston University studying computer science.
          I'm currently working at <a target="_blank" rel="noopener noreferrer" href="https://atllas.com/">Atllas, Inc.</a> as a full stack developer, where I develop tools that enable billions of dollars worth of real estate transactions.
        </p>
      </Introduction>
      <p>
        Within the world of software engineering, I am most interest in crafting
        beautiful, functional web applications and developing robust, adaptable
        computer vision systems for robots. Check out my personal projects <Link to="/projects">here</Link>.
      </p>
      <p>
        I am heavily involved in student organizations.
        I am the Vice President of <a target="_blank" rel="noopener noreferrer" href="https://builds.cc/">BUILDS</a>, a student run hackerspace.
        I have served as the Director of Marketing in <a target="_blank" rel="noopener noreferrer" href="https://upe.bu.edu/">Upsilon Pi Epsilon</a>, a
        computer science honor society.
      </p>
      <p>
        If I'm not programming, you'll find me working on my music or co-hosting podcasts. Go ahead and check out my media involvement <Link to="/media">here</Link>.
      </p>
    </Layout>
  )
}
