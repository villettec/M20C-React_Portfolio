import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      <input type="text" className="name-box" name="user_name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </p>

      <p>
      <label>Email</label>
      </p>
      <p>
      <input type="email" className="email-box" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </p>

      
      <p>
      <label>Message</label>
      </p>
      <p>
      <textarea name="message" className="message-box" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      </p>
      <p>
      <input type="submit" value="Send" />
      </p>

    </form>
    </section>
  );
};

export default Contact