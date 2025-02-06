import React,{useRef} from "react";
import "../styles/Contact.scss";
import img from "../Assets/multi.jpg";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Whatsapp from "./Whatsapp";
import ContactForm from "./Email";



const Contact = () => {
  
  return (
    <div className="contact">
        <div className="upper"></div>
      <div className="paral">
        <h2>Contact Us</h2>
      </div>
      <Whatsapp/>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.2013376640457!2d77.67160675264557!3d28.956986068122923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c641395c9bc55%3A0xbe2a83be808da4a2!2sMansarovar%20Garden%20Phase%201%2C%20Park%202!5e0!3m2!1sen!2sin!4v1694171949126!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="add">
        <div className="address">
          <div className="add1">
            <h2>ADDRESS</h2>
            <p>
              36/37, Mansarover Garden <br />
              phase-2. industrial area, delhi road,
              <br /> meerut u.p-250002, India
            </p>
          </div>
        </div>
        <div className="detail">
          <h2>CONTACT</h2>
          <p>(Abhishek Bhardwaj) +91-8439904576</p>
          <p>+91-9897444422</p>
          <p>
amodhexports@gmail.com <br />
info@amodhexports.com</p>

        </div>
      </div>
     
      
      <div className="feel">
        <div className="line"></div>
        <h4>Feel Free to </h4>
        <div className="line"></div>
      </div>

      <div className="form">
        <main>
          
            <h1>Contact Us</h1>
            <div className="line2"></div>
            
          <ContactForm/>
            
           
          
        </main>
      </div>
    </div>
  );
};

export default Contact;
