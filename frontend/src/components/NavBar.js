import React from "react";
import styles from "../styles/NavBar.module.css";

import logo from "../assets/logo.png";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavBar = () => {
    
    return (
        <Navbar className={styles.NavBar} fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="150" />
                </Navbar.Brand>
        
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
                        <Nav.Link><i className="fas fa-home"></i>Our Dogs</Nav.Link>
                        <Nav.Link><i className="fas fa-home"></i>Sign Up</Nav.Link>
                        <Nav.Link><i className="fas fa-home"></i>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
