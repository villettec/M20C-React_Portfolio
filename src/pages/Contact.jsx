import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_e31v30b', form.current, 'bpABHUMS77_w_7Kzf')
      .then((result) => {
          console.log(result.text);
          toast.success("Email has been sent");
          setName("");
          setEmail("");
          setMessage("");
      }, (error) => {
          console.log(error.text);
          toast.error("Error: please try again")
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
      <input type="text" name="user_name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </p>

      <p>
      <label>Email</label>
      </p>
      <p>
      <input type="email" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </p>

      
      <p>
      <label>Message</label>
      </p>
      <p>
      <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
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