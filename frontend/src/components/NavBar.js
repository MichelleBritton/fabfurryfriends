import React from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavBar = () => {
    const {expanded, setExpanded, ref} = useClickOutsideToggle()

    const createAdvertIcon = (
        <NavLink 
            exact
            className="ml-4"
            activeClassName={styles.Active}
            to="/adverts/create"
        >
            <i className="fas fa-square-plus"></i>Create Advert
        </NavLink>
    );

    const loggedInIcons = (
        <>
            <NavLink 
                exact
                className="ml-4"
                activeClassName={styles.Active}
                to=""
            >
                Profile
            </NavLink>

            <NavLink                 
                className="ml-4"
                onClick={() => {}}
            >
                <i className="fas fa-sign-in-alt"></i>Logout
            </NavLink>
        </>
    );

    const loggedOutIcons = (
        <>
            <NavLink 
                exact
                className="ml-4"
                activeClassName={styles.Active}
                to="/signup"
            >
                <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
            <NavLink 
                exact
                className="ml-4"
                activeClassName={styles.Active}
                to="/login"
            >
                <i className="fas fa-sign-in-alt"></i>Login
            </NavLink>
        </>
    );

        
    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
            <Container fluid>
                <NavLink to="/">
                    <Navbar.Brand className="pl-5">
                        <img src={logo} alt="logo" height="150" />
                    </Navbar.Brand>
                </NavLink>
                
                <Navbar.Toggle 
                    ref={ref}
                    onClick={() => setExpanded(!expanded)} 
                    aria-controls="basic-navbar-nav" 
                />
                <Navbar.Collapse id="basic-navbar-nav" className="pr-5">
                    <Nav className="ml-auto text-left">
                        <NavLink 
                            exact
                            activeClassName={styles.Active}
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        <NavLink 
                            exact
                            className="ml-md-4"
                            activeClassName={styles.Active}
                            to="/dogs"
                        >
                            <i className="fas fa-dog"></i>Our Dogs
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
