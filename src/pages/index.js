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
        help people rent/lease storage and parking space.
      </p>
      <p>
        Within the world of software enginneering, I am most interest in crafting
        beautiful, functional web applications and developing robust, adaptable
        computer vision systems for robots. Feel free to check out my projects <Link to="/projects">here</Link>.
      </p>
      <p>
        If I'm not programming, you'll find me co-hosting podcasts or making
        music with my band, <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chaoticsanitymusic/">Chaotic Sanity</a>. Go ahead and
        check out my media invovlement <Link to="/media">here</Link>.
      </p>
    </Layout>
  )
}
