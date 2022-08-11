import { Link } from "gatsby"
import React from "react"
import "./NewHeader.css"

const NewHeader = () => {
  return (
    <header className="header_styles">
      <div>ASL</div>
      <nav className="nav_styles">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {/* <Link to="#about_me">AboutMe</Link> */}
            <a href="#about_me" smooth>
              AboutMe
            </a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact_me">ContactMe</a>
          </li>
        </ul>
        {/* <Link className="links_styles">Home</Link>
        <Link className="links_styles">About</Link>
        <Link className="links_styles">Experience</Link>
        <Link className="links_styles">Skills</Link>
        <Link className="links_styles">Contact Me</Link> */}
      </nav>
    </header>
  )
}

export default NewHeader
