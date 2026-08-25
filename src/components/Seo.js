import React from "react"

import colors from "../styles/colors"

/**
 * Rendered through Gatsby's Head API, which replaced react-helmet in Gatsby 5.
 * Each page exports a `Head` that returns this component. Head runs outside the
 * React tree, so it cannot use hooks or context.
 */
const Seo = ({ title, description }) => (
  <>
    <title>{`${title} // Phillip Tran`}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content={colors.primary} />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,800;1,400;1,800&display=swap"
      rel="stylesheet"
    />
  </>
)

export default Seo
