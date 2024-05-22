import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './reusables/Logo';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about-us" >About Us</Link></li>
              <li><Link to="/contact-us" >Contact Us</Link></li>
              <li><Link to="/help" >Help</Link></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li><Link to="#" >Twiiter</Link></li>
              <li><Link to="#" >Facebook</Link></li>
              <li><Link to="#" >Instagram</Link></li>
              <li><Link to="#" >Tik tok</Link></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <Logo height="100" textSise="xx-large"/>
            <p className="light-strong">Empowering engagement in the digital age</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center grey-font">
            <p className="grey-font">&copy; 2024 FluentLinks. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;