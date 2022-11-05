import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import './TopNav.scss';

const TopNav = () => {
  return (
    <>
      <Container fluid className="hsr-top-nav">
        <Container>
        <Row>
          <Col lg={3} md={3}>
            <a href="mailto: support@organicfood.com">
              <Icon.Envelope></Icon.Envelope> &nbsp; support@organicfood.com
            </a>
          </Col>
          <Col lg={3} md={3}>
          <a href="tel: +91 9102538091">
              <Icon.Telephone></Icon.Telephone> &nbsp; +91 9102538091
            </a>
          </Col>
          <Col lg={3} md={3}></Col>
          <Col lg={3} md={3} className="ms-auto">
          <a href="#">
              <Icon.Facebook></Icon.Facebook> &nbsp;
            </a>
            <a href="#">
              <Icon.Instagram></Icon.Instagram> &nbsp;
            </a>
            <a href="#">
              <Icon.Linkedin></Icon.Linkedin> &nbsp;
            </a>
            <a href="#">
              <Icon.Twitter></Icon.Twitter> &nbsp;
            </a>
            <a href="#">
              <Icon.Youtube></Icon.Youtube> &nbsp;
            </a>
          </Col>
        </Row>
        </Container>
      </Container>
    </>
  )
}

export default TopNav