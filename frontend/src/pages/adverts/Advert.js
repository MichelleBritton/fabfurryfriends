import React from 'react';

import styles from "../../styles/Advert.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Media } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";


const Advert = (props) => {
    const {
        id,
        // owner,
        updated_at,
        dog_name,
        // breed,
        // age,
        // quick_fact_1,
        // quick_fact_2,
        // quick_fact_3,
        // quick_fact_4,
        // quick_fact_5,
        content,
        image,        
        advertPage,
        setAdvert,
    } = props;

    const currentUser = useCurrentUser();
    const isAdmin = currentUser && currentUser.is_admin_user;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/adverts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
          await axiosRes.delete(`/adverts/${id}/`);
          history.goBack();
        } catch (err) {
        //   console.log(err);
        }
    };

    return (
        <Row>
            <Col className="ml-auto" md={8}>
                <Card className={styles.Advert}>
                    <Card.Img src={image} alt={dog_name} />
                    <Card.Body className={styles.CardBody}>
                        <Media className="d-flex align-items-center justify-content-between">   
                            <span>Updated: {updated_at}</span>
                            {isAdmin && advertPage && (
                                <MoreDropdown
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            )}
                        </Media>
                    </Card.Body>
                    <Link to={`/adverts/${id}`}>
                        {dog_name && <Card.Title className="text-left">{dog_name}</Card.Title>}
                    </Link>
                    <Card.Body className={styles.CardBody}>
                        {content && <Card.Text>{content}</Card.Text>}
                        
                        {/* {breed && <Card.Title className="text-center">{breed}</Card.Title>}
                        {age && <Card.Title className="text-center">{age}</Card.Title>}
                        {quick_fact_1 && <Card.Title className="text-center">{quick_fact_1}</Card.Title>}
                        {quick_fact_2 && <Card.Title className="text-center">{quick_fact_2}</Card.Title>}
                        {quick_fact_3 && <Card.Title className="text-center">{quick_fact_3}</Card.Title>}
                        {quick_fact_4 && <Card.Title className="text-center">{quick_fact_4}</Card.Title>}
                        {quick_fact_5 && <Card.Title className="text-center">{quick_fact_5}</Card.Title>} */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Advert;