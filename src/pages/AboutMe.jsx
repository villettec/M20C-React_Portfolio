import React from 'react'
import { Helmet } from 'react-helmet-async';

const AboutMe = () => {
  return (
    <div>
    <Helmet>
    <title>About Villette</title>
    <meta name='description' content='Villette' />
    </Helmet>

        <section className="about-section">
            <h2>About</h2>
            <article>
                <p>
                    Villette is a full stack developer with a passion for front end design. Having initially taught herself to code she attended University of Arizona's full stack web development certification program to enhance her skills. Her projects include technology such as React.js, JavaScript, HTML, CSS, Bootstrap, Node.js, MySQL, MongoDB, Express.js, and graphic design. She hopes to find a career that will utilize these skills.
                </p>
                <p>
                    In her previous role, Villette has been a teacher. Her Bachelor's degree is in English, and Post-Baccalaureate is in Secondary Education. She has primarily taught high school with a focus on advanced literature with additional certifications in art.
                </p>
            </article>
        </section>

    
    </div >

  )
}

export default AboutMe