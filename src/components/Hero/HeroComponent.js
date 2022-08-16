import React from "react"
//import "./HeroComponent.css"
import Button from "@mui/material/Button"
//import { StaticImage } from "gatsby-plugin-image"
import Resume from "../../images/Allanki Sai Likhitha Resume.pdf"
import styled from "styled-components"
import { Icon } from "@iconify/react"

const HeroContainer = styled.div`
  color: #2b2d42;
  width: auto;
  height: auto;
  background-color: #edf2f4;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  text-align: center;
  height: 500px;
  padding-top: 100px;
  .left_column {
    margin-right: 100px;
  }
  a {
    text-decoration: none;
    color: #edf2f4;
  }
  a:hover {
    color: #2b2d42;
  }
  .resume_button {
    background-color: #2b2d42;
    border-radius: 50% 20% / 10% 40%;
  }
  .resume_button:hover {
    background-color: #edf2f4;
    border-radius: 50% 20% / 10% 40%;
  }
  h1 {
    margin-bottom: 0px;
    font-size: 50px;
    font-family: "Lobster", cursive;
  }
  h5 {
    font-size: 20px;
    font-family: "Satisfy", cursive;
  }
`

const HeroComponent = () => {
  return (
    <HeroContainer>
      <div className="left_column">
        <h1>
          <Icon icon="emojione:hand-with-fingers-splayed" /> Hey,
        </h1>

        <h1>I'm Sai Likhitha Allanki</h1>

        <h5>Masters in Computer Science at George Mason University</h5>
        <Button variant="contained" className="resume_button">
          <a href={Resume} target="_blank" rel="noreferrer" className="a_link">
            Resume
          </a>
        </Button>
      </div>
      {/* <div>
        <StaticImage
          className="home_image"
          src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\Home_Image-removebg-preview.png"
        ></StaticImage>
      </div> */}
    </HeroContainer>
  )
}

export default HeroComponent
