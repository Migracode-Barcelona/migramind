import { Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar className="color-nav fixed-top">
      <Navbar.Brand 
        style={{ 
          fontSize: '30px', 
          fontFamily: "Lato", 
          fontWeight: "300",
          fontStyle: "italic",
          lineHeight: "normal", 
          marginTop: "20px",
          marginLeft: "40px",
          color: "#FFF"
        }} 
        href="">
          MIGRAMIND
      </Navbar.Brand>
  </Navbar>
  );
}


export default NavigationBar;