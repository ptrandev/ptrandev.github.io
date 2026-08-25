/**
 * The Head API cannot set attributes on <html>, so the page language is set
 * here instead. This replaces what react-helmet used to do in the layout.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
