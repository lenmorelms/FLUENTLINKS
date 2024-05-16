import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">FluentLinks</h1>
              <p className="lead">Empower your social presence with FluentLinks.</p>
              <Button variant="primary">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Share all your links in one place</h2>
              <p>With FluentLinks, you can create a single short URL to bundle multiple links together, making it easier for your audience to access all your content.</p>
            </Col>
            <Col md={6}>
              {/* Add an image or video here */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              {/* Add an image or video here */}
            </Col>
            <Col md={6}>
              <h2>Customize your profile</h2>
              <p>Personalize your FluentLinks profile with custom themes, colors, and branding to make it uniquely yours.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Engage with your audience</h2>
              <p>Use FluentLinks analytics to track clicks, views, and engagement metrics to understand your audience better.</p>
            </Col>
            <Col md={6}>
              {/* Add an image or video here */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;