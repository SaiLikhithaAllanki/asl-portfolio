/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"
import NewHeader from "./NewHeader/NewHeader"
//import { Seo } from "./Seo"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <NewHeader></NewHeader>
      <div>
        <main>{children}</main>
        <footer className="footer_styles">
          © {new Date().getFullYear()} &middot; By Sai Likhitha Allanki
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
// style={{
//   margin: `0 auto`,
//   maxWidth: `var(--size-content)`,
//   padding: `var(--size-gutter)`,
// }}

/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */
