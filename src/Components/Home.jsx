import React from 'react'
import img from "../Assets/upper.jpg"
import img1 from "../Assets/upper2.jpg"
import img2 from "../Assets/1final.jpg"
import img3 from "../Assets/4final.png"
import img4 from "../Assets/5final.jpg"
import img5 from "../Assets/6final.jpg"
import img7 from "../Assets/7final.jpg"
import img8 from "../Assets/8final.jpg"
import img9 from "../Assets/9final.jpg"
import img10 from "../Assets/10final.jpg"
import img11 from "../Assets/11final.jpg"
import img12 from "../Assets/12final.jpg"
import img13 from "../Assets/13final.jpg"
import img14 from "../Assets/14final.jpg"
import img6 from "../Assets/21final.jpg"
import imgfi from "../Assets/7fiup.jpg"
import imgfi1 from "../Assets/1fiup.jpg"
import imgfi2 from "../Assets/2fiup.jpg"
import imgfi3 from "../Assets/3fiup.jpg"
import imgfi4 from "../Assets/4fiup.jpg"
import imgfi5 from "../Assets/5fiup.jpg"
import imgfi6 from "../Assets/6fiup.jpg"
import imgfi7 from "../Assets/8fiup.jpg"

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Home.scss"
import logo from "../Assets/logoor.png"
import imgnew from "../Assets/finalupper.jpg"
import imgblur from "../Assets/whiteuper.jpg"
import divide from "../Assets/dividerf.png"
import Whatsapp from './Whatsapp'






const Home = () => {
  return (
    <div className="home">
        <Carousel className="carousel-style" infiniteLoop showArrows={true} showThumbs={false} showStatus={false} autoPlay interval={2000}>
        <div>
            <img className="slider-item-div" src={imgfi} alt="" />
        
            </div>
            <div>
            <img className="slider-item-div" src={imgfi7} alt="" />
        
            </div>
            <div>
            <img className="slider-item-div" src={img} alt="" />
        
            </div>
        <div>
            <img className="slider-item-div" src={imgfi4} alt="" />
        
            </div>
        <div>
            <img className="slider-item-div" src={img1} alt="" />
        
            </div>
           
            
            
            
           
            
            <div>
            <img className="slider-item-div" src={imgfi1} alt="" />
        
            </div>
          
            
            <div>
            <img className="slider-item-div" src={imgfi3} alt="" />
        
            </div>
            
           
            <div>
            <img className="slider-item-div" src={imgblur} alt="" />
        
            </div>
            <div>
            <img className="slider-item-div" src={imgfi5} alt="" />
        
            </div>
            <div>
            <img className="slider-item-div" src={imgnew} alt="" />
        
            </div>
            <div>
            <img className="slider-item-div" src={imgfi2} alt="" />
            
            </div>
            <div>
            <img className="slider-item-div" src={imgfi6} alt="" />
            
            </div>
          
           
          
            
          
           
            
          
            
            
            
            

        </Carousel>
   <div className="welcome">
    <div className="logowel">
<img src={logo} alt="" />
    </div>
    <div className="weldisc">
    Discover exquisite carpets crafted with passion and expertise. Explore our stunning
collection, ranging from traditional to contemporary designs. 
   </div>
   </div>
      <div className="collections1">
        <div className="colle2">
     <a href="/Category"><img src={img2} alt="" />
     <div className="disco">Jute Collection</div></a>


        </div>
        <div className="colle2">
        <a href="/Category"><img src={img3} alt="" />
          <div className="disc">moroccan collection</div></a>

        </div>
      </div>
      <a href="/Category">
      <div className="collections3">
        <div className="collec3">
        <img src={img5} alt="" />
          <div className="disc2">high-low collection</div>

        </div>
        <div className="collec3">
        <img src={img12} alt="" />
          <div className="disc2">jacquard collection</div>

        </div>
        <div className="collec3">
        <img src={img6} alt="" />
          <div className="disc2">hand knotted collection</div>

        </div>
      </div>
      </a>
      <Whatsapp/>
      <div className="bigpic">
        <div className="imgbig"> <a href="/Category"><img src={img4} alt="" /></a><div class="bottom-left">handloom viscose collection</div></div>
      </div>
      
     
      <div className="mission">
      
        <div className="left">
            <h2 className="omission">vintage collection</h2>
            <p></p>
                <img src={divide} alt=""/>
                
        </div>
        <div className="right"> <a href="/Category"> <img src={img7} alt="carpet"/></a></div>
        </div>
        <a href="/Category">
        <div className="collections1">
        <div className="colle2">
<img src={img11} alt="" />
<div className="disc">print collection</div>
        </div>
        <div className="colle2">
          <img src={img9} alt="" />
          <div className="disc">durry collection</div>

        </div>
      </div>
      </a>
      <a href="/Category">
      <div className="collections3">
        <div className="collec3">
        <img src={img14} alt="" />
          <div className="disc2">Abstract collection </div>

        </div>
        <div className="collec3">
        <img src={img8} alt="" />
          <div className="disc2">kelims collection</div>

        </div>
        <div className="collec3">
        <img src={img13} alt="" />
          <div className="disc2">leather collection</div>

        </div>
      </div>
      </a>
     
      
        <div className="us">
        
            <div className="usleft"> <a href="/Category"> <img src={img10} alt="carpet"/></a></div>
            <div className="usright">
                <h2 className="ustitle">tibetan collection</h2>
                
                    <img src={divide} alt=""/>
                    
            </div>
            </div>

         
            
          




    </div>
  )
}

export default Home