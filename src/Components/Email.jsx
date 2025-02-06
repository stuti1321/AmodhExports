import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import {MdOutlinePlace} from "react-icons/md"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number:'',
    country:'',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_syqn784',
        'template_rxt5cei',
        formData,
        'z8_VCcVxfgzHemqTI'
      )
      .then(
        (response) => {
          console.log('Email sent:', response);
          alert('Email sent successfully!');
          console.log(formData)
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="same">
        <div><div className="icon">
                  <BsPerson />
                </div>
                <input
        type="text"
        name="name"
        required placeholder=" Name"
        value={formData.name}
        onChange={handleChange}
      /></div>
     <div><div className="icon">
                  <AiOutlineMail />
                </div>
                <input
        type="email"
        name="email"
        required placeholder=" Email"
        value={formData.email}
        onChange={handleChange}
      /></div>
      <div> <div className="icon">
                  <AiOutlineMobile />
                </div> <input
        type="tel"
        name="tel"
        required placeholder=" Number"
        value={formData.tel}
        onChange={handleChange}
        pattern="[1-9]{1}[0-9]{9}"
      /></div>
      <div><div className="icon">
                  < MdOutlinePlace/>
                </div>
                <input
        type="text"
        name="country"
        required placeholder=" Country"
        value={formData.country}
        onChange={handleChange}
      /></div>
     
      </div>
      <div><textarea
      id="freeform"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="20"
        cols="200"
      ></textarea></div>
      
      <button type="submit" className="btn-grad">Send Message</button>
    </form>
    </div>
    
  );
}

export default ContactForm;