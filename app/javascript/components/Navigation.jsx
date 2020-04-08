import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navigation = () => {
  return (
    <>
      <Navbar id="nav" bg="dark" variant="dark">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">About</Nav.Link>
          <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
          <Nav.Link eventKey="link-2">Contact Me</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default Navigation;
