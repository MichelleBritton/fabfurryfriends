import React from 'react';
import btnStyles from "../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

// Back button component to go back to previous page
const BackButton = () => {
    const history = useHistory()
  
    return (
        <Button
            className={`${btnStyles.Button} ${btnStyles.Bright} ${btnStyles.Wide} mb-5`}
            onClick={() => history.goBack()}
        >
            Go back
        </Button>
    );
}

export default BackButton;