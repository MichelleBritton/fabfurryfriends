import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Advert from "./Advert";
import BackButton from "../../components/BackButton";
import QuickFacts from "../../components/QuickFacts";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import Profile from "../profiles/Profile";

function AdvertPage() {
    const { id } = useParams();
    const [advert, setAdvert] = useState({results: []});
    const [adoptors, setAdoptors] = useState({results: []});
        
    // GET request to retrieve advert by id
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

    // GET request to retrieve adoptors
    useEffect(() => {
        const fetchAdoptors = async () => {
            try {
                const [{data: adoptors}] = await Promise.all([
                    axiosReq.get(`/adoptors/?advert_id=${id}`),
                ]);            
                setAdoptors({ results: adoptors.results });    
            } catch (err) {
                // Handle error
            }
        };
    
        fetchAdoptors();         
    }, [id]);
    console.log(adoptors.results); 

    

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
            {/* <h2>Adoptors for this Advert:</h2>
            {adoptorsWithMatchingAdvertId.map((adoptor, index) => (
                <Profile key={index} adoptor={adoptor} />
            ))} */}
        </Container>                
    );
}

export default AdvertPage;