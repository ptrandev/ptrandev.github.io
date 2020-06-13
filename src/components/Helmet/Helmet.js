import React from "react"
import { Helmet } from "react-helmet"

const GlobalHelmet = props => {
  return (
    <Helmet>
      <meta charset="utf-8"></meta>
      <html lang="en"/>
    </Helmet>
  )
}

export default GlobalHelmet