import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactUs.css"
import Swal from 'sweetalert2';

export const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msj, setMsj] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    if (email==="") {
        alert("ABC")
        return
    }
    emailjs
      .sendForm('service_lb9k21w', 'template_qn6m14u', form.current, {
        publicKey: '6LJdjxAV4b1LUCc43',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire("Enviado Exitosamente")
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire("Error")
        },
      );
    setName("")
    setEmail("")
    setMsj("")

  };

  return (
    <div className='FormContact'>
      <h2 className='tituloContacto'>Contacto</h2> 
       <form ref={form} onSubmit={sendEmail} className='Field'><br />
        <label>Name</label><br />
        <input value={name} type="text" name="user_name" onChange={(e) => setName(e.target.value)} /> <br />
        <label>Email</label><br />
        <input value={email} type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} /> <br />
        <label>Message</label><br />
        <textarea name="message" value={msj} onChange={(e) => setMsj(e.target.value)} /> <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs