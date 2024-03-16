import React, { useEffect, useState } from "react";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import Advert from "./Advert";
import BackButton from "../../components/BackButton";
import QuickFacts from "../../components/QuickFacts";

import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";


function AdvertPage() {
    const { id } = useParams();

    const [advert, setAdvert] = useState({results: []});

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: advert}] = await Promise.all([
                    axiosReq.get(`/adverts/${id}`),
                ]);
                setAdvert({results: [advert]});
            } catch(err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Container className={appStyles.MainContent} fluid>
            <Row>
                <Col className="mr-auto" md={3}>
                    <BackButton />
                    <QuickFacts {...advert.results[0]} setAdvert={setAdvert} advertPage />
                </Col>
                <Col className="ml-auto" md={8}>
                    <Advert {...advert.results[0]} setAdvert={setAdvert} advertPage /> 
                </Col>
            </Row>
            <Row>
                <Col>
                
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Bright}`}
                        onClick={() => {}}
                    >
                        I would like to adopt {advert.results[0].dog_name}
                    </Button>
               
                </Col>
            </Row>
        </Container>                     
    );
}

export default AdvertPage;