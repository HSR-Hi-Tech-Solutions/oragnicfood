import React from 'react';
import { Container, Row,Col, InputGroup, Button, Form } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import './Footer.scss';

import { Envelope, HouseDoor } from "react-bootstrap-icons";

import logo from '../../assets/logo-2.png';

const Footer = () => {
  return (
    <>
    <Container fluid className="hsr-footer">
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <img src={logo} alt={"Company Logo"} width={160}  />
            <br />
            <br/>
            <p>Sed perspiciatis unde omnis natus error voluptatem accusan doloreqe laudantium totam aperiam eaque sipsa quae abillo inventore.</p>
            <div className="mt-5">
              <a href="#"> <Envelope /> &emsp;info@example.com</a>
              <a href="#"><HouseDoor/> &emsp;Favicon, New York, USA - 25423</a>
            </div>
          </Col>
          <Col xs={12} md={1} lg={2}></Col>
          <Col xs={12} md={2} lg={2}>
            <h5>Quick Links</h5>
            <ul className="list-none">
              <li>
                <a href="#">About Our Company</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Flash Offers</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2}>
            <h5>Categories</h5>
            <ul className="list-none">
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Flash Offers</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={3}>
          <h5>Newsletter</h5>
          <div className="mt-5">
          <InputGroup className="hsr-search-section">
        <Form.Control
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="hsr-search-input"
        />
        <Button id="button-addon2">
          <div className="hsr-round"><ArrowRight  /></div>
          
        </Button>
      </InputGroup>

          </div>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}

export default Footer