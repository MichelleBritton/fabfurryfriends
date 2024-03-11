import React, { useState, useEffect } from 'react';

import appStyles from "../../App.module.css";
import styles from "../../styles/Home.module.css";
import mainImg from "../../assets/main-image.webp";
import NoResults from "../../assets/no-results.png";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useAdvertData, useSetAdvertData } from "../../contexts/AdvertsContext";
import Advert from "../adverts/Advert";
import Asset from "../../components/Asset";

function Home ({ message }) {
    const advertData = useAdvertData(); 
    const setAdverts = useSetAdvertData(); 

    /**
     * Shuffle the adverts array
     * Code Credit: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     * Fisher-Yates shuffle algorithm
     */
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    const [randomAdverts, setRandomAdverts] = useState([]);

    useEffect(() => {
        const shuffledAdverts = shuffle(advertData.results);
        const selectAdverts = shuffledAdverts.slice(0, 4);
        setRandomAdverts(selectAdverts);
    }, [advertData.results]); 

    return (
        <Container fluid className="p-0">
            <Row>
                <Col className={`${styles.ImgContainer} p-0 position-relative`} xs={12}>
                    <img src={mainImg} alt="Boxer Dog" className={styles.Image} />
                    <div className={`${styles.Panel} position-absolute p-2 p-lg-5`}>
                        <h1 className="mb-2 lg-mb-5">Fab Furry Friends Dog Rescue</h1>
                        <p>
                            Every year, we take in over 300 dogs for a variety of reasons.
                            Our qualified & experienced team will help you find your new 
                            best friend & a great match for your home, family & lifestyle.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="text-center py-5">
                    <h2 className={`${appStyles.Red} mb-5`}>We are looking for homes...</h2>
                    
                        <Row className="d-flex flex-row flex-wrap justify-content-betwee px-5">
                            {randomAdverts.length ? (
                                randomAdverts.map((advert) => (  
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

                    <Link to={"/adverts/"}>
                        View all
                    </Link>
                </Col>            
            </Row>
        </Container>
    );
}

export default Home;