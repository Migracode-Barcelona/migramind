import React from "react";
import "../App.css"
import Union from "../img/EN-Funded by the EU-NEG.png";
import Integrate from "../img/INTEgreat_white.png";
import { useTranslation } from "react-i18next";

function Footer() {
	const { t } = useTranslation();
  return (
     <div className="container-footer">
  	 	<div className="row-footer" >
		   <div className="footer-col">
				<img className="union-logo" src={Union} style={{width: "250px", height: "55px",}}/>
				<img className="integrate-logo" src={Integrate} style={{width: "150px", height: "65px",}}/>
			</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>{t("getInfo")}</h4>
  	 			<ul>
  	 				<li><a href="/">{t("home")}</a></li>
  	 				<li><a href="/blog">{t("blog")}</a></li>
					   
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>{t("contact")}</h4>
  	 			<ul>
  	 				<li><i class="fab fa-whatsapp"></i> 633441511</li>
  	 				<li>{t("email")}: info@openculturalcenter.org</li>
  	 				<li><a href="https://goo.gl/maps/Pr8kg352namjT4V37" target="_blank">{t("address")}: Carrer del Rec 27, 08003, Barcelona</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>{t("socials")}</h4>
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