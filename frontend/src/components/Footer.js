import React from 'react';
import styles from "../styles/Footer.module.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

// Footer component to display company information and contact details
const Footer = () => {
    return (
        <Container className={`${styles.Footer} px-5 pt-5 pb-4`} fluid>
            <Row>
                <Col className="pl-5" lg={8}>
                    <p>Fab Furry Friends. The Avenue, Long Ashton, Bristol, BS9 7JT</p>
                    <p>Registered in England No: 304495</p>
                </Col> 
                <Col className="pl-5 pl-lg-0 pr-lg-5 text-lg-right" lg={4}>
                    <p>Tel: 01179 307 4598</p>
                    <p>Email: <a href="mailto:info@fff.co.uk">info@fff.co.uk</a></p>                  
                </Col>    
            </Row>
        </Container>
    );
}

export default Footer;