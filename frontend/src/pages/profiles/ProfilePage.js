import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import Asset from "../../components/Asset";
import { useProfileData, useSetProfileData, } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage( props ) {
    const {imageSize=80} = props;
    const [hasLoaded, setHasLoaded] = useState(false);
    const {id} = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const history = useHistory();
    const currentUser = useCurrentUser();
    const isAdmin = currentUser && currentUser.is_admin_user;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{data: pageProfile}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`)
                ]);
                setProfileData(prevState => ({
                    ...prevState, 
                    pageProfile: {results: [pageProfile]}
                }));                
                setHasLoaded(true);
            } catch(err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>        
        <Row>
            <Col className={appStyles.Content}>
                <Row>
                    {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
                    <Col className={`${styles.Border} d-flex flex-row justify-content-center align-items-center py-5 mb-5`}>
                        <Avatar src={profile?.image} height={imageSize} />                       
                        <h3 className={appStyles.Red}>{profile?.owner}'s Profile</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Name:
                    </Col>
                    <Col>
                        {profile?.name}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Email:
                    </Col>
                    <Col>
                        {profile?.email}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Phone No:
                    </Col>
                    <Col>
                        {profile?.phone}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Address:
                    </Col>
                    <Col>
                        {profile?.address}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Marital Status:
                    </Col>
                    <Col>
                        {profile?.marital_status}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        How old are you?:
                    </Col>
                    <Col>
                        {profile?.age}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Do you have children?:
                    </Col>
                    <Col>
                        {profile?.children}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Age of children?:
                    </Col>
                    <Col>
                        {profile?.children_age}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Tell us about your daily life:
                    </Col>
                    <Col>
                        {profile?.daily_life}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Do you have other pets?:
                    </Col>
                    <Col>
                        {profile?.other_pets}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Describe your house:
                    </Col>
                    <Col>
                        {profile?.describe_house}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Describe your garden:
                    </Col>
                    <Col>
                        {profile?.describe_garden}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Home Status:
                    </Col>
                    <Col>
                        {profile?.home_status}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Where will the dog live?:
                    </Col>
                    <Col>
                        {profile?.where_dog_live}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Will the dog be left alone?:
                    </Col>
                    <Col>
                        {profile?.dog_left_alone}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Have you ever owned a dog?:
                    </Col>
                    <Col>
                        {profile?.previously_owned}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Why do you want a dog?:
                    </Col>
                    <Col>
                        {profile?.why}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Preferred sex:
                    </Col>
                    <Col>
                        {profile?.sex}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Preferred age:
                    </Col>
                    <Col>
                        {profile?.preferred_age}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        When do you want a dog?:
                    </Col>
                    <Col>
                        {profile?.when}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        What types of activities do you plan to do with the dog?:
                    </Col>
                    <Col>
                        {profile?.activities}
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    );

    return (
        <Row>
            <Col>                
                <Container className={`${appStyles.MainContent}`} fluid>
                    {hasLoaded ? (
                        profile?.is_owner || isAdmin ? (
                            <>
                                {mainProfile} 
                            </>  
                        ) : (
                            // !! ADD A NOT AUTHORISED MESSAGE HERE !!
                            history.push('/')
                        )
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>        
        </Row>
    );
}

export default ProfilePage;