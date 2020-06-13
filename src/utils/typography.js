import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

import colors from "../styles/colors"

kirkhamTheme.headerFontFamily = ["Inter", "Helvetica", "sans-serif"]
kirkhamTheme.bodyFontFamily = ["Inter", "Helvetica", "sans-serif"]
kirkhamTheme.googleFonts = [
  {
    name: "Inter",
    styles: ["800", "800i", "400", "400i"]
  }
]
kirkhamTheme.headerWeight = 800
kirkhamTheme.blockMarginBottom = 1
kirkhamTheme.baseLineHeight = 1.5
kirkhamTheme.overrideThemeStyles = () => ({
  a: {
    color: `${colors.primary}`
  }
})
kirkhamTheme.headerColor = `${colors.black}`
kirkhamTheme.bodyColor = `${colors.black}`

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm