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
import Profile from "../profiles/Profile";
import { useProfileData, useSetProfileData, } from "../../contexts/ProfileDataContext";
import Asset from "../../components/Asset";

function AdvertPage() {
    const { id } = useParams();
    const [advert, setAdvert] = useState({results: []});
    const [isLoading, setIsLoading] = useState(true); 
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch advert by ID
                const [{ data: advertData }] = await Promise.all([
                    axiosReq.get(`/adverts/${id}`),
                ]);
                setAdvert({ results: [advertData] });
    
                // Fetch adoptors by advert_id
                const [{ data: adoptorsData }] = await Promise.all([
                    axiosReq.get(`/adoptors/?advert_id=${id}`),
                ]);

                const usernames = adoptorsData.results.map(adoptor => adoptor.owner);
                console.log("usernames: ", usernames)
               
                
                // Update profile data state with adoptors associated with the current advert
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: adoptorsData.results,
                }));
                
                console.log("adoptors data: ", adoptorsData.results);
                
                setIsLoading(false);                 
            } catch (err) {
                //console.log(err)
            }
        };

        fetchData();
    }, [id, setProfileData]);
    
    
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
            <h2>Adoptors for this Advert:</h2>
            
            {isLoading ? (
                <Asset spinner />
            ) : (
                pageProfile && pageProfile.length ? (
                    pageProfile.map((profile) => (
                        <Profile key={profile.id} profile={profile} />
                    ))
                ) : (
                    <div>No adoptors found for this advert.</div>
                )
            )}
        </Container>                
    );
}

export default AdvertPage;