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
      I'm an incoming freshman at Boston University with an interest in computer
      science and biology. I'm a founding member of Forvava, a startup aiming to
      help people rent/lease storage and parking space. If I'm not programming,
      you'll probably find me making music or listening to podcasts.
      </p>
    </Layout>
  )
}