import { Card } from "@material-ui/core"
import React from "react"
import "./Experience.css"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
// import SpruceI from "../../images/spruce_image.png"
// import WiproLogo from "../../images/wipro_image.png"

const ECards = styled.div`
  margin: 50px;
  padding: 50px;
  /* background-color: #edf2f4; */
  width: auto;
  height: auto;
  color: #2b2d42;

  .e_card {
    background-color: #2b2d42;
    color: #edf2f4;
    padding: 20px;

    margin-bottom: 20px;
  }
  .e_card_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .e_paragraph {
    max-width: 1140px;
    text-align: justify;
  }
`

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
          {/* <p>
            I have extensive experience in front end development, and I am
            particularly skilled at creating websites with React JS, JS, HTML,
            CSS, Material UI, and PHP frameworks. Wipro Limited also certified
            me as a React JS developer. I am very interested in honing my skills
            as a full stack front end developer. I primarily assist the
            development manager in working on software design and coding, attend
            and contribute to company development meetings, update and learn new
            coding skills, write and maintain code, work on minor bug fixes, and
            monitor the technical performance of internal systems. Responding to
            development team requests, gathering consumer feedback on program
            functionality Writing reports and carrying out development tests
          </p> */}
        </div>
      </div>
      <ECards>
        <Card className="e_card">
          <div className="e_card_header">
            <h4>Software Engineer @Wipro Limited</h4>
            {/* <StaticImage
              className="e_company_image"
              src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\wipro_image.png"
            ></StaticImage> */}
          </div>
          <p className="e_paragraph">
            Implemented the backend using Java for an insurance project Worked
            on establishing the connection between the user interface and
            database using Nexus Rest APIs for the project Worked on front-end
            components using React JS for a client project Collaborated in
            team-based, Agile environment to accomplish objectives by deadlines
            Worked effectively with cross-functional design teams to create
            software solutions that elevated client-side experience and
            significantly improved overall functionality.
          </p>
        </Card>
        <Card className="e_card">
          <div className="e_card_header">
            <h4>Web Developer Intern @Spruce Technologies</h4>
            {/* <StaticImage
              className="e_company_image"
              src="C:\Users\Allanki Sai Likhitha\gatsby-starter-default\src\images\spruce_image.png"
            ></StaticImage> */}
          </div>
          <p className="e_paragraph">
            Troubleshoot web applications, diagnose, and fix bugs Converted
            Invision Prototypes into reusable Wordpress Page Templates Developed
            reusable module components using Frameworks like React JS, Divi, PHP
            and JavaScript where the admin or end-user can reuse the same
            modules for similar features in multiple pages of their website and
            also enhance their user experience. Used Material UI and Bootstrap
            Frameworks to import and use different components to create a
            Responsive User Interface for React Components. Developed Web
            components in Agile environment. Participating in daily stand-ups,
            bi-weekly sprint retrospectives, and planning meetings to discuss
            work progress and roadblocks. As part of training, I built Real
            Estate, Corporate, Ecommerce, and Now News for Web Websites. In
            addition, as part of their website update, I built and implemented a
            few components for Spruce Technology Website.
          </p>
        </Card>
      </ECards>
    </div>
  )
}
export default ExperienceComp
