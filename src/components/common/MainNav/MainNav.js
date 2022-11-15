import React from 'react';
import './MainNav.scss';
import {Navbar, Container, NavDropdown,Nav,InputGroup,Form, Button, Row, Col} from 'react-bootstrap';
import {Cart4, Search} from 'react-bootstrap-icons';

import logo from '../../assets/logo-2.png';

const MainNav = () => {
  return (
    <>
    <Navbar className="hsr-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt={"Company Logo"} width={160} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto me-auto">
            <Nav.Link className="hsr-menus" href="/home">Home</Nav.Link>
            <Nav.Link className="hsr-menus" href="/about">About</Nav.Link>
            <NavDropdown className="hsr-menus" title="Fruits & Vegetables" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dry Fruits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Seasonal Fruits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vegetables</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All Fruits & Vegetables
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Row>
            <Col lg={12} md={12}>
            <InputGroup className="hsr-search-section">
        <Form.Control
          placeholder="Select products..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="hsr-search-input"
        />
        <Button id="button-addon2">
          <Search />
        </Button>
      </InputGroup>
            </Col>
            </Row>
      &emsp;

          <Nav.Link className="hsr-menus" href="/cart" ><Cart4 /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default MainNav