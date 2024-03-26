import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Advert from "./Advert";
import BackButton from "../../components/BackButton";
import QuickFacts from "../../components/QuickFacts";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../profiles/Profile";
import { useProfileData, useSetProfileData, } from "../../contexts/ProfileDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

function AdvertPage() {
    const [adoptorProfile, setAdoptorProfile] = useState({results: []});
    const { id } = useParams();
    const [advert, setAdvert] = useState({results: []});
    const [isLoading, setIsLoading] = useState(true); 
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const currentUser = useCurrentUser();
    const isAdmin = currentUser && currentUser.is_admin_user;
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch advert by ID
                const [{ data: advertData }] = await Promise.all([
                    axiosReq.get(`/adverts/${id}`),
                ]);
                setAdvert({ results: [advertData] });
    
                // Fetch adoptors by advert_id, and profiles
                const [
                    { data: adoptorsData }, 
                    { data: profiles }
                ] = await Promise.all([
                    axiosReq.get(`/adoptors/?advert_id=${id}`),
                    axiosReq.get('/profiles/'),   
                ]);

                // Map over adoptorsData and find the corresponding profiles
                const linkedAdoptorsData = adoptorsData.results.map(adoptor => {
                    const profile = profiles.results.find(
                        profile => profile.owner === adoptor.owner
                    );
                    return { ...profile, profile: profile };
                });
                
                // Update adoptor profile state with corresponding profiles
                setAdoptorProfile(linkedAdoptorsData);

                // Update profile state with adoptors' profiles
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: adoptorProfile,
                }));
               
                setIsLoading(false);                 
            } catch (err) {
                //console.log(err)
            }
        };

        fetchData();
    }, [id, setProfileData,setAdoptorProfile]);  
    
    return (
        <Container className={appStyles.MainContent} fluid>
            <Row>
                <Col className="mr-auto" md={3}>
                    <BackButton />
                    <QuickFacts 
                        {...advert.results[0]} 
                        setAdvert={setAdvert} 
                        advertPage 
                    />

                    {isAdmin && (
                        <div className={`${appStyles.Content} my-5`}>
                            <h2 className={appStyles.Red}>Adopton requests</h2>            
                            {isLoading ? (
                                <Asset spinner />
                            ) : (
                                adoptorProfile && adoptorProfile.length ? (
                                    adoptorProfile.map((profile) => (
                                        <Profile 
                                            key={profile.id} 
                                            profile={profile} 
                                        />
                                    ))
                                ) : (
                                    <div>No adoptors found for this advert.</div>
                                )
                            )}
                        </div>            
                    )}
                </Col>
                <Col className="ml-auto" md={8}>
                    <Advert 
                        {...advert.results[0]} 
                        setAdvert={setAdvert} 
                        advertPage 
                    /> 
                </Col>
            </Row>
        </Container>                
    );
}

export default AdvertPage;