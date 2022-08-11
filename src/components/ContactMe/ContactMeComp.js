import { TextField } from "@mui/material"
import React from "react"
import { Paper, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import "./ContactMe.css"

const useStyles = makeStyles(() => ({
  input1: {
    width: 150,
  },
  input2: {
    height: 200,
    fontSize: "3em",
  },
}))

const ContactMeComp = () => {
  const classes = useStyles()
  return (
    <Paper className="contact_container" id="contact_me">
      <h1>Contact Me</h1>
      <TextField
        id="outlined-textarea"
        label="Name"
        placeholder="Your Name"
        multiline
        InputProps={{ classes: { input: classes.input1 } }}
      />
      <br></br>
      <TextField
        id="outlined-textarea"
        label="Email"
        placeholder="Your Email"
        multiline
        size="medium"
      />
      <br></br>
      <TextField
        id="outlined-textarea"
        label="Message"
        placeholder="Write here..."
        multiline
        rows={4}
      />
      <br></br>
      <Button>Submit</Button>
      <br></br>
      <p>Or You can check out my profile on other media</p>
      <p>LinkedIN</p>
      <p>GitHub</p>
    </Paper>
  )
}
export default ContactMeComp
