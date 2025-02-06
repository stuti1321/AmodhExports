import React from 'react'

import "../styles/Navbar.scss"
import { HashLink } from 'react-router-hash-link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbars = () => {

  
  return (
    <div className="navbar">
         <div className="top"><p className="info">Experience the perfect blend of
quality and elegance.</p>
         </div>
         
         <div className="logonav">
  
            <div className="brand">
                <h2>Amodh Exports</h2>

            </div>
         </div>
        <div className="wrapper">
        <div className="item">
                    <HashLink className="link" to="/">Home </HashLink>
                    
               
               <HashLink className='link' to="/About">About Amodh Exports</HashLink>
                   
                    <HashLink className="link" to="/Category">Products</HashLink>
                    <HashLink className='link' to="/Customization">Customization</HashLink>
                    
                    <HashLink className="link" to="/Contact">Contact Us</HashLink>
                  

                    <HashLink className="link" to="/ProtectedPage">Catalogue</HashLink>
                    <HashLink className="link" to="/Faq">FAQ's</HashLink>

                </div>
              
                

            </div>
            <div className="happy"><p>Begin your journey to transform your space with opulent designs,
impeccable craftsmanship, and premium material.</p></div>

</div>
            
       

            
           
    

    
  )
}

export default Navbars