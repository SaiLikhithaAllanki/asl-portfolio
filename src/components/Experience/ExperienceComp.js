import { Card } from "@material-ui/core"
import React from "react"
import "./Experience.css"
import { StaticImage } from "gatsby-plugin-image"

const ExperienceComp = () => {
  return (
    <div className="e_main_container" id="experience">
      <div className="e_title">
        <StaticImage
          className="e_icon"
          src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\Experience_Image-removebg-preview.png"
        ></StaticImage>
        <div>
          <h1>Experience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            maximus rutrum nisl quis efficitur. Donec eget tellus ut nulla
            tempor tristique. Nullam a lectus felis. In non commodo dolor, sed
            sagittis sapien. Sed commodo tortor sem, id pellentesque nibh
            feugiat sit amet. Sed vitae euismod sem. Duis rutrum dolor risus,
            eget cursus massa pharetra non. Quisque ut fringilla est.
            Pellentesque facilisis sodales diam at dignissim. Curabitur vel
            velit arcu.
          </p>
        </div>
      </div>
      <div className="e_card_container">
        <Card className="e_card">
          <div>
            <StaticImage
              className="e_company_image"
              src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\user-experience.png"
            ></StaticImage>
            <h4>Software Engineer @Wipro Limited</h4>
          </div>
          <p>Work done:.....</p>
        </Card>
        <Card className="e_card">
          <div>
            <StaticImage
              className="e_company_image"
              src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\user-experience.png"
            ></StaticImage>
            <h4>Intern Web Developer @Spruce Technologies</h4>
          </div>
          <p>Work done:.....</p>
        </Card>
      </div>
    </div>
  )
}
export default ExperienceComp
