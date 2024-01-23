import React, {  useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
/* import MigraMind1 from '../img/MigraMind1.png';*/
import MigramindHealth from '../img/MigramindHealth.png';
import Search from '../img/Search.png';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Navigationbar() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const [input, setInput] = useState(search);
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (input.length > 0) {
      try {
        navigate(`results?search=${input}`);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please enter some text!");
    }     
  }

  return (
    <Navbar 
      collapseOnSelect
      expand="sm"
      variant="light"
      className="color-nav fixed-top"
    >
      <Navbar.Brand href="/" >
        <img src={MigramindHealth} width="160" height="30" alt=""/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/psychology">Psychology</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control 
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="search-button" variant="outline-success"><img src={Search} width="30" height="10" alt=""/></button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navigationbar;