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
                <Row className="mb-3">
                    <Col lg={4}>
                        Name:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.name}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Email:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.email}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Phone No:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.phone}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Address:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.address}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Marital Status:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.marital_status}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        How old are you?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.age}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Do you have children?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.children}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Age of children?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.children_age}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Tell us about your daily life:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.daily_life}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Do you have other pets?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.other_pets}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Describe your house:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.describe_house}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Describe your garden:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.describe_garden}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Home Status:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.home_status}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}> 
                        Where will the dog live?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.where_dog_live}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Will the dog be left alone?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.dog_left_alone}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Have you ever owned a dog?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.previously_owned}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Why do you want a dog?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.why}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Preferred sex:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.sex}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        Preferred age:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.preferred_age}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        When do you want a dog?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.when}</strong>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={4}>
                        What types of activities do you plan to do with the dog?:
                    </Col>
                    <Col lg={8}>
                        <strong>{profile?.activities}</strong>
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