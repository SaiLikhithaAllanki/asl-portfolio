import React from "react"
import styled from "styled-components"
//import "./NewHeader.css"
//import logo from "../../images/logo.png"

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #edf2f4;
  color: #2b2d42;
  font-size: 32px;
  height: 80px;

  .page_logo {
    margin-left: 30px;
    font-family: "Inspiration", cursive;
  }
`

const NavBarUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

const NavBarLi = styled.li`
  position: relative;
  padding: 0 20px;
  height: 100%;
  display: flex;
  font-size: 21px;

  a {
    z-index: 1;
    color: #2b2d42;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding: 10px 5px;
    font-family: "IBM Plex Mono", monospace;
  }
  a:hover {
    background-color: #2b2d42;
    color: #edf2f4;
    width: auto;
    height: 50px;
    border-radius: 50% 20% / 10% 40%;
  }
`

// const NavBarA = styled.a`
//   z-index: 1;
//   color: #2b2d42;
//   text-decoration: none;
//   font-family: "Poppins", sans-serif;
//   font-weight: 500;
//   font-size: 18px;
//   padding: 10px 5px;
//   transition: transform 0.2s;

//   a:hover {
//     transform: scale(1.5);
//   }
// `

const NewHeader = () => {
  return (
    <HeaderStyle>
      <div>
        <h4 className="page_logo">Sai Likhitha Allanki</h4>
      </div>
      <nav className="nav_styles">
        <NavBarUl>
          <NavBarLi>
            <a href="/">Home</a>
          </NavBarLi>
          <NavBarLi>
            {/* <Link to="#about_me">AboutMe</Link> */}
            <a href="#about_me" smooth>
              About
            </a>
          </NavBarLi>
          <NavBarLi>
            <a href="#experience">Experience</a>
          </NavBarLi>
          <NavBarLi>
            <a href="#skills">Skills</a>
          </NavBarLi>
          <NavBarLi>
            <a href="#contact_me">Contact</a>
          </NavBarLi>
        </NavBarUl>
        {/* <Link className="links_styles">Home</Link>
        <Link className="links_styles">About</Link>
        <Link className="links_styles">Experience</Link>
        <Link className="links_styles">Skills</Link>
        <Link className="links_styles">Contact Me</Link> */}
      </nav>
    </HeaderStyle>
  )
}

export default NewHeader
