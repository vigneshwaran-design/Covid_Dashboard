import React from "react";
import {useState,useEffect} from "react"
import { Container, Nav, Navbar,Offcanvas } from "react-bootstrap";
import {Link} from "react-router-dom"
import axios from "axios"
import "../css/navbar.css";

const Top = () => {
  const [cases, setCases] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://covidpagination.herokuapp.com/country")
      .then((res) => {
        console.log(res.data.data);
        setCases(res.data.data);
        console.log(cases)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div>
    
      <Navbar bg="dark" variant="dark" expand={false} className="nav">
  <Container fluid>
    <Navbar.Brand href="#"><p className="co"> 🦠 Covid Dashboard 🦠</p></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        {/* <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3" style={{alignItems: 'center'}}>
          <Nav.Link href="/" ><Link className="link" to={"/"}  state={cases} >Home</Link></Nav.Link>
          <Nav.Link href="/search" ><Link className="link" to={"/search"}  state={cases} >Search</Link></Nav.Link>
          <Nav.Link href="/global"><Link className="link" to={"/global"}  state={cases} >Global</Link></Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </div>
  );
};

export default Top;
