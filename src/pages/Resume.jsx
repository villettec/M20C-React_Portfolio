import React from 'react'
import { Helmet } from 'react-helmet-async';

const Resume = () => {
  return (
    <div>
    <Helmet>
    <title>Villette's Resume</title>
    <meta name='description' content="Villette's Resume" />
    </Helmet>

      <section className="resume-section">
      <h1>Resume</h1>
      <p>
      <a href="../../images/vcomfort-resume.pdf" download>Download</a>
      </p>
      <img src="../../images/resume-1.png" alt="Villette Comfort's Resume page 1" className="resume-pic"/>
      {/* <img src="../../images/resume-2.png" alt="Villette Comfort's Resume page 2" className="resume-pic"/> */}
      </section>
    </div>
  )
}

export default Resume