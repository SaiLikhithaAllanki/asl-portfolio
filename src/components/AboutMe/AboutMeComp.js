//import { Card } from "@material-ui/core"
import React from "react"
import "./AboutMe.css"
import { StaticImage } from "gatsby-plugin-image"

const AboutMeComp = () => {
  return (
    <div className="a_main_container" id="about_me">
      {/* <Card className="card_container"> */}
      <div className="a_left_column">
        <StaticImage
          className="about_me_icon"
          src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\Authentication-bro-removebg-preview.png"
        ></StaticImage>
      </div>
      <div>
        <h1>About Me </h1>
        <p className="a_description">
          My name is Likhitha, and I am currently pursuing a Master of Science
          in Computer Science at George Mason University. I'm working hard to
          reach my goal of becoming a Full Stack Front End Developer. Actively
          seeking excellent opportunities. I am a dedicated and hard worker.
        </p>
      </div>
      {/* </Card> */}
    </div>
  )
}
export default AboutMeComp
