import React from "react";
import "../App.css"
import Union from "../img/EN-Funded by the EU-NEG.png";
import Integrate from "../img/INTEgreat_white.png";


function Footer() {
  return (
     <div className="container-footer">
  	 	<div className="row-footer" >
		   <div className="footer-col">
				<img className="union-logo" src={Union} style={{width: "250px", height: "55px",}}/>
				<img className="integrate-logo" src={Integrate} style={{width: "150px", height: "65px",}}/>
			</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>Get info</h4>
  	 			<ul>
  	 				<li><a href="/events">Events</a></li>
  	 				<li><a href="/psychology">Psychology</a></li>
					   <li><a href="/about">About us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><i class="fab fa-whatsapp"></i> 633441511</li>
  	 				<li>Email: info@openculturalcenter.org</li>
  	 				<li><a href="https://goo.gl/maps/Pr8kg352namjT4V37">Address: Carrer del Rec 27, 08003, Barcelona</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a target="_blank" href="https://www.facebook.com/OpenCulturalCenter/"><i class="fab fa-facebook-f"></i></a>
  	 				<a target="_blank" href="https://twitter.com/occ_project?lang=en"><i class="fab fa-twitter"></i></a>
  	 				<a target="_blank" href="https://www.instagram.com/openculturalcenter/?hl=en"><i class="fab fa-instagram"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    )
}

export default Footer;