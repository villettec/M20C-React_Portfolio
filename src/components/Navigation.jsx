import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i @fortawesome/free-brands-svg-icons
// npm i popper and jquery for bootstrap dropdown and add src links to html file


const Navigation = (props) => {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
<section className="sidebar">
  <h1>Villette Comfort</h1>
  {/*Default Navigation links, only shown in desktop*/}
  <img className="profile-pic" src="../../images/profilepic.png" alt="Villette Comfort" width={240} height={240} />
  <nav>
    <ul>
      <li>
        <a href = "#About" className="about-button button" onClick={()=>props.setCurrentPage("About")}>About</a>
      </li>
      <li>
      <a href="#Portfolio" className="projects-button button" onClick={()=>props.setCurrentPage("Portfolio")}>Portfolio</a>
      </li>
      <li>
        <a href="#Contact" className="contact-button button" onClick={()=>props.setCurrentPage("Contact")}>Contact</a>
      </li>
      <li>
        <a href="#Resume" className="resume-button button" onClick={()=>props.setCurrentPage("Resume")}>Resume</a>
      </li>
    </ul>
  </nav>

  {/* Will only show dropdown navigation in mobile */}
  <div className="dropdown">
    {/* Button is dusty pink if active, otherwise dusty light greyish pink */}
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleClick}
        style={{ backgroundColor: active ? "#faf0e6" : "rgb(251, 249, 249))" , borderColor: active ? "#faf0e6" : "#faf0e6", color: active ? "rgb(251, 249, 249)" : "faf0e6" }}>
    Menu
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href = "#About" onClick={()=>props.setCurrentPage("About")}>About</a>
    <a className="dropdown-item" href="#Portfolio" onClick={()=>props.setCurrentPage("Portfolio")}>Portfolio</a>
    <a className="dropdown-item" href="#Contact" onClick={()=>props.setCurrentPage("Contact")}>Contact</a>
    <a className="dropdown-item" href="#Resume" onClick={()=>props.setCurrentPage("Resume")}>Resume</a>
  </div>
  </div>

  <div className="icon-links">
    <a href="https://www.linkedin.com/in/villette-comfort-80ab86234/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color="black"></FontAwesomeIcon></a>
    <a href="https://github.com/villettec" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
    <a href="mailto: villette@live.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} color="black"></FontAwesomeIcon></a>
  </div>
</section>
    </>
  )
}

export default Navigation