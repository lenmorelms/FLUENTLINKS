import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 FluentLinks. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;