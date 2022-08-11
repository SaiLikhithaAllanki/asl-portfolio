import { Paper } from "@material-ui/core"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Projects.css"
import { Grid } from "@mui/material"
import P1 from "../../images/P1_image.png"
import P2 from "../../images/P2_image.png"
import P3 from "../../images/P3_image.png"
import P4 from "../../images/P4_image.png"

const projects = [
  {
    id: 1,
    title: "Now News for Web",
    description:
      "This Project was purely built on using Divi Theme, custom HTML and CSS on Wordpress",
    image: P1,
  },
  {
    id: 2,
    title: "Corporate Website",
    description:
      "This Project was purely built on using Divi Theme, custom HTML and CSS on Wordpress",
    image: P2,
  },
  {
    id: 3,
    title: "Real estate Website",
    description:
      "This Project was purely built on using Divi Theme, custom HTML and CSS on Wordpress",
    image: P3,
  },
  {
    id: 4,
    title: "Ecommerce Website",
    description:
      "This Project was purely built on using Divi Theme, custom HTML and CSS on Wordpress",
    image: P4,
  },
]

const ProjectsComp = () => {
  return (
    <div className="p_container">
      <h1 className="p_title">Projects</h1>
      <div className="p_all_cards">
        <Grid container spacing={4}>
          {projects.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }} className="p_card">
                {/* <StaticImage
                  className="project_image"
                  src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\P1_image.png"
                ></StaticImage> */}
                <img src={item.image} alt=""></img>
                <CardContent className="p_card_content">
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
export default ProjectsComp
