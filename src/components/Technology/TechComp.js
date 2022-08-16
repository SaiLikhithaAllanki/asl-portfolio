import { Chip, Grid } from "@mui/material"
import React from "react"
//import "./Technology.css"
//import { StaticImage } from "gatsby-plugin-image"
//import { Icon } from "@iconify/react"
import HTML5 from "../../images/html-5.png"
import CSS from "../../images/css-3.png"
import JS from "../../images/js.png"
import Java from "../../images/java.png"
import PHP from "../../images/php.png"
import ReactJS from "../../images/atom.png"
import WP from "../../images/wordpress.png"
import VS from "../../images/visual-studio.png"
import Git from "../../images/github.png"
import SQL from "../../images/mysql.png"
import Python from "../../images/python.png"
import Dv from "../../images/divi.png"
import Ele from "../../images/elementor.png"
import styled from "styled-components"

const TechCompStyle = styled.div`
  text-align: center;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #edf2f4;
  .t_chip {
    background-color: #edf2f4;
    color: #2b2d42;
    font-size: 16px;
    border-color: #edf2f4;
  }
  .t_images {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  .t_grid_items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const skills = [
  {
    id: 1,
    image: HTML5,
    skill: "HTML",
  },
  {
    id: 2,
    image: CSS,
    skill: "CSS",
  },
  {
    id: 3,
    image: JS,
    skill: "JavaScript",
  },
  {
    id: 4,
    image: ReactJS,
    skill: "React JS",
  },
  {
    id: 5,
    image: PHP,
    skill: "PHP",
  },
  {
    id: 6,
    image: Java,
    skill: "Java J2EE",
  },
  {
    id: 7,
    image: Python,
    skill: "Python",
  },
  {
    id: 8,
    image: WP,
    skill: "Wordpress",
  },
  {
    id: 9,
    image: Ele,
    skill: "Elementor ",
  },
  {
    id: 10,
    image: Dv,
    skill: "Divi",
  },
  {
    id: 11,
    image: VS,
    skill: "Visual Studio",
  },
  {
    id: 12,
    image: Git,
    skill: "Git Hub",
  },

  {
    id: 13,
    image: SQL,
    skill: "My SQL",
  },
]

const TechComp = () => {
  return (
    <TechCompStyle id="skills">
      <div>
        <h1 className="t_title">My Skills</h1>

        <Grid container className="t_grid" spacing={4}>
          {skills.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              {/* <Button variant="contained" className="t_button">
                <img className="t_images" src={item.image} alt=""></img>
                <span>{item.skill}</span>
              </Button> */}
              <div className="t_grid_items">
                <img className="t_images" src={item.image} alt=""></img>
                <Chip
                  label={item.skill}
                  variant="outlined"
                  className="t_chip"
                ></Chip>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <div>
        <StaticImage
          className="t_skill_image"
          src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\Problem_solving-cuate__1_-removebg-preview.png"
        ></StaticImage>
      </div> */}
    </TechCompStyle>
  )
}
export default TechComp
