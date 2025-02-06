import React from 'react'
import custom from "../Assets/pencil.png"
import "../styles/Customization.scss"
import { useState } from 'react';
import emailjs from 'emailjs-com';

import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Typewriter from './Typewriter';
import Whatsapp from './Whatsapp';
import thread from "../Assets/thread.png"
import shapes from "../Assets/colour.png"
import size from "../Assets/size.png"
import fabric from "../Assets/fabric.png"
import create from "../Assets/creativity.png"

function Customization() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number:'',
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
    <div className="customization">
         <div className="parall">
        <h2>Customization</h2>
      </div>
      <div className="customdetail">
        <img src={custom} alt="" />
      <h2 className="custom">
      We provide you with the opportunity to bring your creative vision to life in the form of a
beautifully crafted and personalized carpet.
      </h2>
      <p>aspects of customization that you can consider:</p>
      <span className='typec'><Typewriter/></span>

      
      
      </div>
      <div className="details">
        <div className="design">
            <div className="iconcustom"><img src={create} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Design</h2>    <p>You can choose or create a design for your carpet, incorporating patterns,
motifs, or images that resonate with your taste and decor theme. This can range from
simple geometric patterns to intricate designs or even custom artwork.</p></div>
            
            </div>
        </div>
        <div className="design2">
           
            <div className="customde">
                <div className="de"><h2> Size and Shape</h2>
                <p>Customization enables you to specify the dimensions of the carpet
to fit the exact measurements of your space. You can have it made in a specific
shape, such as rectangular, square, round, or even irregular shapes to suit unique
areas.</p></div>
                
            </div>
            <div className="iconcustom"><img src={size} alt="" /></div>
        </div>
        <div className="design2">
            <div className="iconcustom"><img src={shapes} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Colour</h2><p>You can select the colours that match your room’s colour scheme or create a
contrast to make the carpet stand out. Customization often allows you to choose from
a wide range of colour options or even request specific dyeing techniques for a more
personalized look.</p></div>
                
            </div>
        </div>
        <div className="design2">
           
            <div className="customde">
                <div className="de"><h2>Materials</h2><p>Customization might also involve selecting the type of material to be used
for your carpet. Choices can include natural fibres like wool or silk, synthetic
materials like nylon or polyester, or a combination of different materials.</p></div>
                
            </div>
            <div className="iconcustom"><img src={fabric} alt="" /></div>
        </div>
        <div className="design2">
            <div className="iconcustom"><img src={thread} alt="" /></div>
            <div className="customde">
                <div className="de"><h2>Finishing Touches</h2> <p>Additional customization options can include choosing the type of
edging or binding, adding fringe or trim, selecting the pile height (the length of the
carpet fibres), or specifying other details that contribute to the overall appearance
and functionality of the carpet.</p></div>
               
            </div>
        </div>
    </div>

      <Whatsapp/>
      
      
      <div className="customsform">
      <div className="forms">
        <main>
          <form action="/action_page.php">
            <h1 className='customname'> Customization</h1>
            <div className="line21"></div>
            <div  className="sameform" >
        <div><div className="icon">
                  <BsPerson />
                </div>
                <input
        type="text"
        name="name"
        required placeholder=" Your Name"
        value={formData.name}
        onChange={handleChange}
      /></div>
     <div><div className="icon">
                  <AiOutlineMail />
                </div>
                <input
        type="email"
        name="email"
        required placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      /></div>
      <div> <div className="icon">
                  <AiOutlineMobile />
                </div> <input
        type="tel"
        name="tel"
        required placeholder="Your Number"
        value={formData.tel}
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

            
            <div className="sendfile">
      <label>
      Upload Image</label>       
  <input type="file" id="myFile" name="filename"/>
  

</div>
            <button type="submit" className="btn-grad">
              Send Message
            </button>
          </form>
        </main>
      </div>
      </div>
      
    </div>
     


    

  )
}

export default Customization