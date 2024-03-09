import React from 'react';

import appStyles from "../../App.module.css";
import styles from "../../styles/AdvertsPage.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AdvertsPage = () => {

    return (
        <Container className={`${appStyles.MainContent}`} fluid>
            <Row>
                <Col className={`${appStyles.Content} mr-auto`} md={3}>
                    left
                </Col>
                <Col className="ml-auto" md={8}>
                    right
                </Col>
            </Row>
        </Container>     
    );
}

export default AdvertsPage;