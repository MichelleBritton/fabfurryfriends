import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";
import { toast } from "react-toastify";

const SignUpForm = () => {
    useRedirect('loggedIn');

    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    })

    const { username, password1, password2 } = signUpData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData)
            history.push('/login');
            toast.success("Sign up successful. You can login now");
        } catch(err) {   
            toast.error("Error signing up. Please try again");     
            setErrors(err.response?.data)
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto mx-auto" md={6}>
                <Container className={`${appStyles.Content}`}>
                    <h1 className={styles.Header}>sign up</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">username</Form.Label>
                            <Form.Control 
                                className={styles.Input} 
                                type="text" 
                                placeholder="username" 
                                name="username" 
                                value={username} 
                                onChange={handleChange}
                            />
                        </Form.Group>           
                        {errors.username?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}

                        <Form.Group controlId="Password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                            className={styles.Input} 
                            type="password" 
                            placeholder="Password" 
                            name="password1" 
                            value={password1} 
                            onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}

                        <Form.Group controlId="Password2">
                            <Form.Label className="d-none">Confirm Password</Form.Label>
                            <Form.Control 
                            className={styles.Input} 
                            type="password" 
                            placeholder="Confirm password" 
                            name="password2"
                            value={password2} 
                            onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        )}
            
                        <Button 
                            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} 
                            type="submit"
                        >
                            Sign up 
                        </Button>
                    </Form>         
                    {errors.non_field_errors?.map((message, idx) =>
                        <Alert variant="warning" key={idx} className="mt-3">{message}</Alert>
                    )}
                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/login">
                        Already have an account? <span>Login</span>
                    </Link>
                </Container>
            </Col>
        </Row>
    );
};

export default SignUpForm;