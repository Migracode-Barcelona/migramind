import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../img/migra-1.png";
import imagen2 from "../img/migra-4.png";
import imagen3 from "../img/migra-3.png";


const Header = () => {

    return(
    <div className="header_img">
    <Carousel fade>
      
      <Carousel.Item>
        <img class="img-fluid"
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption className="description_img1">
          <h3>Psychological Information</h3>
          <p>It may be that your crisis is an open window to a new opportunity ... Look for it! </p>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="img-fluid"
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
        <Carousel.Caption className="description_img1">
          <h3>"If you're worried enough about a result, you'll probably do something to fix it"</h3>
          <p> William James</p>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="img-fluid"
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
        <Carousel.Caption className="description_img1">
          <h3>"Life is a succession of lessons that must be lived to be understood</h3>
          <p>Helen Keller</p>
           </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default Header;