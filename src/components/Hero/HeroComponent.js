import React from "react"
import "./HeroComponent.css"
import Button from "@mui/material/Button"
import { StaticImage } from "gatsby-plugin-image"
import Resume from "../../images/Allanki Sai Likhitha Resume.pdf"

const HeroComponent = () => {
  return (
    <div className="hero_container">
      <div className="left_column">
        <h1>Hi, I'm Sai Likhitha Allanki</h1>
        <p>Masters in Computer Science at George Mason University</p>
        {/* <Button variant="contained" className="resume_button"> */}
        <a href={Resume} target="_blank" className="resume_button">
          Resume
        </a>
        {/* </Button> */}
      </div>
      <div>
        <StaticImage
          className="home_image"
          src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\Home_Image-removebg-preview.png"
        ></StaticImage>
      </div>
    </div>
  )
}

export default HeroComponent
