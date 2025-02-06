import React from 'react'
import "../styles/About.scss"
import divide from "../Assets/dividerf.png"
import img from "../Assets/about.jpg"
import img2 from "../Assets/about4.jpg"
import img3 from "../Assets/about5.jpg"
import img4 from "../Assets/about3.jpg"
import img5 from "../Assets/about2.jpg"

import icon from "../Assets/iconrug2.png"
import icon2 from "../Assets/eco-friendly.png"
import Footer from './Footer'
import Whatsapp from './Whatsapp'
import ContactForm from './Email'
const About = () => {
  return (
    <div className="aboutp">
      <div className="paralle"><h2>About Amodh Exports</h2></div>
      <div className="introp">
        <img src={icon} alt="" />
      <p className='intro'>At Amodh Exports, we take immense pride in being a leading exporter of exquisite carpets
worldwide. With years of experience and a deep passion for the artistry of carpets, we offer a
diverse range of high-quality products to cater to the discerning tastes of our global clientele.
Whether you’re an interior designer, retailer, or individual seeking exceptional carpets, we
have something to suit every style and requirement.</p>
      </div>
      

      <div className="missions">
        <div className="lefts">
            <h2 className="omissions">Our Mission</h2>
            <p>At the core of our business philosophy is a commitment to provide the finest carpets that
blend craftsmanship, beauty, and functionality. Our mission is to be a reliable and trusted
partner for our customers, delivering exceptional carpets that enhance the aesthetic appeal
of any space. We strive to exceed expectations by offering an extensive collection,
unparalleled customer service, and timely delivery.</p>
                <img src={divide} alt=""/>
                
        </div>
        <div className="rights"> <img src={img} alt="carpet"/></div>
        </div>
        <div className="uss">
        
            <div className="ussleft"> <img src={img2} alt="carpet"/></div>
            <div className="ussright">
                <h2 className="usstitle">Quality and Craftsmanship</h2>
                <p>We understand that carpets are not merely floor coverings; they are works of art that add
character, warmth, and sophistication to any environment. Each carpet is meticulously
handcrafted using traditional techniques passed down through generations, ensuring the
highest quality and attention to detail.</p>
                    <img src={divide} alt=""/>
                    
            </div>
            </div>
            <div className="parl">
              <h2>Crafted for Comfort, Designed for Style.</h2>
            </div>
            <Whatsapp/>
      <div className="missionss">
        <div className="leftss">
            <h2 className="omissionss">Extensive Product Range</h2>
            <p>Our extensive product range encompasses an array of designs, patterns, and materials to
suit diverse preferences. From luxurious hand-knotted silk carpets to durable and
eco—friendly wool blends, we offer carpets in various sizes, colours, and styles. Whether
you seek a timeless Persian rug, or a custom-made creation, our collection is designed to
inspire and elevate any space. We continuously update our inventory to reflect the latest
trends in the carpet industry, ensuring our customers have access to most sought-after
designs.</p>
                <img src={divide} alt=""/>
                
        </div>
      
        <div className="rightss"> <img src={img3} alt="carpet"/></div>
        </div>
        <div className="uss">
        
            <div className="ussleft"> <img src={img4} alt="carpet"/></div>
            <div className="ussright">
                <h2 className="usstitle">Customization</h2>
                <p>We understand that every space is unique, and sometimes, you need a carpet that perfectly
aligns with your vision. That’s why we offer customization services, allowing you to create
bespoke carpets tailored to your specific requirements. Our team of skilled craftsmen and
designers work closely with you to bring your ideas to life, ensuring that your personalized
carpet becomes a cherished centrepiece in your home or project.</p>
                    <img src={divide} alt=""/>
                    
            </div>
            </div>
            <div className="intro2">
        <img src={icon2} alt="" />
      <p className='intro2'>We believe in responsible business practices and are committed to sustainability. We
actively seek out eco-friendly materials and support fair trade practices, ensuring that our
carpets are produced ethically and have minimal impact on environment.<br/>By choosing our carpets, you are not only investing in exceptional quality but also
contributing to a greener and more socially conscious world.</p>
      </div>
      <div className="missions">
        <div className="lefts">
            <h2 className="omissions">Global Reach</h2>
            <p>With our extensive network and logistics expertise, we export carpets across the globe.
Whether you are located in North America, Europe, Asia, or any other part of the world, we
ensure seamless shipping and prompt delivery to your doorstep. We take pride in our
efficient and reliable export process, making your experience with us smooth and hassle-
free.</p>
                <img src={divide} alt=""/>
                
        </div>
        <div className="rights"> <img src={img5} alt="carpet"/></div>
        </div>
    </div>
   
 
  )
}


export default About