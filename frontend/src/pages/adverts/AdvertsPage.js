import React, { useEffect, useState } from "react";

import appStyles from "../../App.module.css";
import styles from "../../styles/AdvertsPage.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { axiosReq } from "../../api/axiosDefaults";
import Advert from "./Advert";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";

function AdvertsPage ({ message }) {
    const [adverts, setAdverts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchAdverts = async () => {
            try {
                const { data } = await axiosReq.get("/adverts/");
                setAdverts((prevAdverts) => ({
                    ...prevAdverts,
                    results: data, 
                }));
                setHasLoaded(true);
            } catch (err) {
                //console.log(err);
            }
        };

        setHasLoaded(false);

        fetchAdverts();
    }, []);

    return (
        <Container className={`${appStyles.MainContent}`} fluid>
            <Row>
                <Col className={`${appStyles.Content} mr-auto`} md={3}>
                    left
                </Col>
                <Col className="ml-auto" md={8}>
                    {hasLoaded ? (
                        adverts.results.length ? (
                            adverts.results.map((advert) => (
                                <Advert key={advert.id} {...advert} setAdverts={setAdverts} />
                            ))
                        ) : (
                            <Container className={appStyles.Content}>
                                <Asset src={NoResults} message={message} />
                            </Container>
                        )
                    ) : 
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default AdvertsPage;