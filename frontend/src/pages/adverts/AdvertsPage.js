import React from "react";

import appStyles from "../../App.module.css";
import styles from "../../styles/AdvertsPage.module.css";
import NoResults from "../../assets/no-results.png";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useAdvertData, useSetAdvertData } from "../../contexts/AdvertsContext";
import Advert from "./Advert";
import Asset from "../../components/Asset";

function AdvertsPage ({ message }) {
    const advertData = useAdvertData(); 
    const setAdverts = useSetAdvertData(); 

    return (
        <Container className={`${appStyles.MainContent}`} fluid>
            <Row>
                <Col className={`${appStyles.Content} mr-auto mb-5`} md={3}>
                    left
                </Col>
                <Col className="ml-auto" md={8}>
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                        <Row>
                            {advertData.results.length ? (
                                advertData.results.map((advert) => (  
                                    <Col key={advert.id} className={styles.Card} xs={12} md={6} xl={4}>
                                        <Advert {...advert} setAdverts={setAdverts} /> 
                                    </Col>                       
                                ))
                            ) : (
                                <Container className={appStyles.Content}>
                                    <Asset src={NoResults} message={message} />
                                </Container>
                            )}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdvertsPage;