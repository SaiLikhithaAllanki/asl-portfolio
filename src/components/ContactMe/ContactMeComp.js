import { TextField } from "@mui/material"
import React from "react"
import { Paper, Button } from "@material-ui/core"
import "./ContactMe.css"

const ContactMeComp = () => {
  return (
    <Paper className="contact_container">
      <h1>Contact Me</h1>
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
      />
      <Button>Submit</Button>
    </Paper>
  )
}
export default ContactMeComp
