import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroComponent from "../components/Hero/HeroComponent"
import AboutMeComp from "../components/AboutMe/AboutMeComp"
import TechComp from "../components/Technology/TechComp"
import ProjectsComp from "../components/Projects/ProjectsComp"
import ContactMeComp from "../components/ContactMe/ContactMeComp"

const IndexPage = () => (
  <Layout>
    <HeroComponent></HeroComponent>
    <AboutMeComp></AboutMeComp>
    <TechComp></TechComp>
    <ProjectsComp></ProjectsComp>
    <ContactMeComp></ContactMeComp>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
