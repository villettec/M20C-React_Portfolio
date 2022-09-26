import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact-section">
    <h2>Contact</h2>
    <form ref={form} onSubmit={sendEmail}>
    
      <p>
      <label>Name</label>
      </p>
      <p>
      <input type="text" name="user_name" />
      </p>

      <p>
      <label>Email</label>
      </p>
      <p>
      <input type="email" name="user_email" />
      </p>

      
      <p>
      <label>Message</label>
      </p>
      <p>
      <textarea name="message" />
      </p>
      <p>
      <input type="submit" value="Send" />
      </p>

    </form>
    </section>
  );
};

export default Contact


//ORIGINAL CONTACT INFO LIST
// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
        
//       <section className="contact-section">
//             <h2>Contact</h2>
//             <h3>Email</h3>
//                 <p><a href="mailto: villette@live.com">villette@live.com</a></p>
//             <h3>Linked In</h3>
//                 <p>Connect with me <a href="https://www.linkedin.com/in/villette-comfort-80ab86234/">here</a></p>
//             <h3>GitHub</h3>
//                 <p>View my profile and repositories <a href="https://github.com/villettec">here</a></p>
//         </section>

//     </div>
//   )
// }

// export default Contact