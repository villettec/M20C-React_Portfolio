import React from 'react'

const Navigation = (props) => {
  return (
    <>
        <nav>
            <ul>
            <li>
              <a href = "#About" onClick={()=>props.setCurrentPage("About")}>About</a>
            </li>
            <li>
              <a href="#Portfolio" onClick={()=>props.setCurrentPage("Portfolio")}>Portfolio</a>
            </li>
            <li>
              <a href="#Resume" onClick={()=>props.setCurrentPage("Resume")}>Resume</a>
            </li>
            <li>
              <a href="#Contact" onClick={()=>props.setCurrentPage("Contact")}>Contact</a>
            </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation