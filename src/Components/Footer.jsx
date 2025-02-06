import React from 'react'
import "../styles/Footer.scss"
import img from "../Assets/logoor.png"
import { HashLink } from 'react-router-hash-link';
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  return (
    <div className='footer'>
        <div className="mainfoot">
            <div className="leftfoot">
            <div className="logofoot">
                <img src={img} alt="" />
            </div>
            <p>Let us turn your ideas into reality and together we can create a carpet that is a true reflection of your imagination, style and individuality . <br />
            <br />With certificates like ISO 9001:2015 and ISO 14001:2015, along with registrations with CEPC AND EPCH , we guarantee the highest standards in quality, competetive pricing and exponential service .</p>
            </div>
            <div className="centerfoot">
                <h3>Navigation</h3>
                <HashLink className="link" to="/" onClick={goToTop}>Home </HashLink>
                    
                    <HashLink className='link' to="/About" onClick={goToTop} >About Amodh Exports</HashLink>
                    <HashLink className='link' to="/Category" onClick={goToTop}>Products</HashLink>
                        
                        
                         <HashLink className='link' to="/Customization" onClick={goToTop}>Customization</HashLink>
                         
                         <HashLink className="link" to="/Contact" onClick={goToTop}>Contact Us</HashLink>
                         <HashLink className="link" to="/ProtectedPage" onClick={goToTop}>Catalogue</HashLink>
            </div>
            <div className="social">
                <h3>Connect with Us</h3>
                <div className="iconsocial">
                <AiFillInstagram size={'1.4em'}></AiFillInstagram>
                <FaFacebookSquare size={'1.4em'}/>
                <FaSquareXTwitter size={'1.4em'}/>
                <AiFillYoutube size={'1.4em'}/>
                </div>
                
            </div>
            <div className="rightfoot">
                <h3>Contact Us</h3> <br />
                Address-
                <p>36/37, Mansarover Garden <br />
              Phase-2 ,Industrial Area,<br /> Delhi Road,
               Meerut <br /> U.P-250002, India<br /></p>
            E-mail-<p>amodhexports@gmail.com <br />
                    info@amodhexports.com <br />
                </p>
                
               
                Mobile- <p>+91-8439904576 <br />+91-9897444422 <br /></p>
                

        
            </div>
        </div>
        <div className="copyfoot"><p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2023 under Amodh Exports</p></div>
    </div>
  )
}

export default Footer