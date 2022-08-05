import { Card } from "@material-ui/core"
import React from "react"
import "./AboutMe.css"

const AboutMeComp = () => {
  return (
    <Card className="card_container">
      <h1>About Me </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sed odio quis velit vehicula fringilla. Duis quis ligula eu diam rutrum
        tincidunt ultrices sed mauris. Nulla sollicitudin pretium lectus eget
        congue. Vestibulum nec ex feugiat, lobortis libero ut, congue urna. Duis
        eu laoreet risus. In suscipit enim in cursus posuere. Donec tincidunt
        tortor eget orci posuere, eu molestie ipsum rhoncus. Praesent hendrerit
        ullamcorper magna vitae egestas. In hac habitasse platea dictumst.
        Maecenas ut facilisis purus. Proin auctor sit amet ligula in semper.
      </p>
      <h1>Experience</h1>
      <ul>
        <li>Wipro</li>
        <li>Spruce Technologies</li>
      </ul>
    </Card>
  )
}
export default AboutMeComp
