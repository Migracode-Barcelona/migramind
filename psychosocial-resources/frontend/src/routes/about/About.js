import Migracode from "../../img/migracode.png";
import './About.css'
import Amanda from "../../img/amanda.jpeg"
import Elimar from "../../img/elimar.jpeg"
import Laura from "../../img/laura.jpeg"
import Nuno from "../../img/nuno.jpg"
import Oswaldo from "../../img/OSWALDO.jpg"
import Portrait from "../../components/Portrait";

const About = () => {
    return (
        <div className="container-about">
            <div className="migracode">
                <img src={Migracode}/>
                <h3>
                    We are web developers trained by <b>Migracode</b> <br></br>
                    and Migramind is our final project where we are applying everything we learned over 7 months.<br></br> 
                    We are immigrants living in Barcelona and our team is made up of people from Brazil, Cape Verde, Colombia and Venezuela.
                </h3>
            </div>
            <div className="team">
                <Portrait photo={Amanda} name={"Amanda Oliveira"}/>
                <Portrait photo={Elimar} name={"Elimar Finol"}/>
                <Portrait photo={Laura} name={"Laura Garcia"}/>
                <Portrait photo={Nuno} name={"Nuno Luís"}/>
                <Portrait photo={Oswaldo} name={"Oswaldo Viloria"}/>
            </div>
        </div>

    )
};

export default About;