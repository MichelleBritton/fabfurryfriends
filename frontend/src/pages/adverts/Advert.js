import React from 'react';
import appStyles from "../../App.module.css";
import styles from "../../styles/Advert.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import { Card } from "react-bootstrap";
import { Media } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Advert = (props) => {
    const {
        id,
        updated_at,
        dog_name,
        content,
        image,        
        advertPage,
    } = props;
    
    const currentUser = useCurrentUser();
    const isAdmin = currentUser && currentUser.is_admin_user;
    const history = useHistory();
    const location = useLocation();
    const advert_id = id;

    // Direct to edit advert page
    const handleEdit = () => {
        history.push(`/adverts/${id}/edit`);
    };

    // Handle advert deletion
    const handleDelete = async () => {
        try {
          await axiosRes.delete(`/adverts/${id}/`);
          history.goBack();
          toast.success("Advert deleted!");
        } catch (err) {
            toast.error("Deletion unsuccessful. Please try again.");
            // console.log(err);
        }
    };

    // Handle adoption request
    const handleAdopt = async ( advert_id, currentUser ) => {
        try {
            const adopt = {
                advert: advert_id,
                owner: currentUser.username
            };
            await axiosRes.post('/adoptors/', adopt);         
            toast.success("Congratulations, your request to adopt has been received");   
        } catch (err) {
            toast.error("Error submitting request. You may have already submitted a request");
            console.log(err);
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
                    {dog_name && <Card.Title className={`${appStyles.Teal} ${styles.CardTitle} text-left`}>{dog_name}</Card.Title>}               
                    <Card.Body className={styles.CardBody}>
                        {content && <Card.Text>{content}</Card.Text>}
                        {currentUser && (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                                onClick={() => handleAdopt(advert_id, currentUser)}
                            >                        
                                {dog_name && `I would like to adopt ${dog_name}`}
                            </Button>   
                        )}
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
                        {dog_name && <Card.Title className="text-center">{dog_name}</Card.Title>}
                    </Link>
                </>
            )}
        </Card>
    );
}

export default Advert;