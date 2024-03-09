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
            <Col className={`${styles.ImgContainer} p-0 position-relative`} xs={12}>
                <img src={mainImg} alt="Boxer Dog" className={styles.Image} />
                <div className={`${styles.Panel} position-absolute p-5`}>
                    <h1 className='display-3 mb-5'>Fab Furry Friends Dog Rescue</h1>
                    <p>
                        Every year, we take in over 300 dogs for a variety of reasons.
                        Our qualified & experienced team will help you find your new 
                        best friend & a great match for your home, family & lifestyle.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;