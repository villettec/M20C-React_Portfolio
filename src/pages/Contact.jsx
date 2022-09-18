import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        
      <Header/>

      <section className="contact-section">
            <h2>Contact</h2>
            <h3>Email</h3>
                <p><a href="mailto: villette@live.com">villette@live.com</a></p>
                <h3>Linked In</h3>
                    <p>Connect with me <a href="https://www.linkedin.com/in/villette-comfort-80ab86234/">here</a></p>
                    <h3>GitHub</h3>
                        <p>View my profile and repositories <a href="https://github.com/villettec">here</a></p>
        </section>

      <Footer/>

    </div>
  )
}

export default Contact