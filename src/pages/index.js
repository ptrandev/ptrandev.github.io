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
      description="Phillip Tran: Head of Product at Atllas, Inc. // PhD Student at McMaster University"
    >
      <Greeting>
        Hi, I'm Phillip.
      </Greeting>
      <Introduction>
        <Avatar src="https://res.cloudinary.com/donutdeflector/image/upload/h_400,f_auto,q_auto:/v1664390255/ptran.dev/headshot.jpg"></Avatar>
        <p>
          I'm currently working for <a target="_blank" rel="noopener noreferrer" href="https://atllas.com/">Atllas, Inc.</a> as
          Head of Product, where I develop tools that enable billions of dollars worth of real estate transactions. 
          I am also a PhD student advised by <a target="_blank" rel="noopener noreferrer" href="https://denisegeiskkovitch.com/">Dr. Denise Geiskkovitch</a> at
          McMaster University, where we study human-robot interaction.
        </p>
      </Introduction>
      <p>
          I own Phillip Tran Software Development Services, offering software
          development solutions to businesses. While I'm not actively seeking
          new contract opportunities, I'm open to discussing potential projects.
          Please feel free to connect with me on LinkedIn if you'd like to
          explore possibilities.
      </p>
      <p>
        I have a passion for conducting interdisciplinary research. I have
        worked on a project with Dr. Phillip Lobel and his marine biology
        lab at BU to develop an application that categorizes and analyzes millions
        of videos and photos on-device.
      </p>
      <p>
        I am interested in conducting Human-Computer Interaction (HCI) research.
        I like using a broad range of skills to create tools,
        products, and systems that enable and empower people to do what they
        love and care about. Check out my research involvement <Link to="/research">here</Link>.
      </p>
      <p>
        Within the world of software engineering, I am most interested in crafting
        beautiful, functional web applications. I have also developed robust, adaptable
        computer vision systems for robots. Check out my personal projects <Link to="/projects">here</Link>.
      </p>
      <p>
        I have served as the Vice President of <a target="_blank" rel="noopener noreferrer" href="https://builds.cc/">BUILDS</a>, a student run makerspace which also serves at BU's official Association for Computing Machinery (ACM) chapter.
        I have also served as the Director of Marketing in <a target="_blank" rel="noopener noreferrer" href="https://upe.bu.edu/">Upsilon Pi Epsilon</a>, a
        computer science honor society.
      </p>
      <p>
        If you're interested in learning more about my professional and academic experience, view my resume <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/17iHpJ0vyYoUBL6EvWBSxSZhjrdKDjjmX/view?usp=sharing">here</a>.
      </p>
      <p>
        Outside of those things, I enjoy personal finance, fitness, cooking, music, podcasts, and watches. I love staying curious!
      </p>
    </Layout>
  )
}
