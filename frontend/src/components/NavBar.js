import React from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { 
    useCurrentUser, useSetCurrentUser 
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { removeTokenTimestamp } from "../utils/utils";
import { toast } from "react-toastify";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const {expanded, setExpanded, ref} = useClickOutsideToggle();
    const isAdmin = currentUser && currentUser.is_admin_user;

    // Handle log out funcionality
    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
          removeTokenTimestamp();
          toast.success(
            "Logged out successfully"
        );
        } catch (err) {
          // console.log(err);
        }
      };

    // Create Advert Icon variable to display when admin user
    // is logged in
    const createAdvertIcon = (
        <NavLink 
            exact
            className="ml-lg-2 ml-xl-4"
            activeClassName={`${styles.Active} clearfix`}
            to="/adverts/create"
        >
            <i className="fas fa-square-plus"></i>Create Advert
        </NavLink>
    );

    // Logged in icons variable to display when users are logged in
    const loggedInIcons = (
        <>
            <NavLink 
                exact
                className="ml-lg-2 ml-xl-4"
                activeClassName={styles.Active}
                to={`/profiles/${currentUser?.profile_id}`}
            >
                <Avatar 
                    src={currentUser?.profile_image} 
                    text="Profile" 
                    height={40} 
                />
            </NavLink>

            <NavLink      
                className={`${styles.NavLink} ml-lg-2 ml-xl-4`} 
                to="/" 
                onClick={handleSignOut}
            >
                <i className="fas fa-sign-in-alt"></i>Logout
            </NavLink>
        </>
    );

    // Logged out icons variable to display when users are logged out
    const loggedOutIcons = (
        <>
            <NavLink 
                exact
                className="ml-lg-2 ml-xl-4"
                activeClassName={styles.Active}
                to="/signup"
            >
                <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
            <NavLink 
                exact
                className="ml-lg-2 ml-xl-4"
                activeClassName={styles.Active}
                to="/login"
            >
                <i className="fas fa-sign-in-alt"></i>Login
            </NavLink>
        </>
    );
        
    return (
        <Navbar 
            expanded={expanded} 
            className={styles.NavBar} 
            expand="lg" 
            fixed="top"
        >
            <Container fluid>
                <NavLink to="/">
                    <Navbar.Brand className="pl-5">
                        <img src={logo} alt="Fab Furry Friends Logo" height="150" />
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
                            className="ml-lg-2 ml-xl-4"
                            activeClassName={styles.Active}
                            to="/adverts"
                        >
                            <i className="fas fa-dog"></i>Our Dogs
                        </NavLink>
                        {isAdmin ? createAdvertIcon : null}
                        {currentUser ? loggedInIcons : loggedOutIcons}                        
                    </Nav>                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
