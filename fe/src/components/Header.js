import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/Actions';
import Logo from './reusables/Logo';

const Header = ({bgColor}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in (e.g., token exists in localStorage)
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
        // if(isLoggedIn === false) {
        //     navigate("/signin");
        // }
    });

  const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Token not found, user is not logged in
      setIsLoggedIn(false);
      return;
    }

    try {
      const decodedToken = parseJwt(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        // Token has expired, log out the user
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error checking token expiration:', error);
      // Handle error, e.g., log out the user
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    // const tokenCheckInterval = setInterval(checkTokenExpiration, 1000 * 60 * 60); // Check token expiration every hour

    // return () => {
    //   clearInterval(tokenCheckInterval);
    // };
  }, []);
  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  }
  return (
    <Navbar className="pt-3" expand="lg">
      <Container>
        {/* bg={bgColor} style={{ backgroundColor: "#282c34" }}*/}
        <Navbar.Brand href="#home"><Logo height="50" textSise="x-large" /></Navbar.Brand>
        {/* <Logo /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mylinks">My Links</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            {/* <button type='submit' onClick={logoutHandler}><Nav.Link href="#!">Logout</Nav.Link></button> */}
            <button className="btn plain-button" variant="primary" size="lg"><Nav.Link href="/signup">Log In</Nav.Link></button>
            <button className="btn btn-primary" variant="primary" size="lg"><Nav.Link href="/signup">Sign Up</Nav.Link></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;