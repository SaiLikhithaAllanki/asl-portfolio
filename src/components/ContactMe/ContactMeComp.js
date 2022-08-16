//import { TextField } from "@mui/material"
import React from "react"
//import { Paper, Button } from "@material-ui/core"
import { Card } from "@material-ui/core"

import "./ContactMe.css"
import styled from "styled-components"
import { Icon } from "@iconify/react"

const ContactMeStyle = styled.div`
  text-align: center;
  margin-top: 160px;
  margin-bottom: 160px;
`
const ContactCards = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;

  .c_cards {
    width: 251px;
    height: 251px;
    padding: 40px;
    background-color: #edf2f4;
  }
  .git_icon {
    width: 100px;
    height: 100px;
  }
`

const ContactMeComp = () => {
  return (
    <ContactMeStyle id="contact_me">
      <h1>Contact Me</h1>
      <ContactCards>
        <Card className="c_cards">
          <Icon
            icon="fluent:mail-16-filled"
            color="#2b2d42"
            className="git_icon"
          />
          <h1>Email</h1>
        </Card>
        <Card className="c_cards">
          <Icon
            icon="bxl:linkedin-square"
            color="#2b2d42"
            className="git_icon"
          />
          <h1>LinkedIn</h1>
        </Card>
        <Card className="c_cards">
          <Icon icon="bxl:github" color="#2b2d42" className="git_icon" />
          <h1>GitHub</h1>
        </Card>
      </ContactCards>
    </ContactMeStyle>
  )
}
export default ContactMeComp
