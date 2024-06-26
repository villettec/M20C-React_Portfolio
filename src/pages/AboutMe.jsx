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
                    Villette is a full stack web developer with a passion for front end design. Having initially taught herself to code, she completed 240 class hours at University of Arizona's full stack web development certification program to enhance her skills. Her projects include technology such as React.js, JavaScript, HTML, CSS, Bootstrap, Node.js, MySQL, MongoDB, Express.js, and graphic design. 
                </p>
            </article>
        </section>

    
    </div >

  )
}

export default AboutMe