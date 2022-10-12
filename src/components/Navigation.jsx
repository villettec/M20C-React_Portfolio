import React from 'react'

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i @fortawesome/free-brands-svg-icons

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Navigation = (props) => {
  return (
    <>
<section className="sidebar">
  <h1>Villette Comfort</h1>
  {/*Navigation links*/}
  <img className="profile-pic" src="../../images/profilepic.png" alt="Photo of Villette Comfort" width={240} height={240} />
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
  <div className="icon-links">
    <a href="https://www.linkedin.com/in/villette-comfort-80ab86234/"><FontAwesomeIcon icon={faLinkedin} color="rgb(183, 128, 151)"></FontAwesomeIcon></a>
    <a href="https://github.com/villettec"><FontAwesomeIcon icon={faGithub} color="rgb(183, 128, 151)"></FontAwesomeIcon></a>
    <a href="mailto: villette@live.com"><FontAwesomeIcon icon={faEnvelope} color="rgb(183, 128, 151)"></FontAwesomeIcon></a>
  </div>
</section>
    </>
  )
}

export default Navigation