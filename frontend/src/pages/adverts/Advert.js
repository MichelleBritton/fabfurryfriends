import React from 'react';

import appStyles from "../../App.module.css";
import styles from "../../styles/Advert.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

import { Card } from "react-bootstrap";
import { Media } from "react-bootstrap";

import { Link, useHistory, useLocation } from "react-router-dom";


const Advert = (props) => {
    const {
        id,
        updated_at,
        dog_name,
        content,
        image,        
        advertPage,
        // setAdvert,
    } = props;

    const currentUser = useCurrentUser();
    const isAdmin = currentUser && currentUser.is_admin_user;
    const history = useHistory();
    const location = useLocation();

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
        <Card className={appStyles.Content}>
            <Card.Img src={image} alt={dog_name} className={appStyles.ImageRounded} />
            {location.pathname === `/adverts/${id}` ? (
                <>
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
                    {dog_name && <Card.Title className="text-left">{dog_name}</Card.Title>}               
                    <Card.Body className={styles.CardBody}>
                        {content && <Card.Text>{content}</Card.Text>}
                    </Card.Body>
                </>            
            ) : (
                <>
                    <Card.Body className={styles.CardBody}>
                        <Media className="d-flex align-items-center justify-content-between">                           
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
                </>
            )}
        </Card>
    );
}

export default Advert;