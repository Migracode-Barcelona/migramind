import React from "react";
import "../App.css"
import Union from "../img/EN-Funded by the EU-NEG.png";
import Integrate from "../img/INTEgreat_white.png";


function Footer() {
  return (
     <div className="container-footer">
  	 	<div className="row-footer" >
		   <div className="footer-col">
				<img className="union-logo" src={Union} alt="" style={{width: "250px", height: "55px",}}/>
				<img className="integrate-logo" src={Integrate} alt="" style={{width: "150px", height: "65px",}}/>
			</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>Get info</h4>
  	 			<ul>
  	 				<li key="events"><a href="/events">Events</a></li>
  	 				<li key="psychology"><a href="/psychology">Psychology</a></li>
					   <li key="about"><a href="/about">About us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li key="whatsapp"><i className="fab fa-whatsapp"></i> 633441511</li>
  	 				<li key="email">Email: info@openculturalcenter.org</li>
  	 				<li key="address"><a href="https://goo.gl/maps/Pr8kg352namjT4V37">Address: Carrer del Rec 27, 08003, Barcelona</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a target="_blank" rel="noreferrer" href="https://www.facebook.com/OpenCulturalCenter/"><i className="fab fa-facebook-f"></i></a>
  	 				<a target="_blank" rel="noreferrer" href="https://twitter.com/occ_project?lang=en"><i className="fab fa-twitter"></i></a>
  	 				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/openculturalcenter/?hl=en"><i className="fab fa-instagram"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    )
}

export default Footer;