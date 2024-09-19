import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

  return (
    <div>
      <br />
     <Navbar expand="lg "  >
      <Container fluid  >
        <Navbar.Brand href="#" ><b>Vixcon. </b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',
             
             }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Shows" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Interviews</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Top 20 of The Week
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Featured Artist
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
              Sub Menu
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
             Event
            </Nav.Link>
            <Nav.Link href="#" >
            Contact
            </Nav.Link>
          </Nav>
          <Form >
            <Button type="button" class="btn btn-primary">GET TICKET</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
             <div className="first">
              <div className="text">
                <p>November 12, at 10.00am</p>
                <h1>The future <br />
                & Tech Expo</h1>
                <Button color="danger" outline>DISCOVER MORE </Button>
              </div>
             <img src="public\img1 (1).jpg" alt="" />

             </div>
    </div>

  )
}
