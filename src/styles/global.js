import React from "react"
import { Global, css } from '@emotion/core'

import colors from './colors'

const GlobalStyles = props => (
  <Global
    {...props}
    styles={css`
      * {
        box-sizing: border-box;
      }
      
      html {
        background-color: ${colors.white};
        color: ${colors.black};
      }
    `}
  />
)

export default GlobalStyles