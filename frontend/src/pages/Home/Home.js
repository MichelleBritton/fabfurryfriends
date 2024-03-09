import React from 'react';

import styles from "../../styles/Home.module.css";
import mainImg from "../../assets/main-image.webp";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="p-0">
        <Row>
            <Col className="p-0" xs={12}>
                <img src={mainImg} alt="Boxer Dog" className={styles.Image} />
            </Col>
        </Row>
    </Container>
  );
}

export default Home;