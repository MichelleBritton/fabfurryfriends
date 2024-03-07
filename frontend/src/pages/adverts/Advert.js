import React from 'react';

import styles from "../../styles/Advert.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Media } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";


const Advert = (props) => {
    const {
        id,
        updated_at,
        dog_name,
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
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Advert;