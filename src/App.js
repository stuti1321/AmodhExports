
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbars from "./Components/Navbars";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import "../src/styles/Navbar.scss"
import "../src/styles/App.scss"
import Customization from "./Components/Customization";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "../src/styles/Mediaquery.scss";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import ProtectedPage from "./Components/Catalogue";
import Faq from "./Components/Faq";
import HamburgerMenu from "./Components/Newham";
import Newfaq from "./Components/Newfaq";



function App() {
  return (
    <div className="App">
    
      <Router>
        <Navbars/>
        
       <HamburgerMenu/>
        

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Customization" element={<Customization/>}/>
      <Route path="/ProtectedPage" element={<ProtectedPage/>}/>
      <Route path="/Faq" element={<Faq/>}/>
        
        
      </Routes>
      <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
