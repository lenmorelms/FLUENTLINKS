import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Header from './Header';
import Image from './reusables/Image';

const LandingPage = () => {
  const icons = [
    "facebook", "instagram", "itunes", "email", "soundcloud", "spotify",
    "telegram", "tiktok", "twitter", "whatsapp", "youtube"
  ];
  return (
    <div className="App">
    <Header />
    <div className="landing-page">
      <header className="fw-bold py-5">
        <Container>
          <Row>
            <Col md={6} className="p-2">
              <h2 className="display-4">One Magic Link</h2>
              <p className="big-text">Empower your social presence with FluentLinks.</p>
              {/* <Button variant="primary">Get Started</Button> */}
              <button className="btn btn-get-started"><Nav.Link href="/signup">Get Started</Nav.Link></button>
            </Col>
            <Col md={6} className="hero-image-parent">
              <Image
                src="/engage.jpeg"
                width="110%"
                height="110%"
                className="image"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <section className="bg-light">
      <Container className="py-5">
            <Row className="d-flex flex-column flex-md-row black-font">
            <h2 className="p-3 align-center black-font">Create, embed and share links the easy way</h2>
                <Col className="mb-4 mb-md-0">
                    <div className="p-3 align-center">
                      <Image
                        src="/create.png"
                        alt="create"
                        height="100"
                        className="pb-2"
                      />
                        <h5 className="black-font strong">Create</h5>
                        <p className="grey-font light-strong">
                          Create a single link that links to all your social media sites,
                           email, blog, website, email, contact card and music for artists.
                        </p>
                    </div>
                </Col>
                <Col className="mb-4 mb-md-0">
                    <div className="p-3 align-center">
                    <Image
                        src="/intergrate.png"
                        alt="Embed"
                        height="100"
                        className="pb-2"
                      />
                        <h5 className="black-font strong">Embed</h5>
                        <p className="grey-font light-strong">
                          Embed your link into your social media, contact card, website and or newsletters.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="p-3 align-center">
                    <Image
                        src="/share.png"
                        alt="Share"
                        height="100"
                        className="pb-2"
                      />
                        <h5 className="black-font strong">Share</h5>
                        <p className="grey-font light-strong">
                          Share your link on social media acount bios, youtube, website, email signature etc.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="black-font">Share all your links in one place</h2>
              <p className="light-strong grey-font">With FluentLinks, you can create a single short URL to bundle multiple links together, making it easier for your audience to access all your content.</p>
            </Col>
            <Col md={6} className="image-parent">
              <Image
                src="/share_social.jpg"
                width="100%"
                height=""
                className="image"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="image-parent">
              <Image
                src="/chart.jpg"
                width="100%"
                height=""
                className="image"
              />
            </Col>
            <Col md={6}>
              <h2 className="black-font">Get analytics of your links</h2>
              <p className="light-strong grey-font">
                Get detailed analytics of how your audience is engaging with your social links across different platforms.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="black-font">Engage with your audience</h2>
              <p className="light-strong grey-font">
                Use FluentLinks analytics to track clicks, views, and engagement metrics to understand your audience better.
              </p>
            </Col>
            <Col md={6} className="image-parent">
              <Image
                src="/social.jpeg"
                width="100%"
                height=""
                className="image"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-grey py-5">
        <Container>
          <Row className="m-3">
            <Col md={6}>
              {icons && icons.map((icon) => (
                <Image
                  src={`${icon}.png`}
                  height="80"
                  className="p-3" 
                />
              ))}
            </Col>
            <Col md={6}>
              <h1>Connect on platforms you love</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </div>
  );
};

export default LandingPage;