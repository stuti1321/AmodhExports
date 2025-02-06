import React from 'react'
import img1 from "../Assets/faq.png"
import img2 from "../Assets/faqpic.jpg"
import "../styles/Newfaq.scss"


const Newfaq = () => {
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  return (
    <div className="faq">
      <div className="parfaq"></div>
      
        <div className="iconfaq"><img src={img1} alt="" /></div>
        <div className="que">
        <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
        </div>
        
    </div>
  )
}

export default Newfaq