import React from 'react'

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
        <a href = "#About" className="about-button" onClick={()=>props.setCurrentPage("About")}>About</a>
      </li>
      <li>
      <a href="#Portfolio" className="projects-button" onClick={()=>props.setCurrentPage("Portfolio")}>Portfolio</a>
      </li>
      <li>
        <a href="#Contact" className="contact-button" onClick={()=>props.setCurrentPage("Contact")}>Contact</a>
      </li>
      <li>
        <a href="#Resume" className="resume-button" onClick={()=>props.setCurrentPage("Resume")}>Resume</a>
      </li>
    </ul>
  </nav>
  <div className="icon-links">
    <a href="https://www.linkedin.com/in/villette-comfort-80ab86234/"><i className="fa-brands fa-linkedin" /></a>
    <a href="https://github.com/villettec"><i className="fa-brands fa-github" /></a>
    <a href="mailto: villette@live.com"><i className="fa-solid fa-envelope" /></a>
  </div>
</section>
    </>
  )
}

export default Navigation