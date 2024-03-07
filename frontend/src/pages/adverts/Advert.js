import React from 'react';

//import styles from "../../styles/Advert.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { MoreDropdown } from "../../components/MoreDropdown";

import { Card } from "react-bootstrap";
import { Media } from "react-bootstrap";

import { Link } from "react-router-dom";


const Advert = (props) => {
    const {
        id,
        owner,
        created_at,
        updated_at,
        dog_name,
        breed,
        age,
        quick_fact_1,
        quick_fact_2,
        quick_fact_3,
        quick_fact_4,
        quick_fact_5,
        content,
        image,        
        advertPage,
        setAdvert,
    } = props;

    const currentUser = useCurrentUser();
    const isAdmin = currentUser && currentUser.is_admin_user;

    return (
        <Card>
            <Card.Body>
                <Media className="align-items-center justify-content-between">                    
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {isAdmin && advertPage && (
                            // <MoreDropdown
                            //     handleEdit={() => {}}
                            //     handleDelete={() => {}}
                            // />
                            <div>Admin edit options</div>
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/adverts/${id}`}>
                <Card.Img src={image} alt={dog_name} />
            </Link>
            <Card.Body>
                
                {dog_name && <Card.Title className="text-center">{dog_name}</Card.Title>}
                {content && <Card.Text>{content}</Card.Text>}
                
                   
               
            </Card.Body>
        </Card>
    )
}

export default Advert;