import React from 'react';

import appStyles from "../App.module.css";
import styles from "../styles/QuickFacts.module.css";


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
        <Card className={appStyles.Content}>
            <Card.Body>  
                <Card.Title className={styles.CardTitle}>Quick Facts</Card.Title>                                      
                {dog_name && <Card.Text>Name: {dog_name}</Card.Text>}                      
                {breed && <Card.Text>Breed: {breed}</Card.Text>}
                {age && <Card.Text>Age: {age}</Card.Text>}
                {quick_fact_1 && <Card.Text>{quick_fact_1}</Card.Text>}
                {quick_fact_2 && <Card.Text>{quick_fact_2}</Card.Text>}
                {quick_fact_3 && <Card.Text>{quick_fact_3}</Card.Text>}
                {quick_fact_4 && <Card.Text>{quick_fact_4}</Card.Text>}
                {quick_fact_5 && <Card.Text>{quick_fact_5}</Card.Text>}    
            </Card.Body>
        </Card>
    );
}

export default QuickFacts;