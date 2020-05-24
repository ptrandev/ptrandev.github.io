import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import "../styles/global.scss"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 768px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(1)};
      `}
    >
    <nav
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #191919;
        padding-bottom: ${rhythm(1)};
        margin-bottom: ${rhythm(1)};

        @media (max-width: 568px) {
          flex-direction: column;
        }
      `}
    >
      <h1
        css={css`
        margin-bottom: 0;

        @media (max-width: 568px) {
          margin-bottom: ${rhythm(0.5)};
        }
        `}
      >
        {data.site.siteMetadata.title}
      </h1>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Link
          to={`/`}
          css={css`
            margin-right: ${rhythm(1)};
          `}
        >
          Home
        </Link>
        <Link
          to={`/projects/`}
          css={css`
          margin-right: ${rhythm(1)};
          `}
        >
          Projects
        </Link>
        <Link
          to={`/blog/`}
        >
          Blog
        </Link>
      </div>
    </nav>
      {children}
    </div>
  )
}