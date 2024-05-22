import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import SocialLinks from "./SocialLinks";

const MyLinksPage = () => {
    return (
        <>
        <div className="bg-light m-lg-3 grey-font my-links-page p-lg-5">
            <div className="links-navigation p-3">
            <Navbar bg="dark" expand="lg">
            <Container className="m-4">
            <Nav.Link href="#links">Links</Nav.Link>
            <Nav.Link href="#appearance">Appearance</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#analytics">Analytics</Nav.Link>
            </Container>
            </Navbar>  
            </div>
            <SocialLinks />
        </div>
        </>
    )
};

export default MyLinksPage;