import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Personal portfolio of Phillip Tran: a freshman at Boston
      University with an interest in computer science and biology."
    >
      <h1>
        Hi, I'm Phillip.
      </h1>
      <p>
      I'm a freshman at Boston University with an interest in computer science
      and biology. I'm a founding member of Forvava, a startup aiming to
      help people rent/lease storage and parking space. If I'm not programming,
      you'll probably find me making music or listening to podcasts.
      </p>
      <p>
      Within the world of software enginneering, I am most interest in crafting
      beautiful, functional web applications and developing robust, adaptable
      computer vision systems for robots. Over the years I have created a number
      of web applications, which you can check out <Link to="/projects">here</Link>.
      I have also actively participated in FIRST Robotics Competitions alongside
      my teammates on
      <a href="https://frcpersevere.com/" target="_blank" rel="noopener noreferrer">
        FRC 5962 PerSEVERE
      </a>.
      </p>
    </Layout>
  )
}
