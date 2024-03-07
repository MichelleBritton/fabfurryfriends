import React from 'react';

//import styles from "../../styles/Advert.module.css";

import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const QuickFacts = (props) => {
    const {
        dog_name,
        breed,
        age,
        quick_fact_1,
        quick_fact_2,
        quick_fact_3,
        quick_fact_4,
        quick_fact_5,
    } = props;

    return (
        <Col className="ml-auto" md={3}>
            <Card>
                <Card.Body>  
                    {dog_name && <Card.Title>{dog_name}</Card.Title>}                      
                    {breed && <Card.Title>{breed}</Card.Title>}
                    {age && <Card.Title>{age}</Card.Title>}
                    {quick_fact_1 && <Card.Title>{quick_fact_1}</Card.Title>}
                    {quick_fact_2 && <Card.Title>{quick_fact_2}</Card.Title>}
                    {quick_fact_3 && <Card.Title>{quick_fact_3}</Card.Title>}
                    {quick_fact_4 && <Card.Title>{quick_fact_4}</Card.Title>}
                    {quick_fact_5 && <Card.Title>{quick_fact_5}</Card.Title>}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default QuickFacts;