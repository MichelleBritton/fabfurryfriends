import React, { useRef, useState } from "react";

import { useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Image } from "react-bootstrap";

import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

import styles from "../../styles/AdvertCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function AdvertCreateForm() {
    useRedirect("loggedOut");

    const [errors, setErrors] = useState({});

    const [advertData, setAdvertData] = useState({
        dog_name: "",
        breed: "",
        age: "",
        quick_fact_1: "",
        quick_fact_2: "",
        quick_fact_3: "",
        quick_fact_4: "",
        quick_fact_5: "",
        content: "",
        image: "",
    });
    const {
        dog_name, breed, age, quick_fact_1, quick_fact_2, 
        quick_fact_3, quick_fact_4, quick_fact_5, content, image 
    } = advertData;

    const imageInput = useRef(null);

    const history = useHistory()

    const handleChange = (event) => {
        setAdvertData({
          ...advertData,
          [event.target.name]: event.target.value,
        });
    };
    
    const handleChangeImage = (event) => {
        if (event.target.files.length){            
            URL.revokeObjectURL(image);
            setAdvertData({
                ...advertData,
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append('dog_name', dog_name);
        formData.append('breed', breed);
        formData.append('age', age);
        formData.append('quick_fact_1', quick_fact_1);
        formData.append('quick_fact_2', quick_fact_2);
        formData.append('quick_fact_3', quick_fact_3);
        formData.append('quick_fact_4', quick_fact_4);
        formData.append('quick_fact_5', quick_fact_5);
        formData.append('content', content);
        formData.append('image', imageInput.current.files[0]);
    
        try {
            const {data} = await axiosReq.post('/adverts/', formData);
            history.push(`/adverts/${data.id}`);
        } catch(err){
            // console.log(err)
            if (err.response?.status !== 401){
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group controlId="dog_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="dog_name"
                    value={dog_name}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.dog_name?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="breed">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                    type="text"
                    name="breed"
                    value={breed}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.breed?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="text"
                    name="age"
                    value={age}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.age?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="quick_fact_1">
                <Form.Label>Quick Fact 1</Form.Label>
                <Form.Control
                    type="text"
                    name="quick_fact_1"
                    value={quick_fact_1}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.quick_fact_1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="quick_fact_2">
                <Form.Label>Quick Fact 2</Form.Label>
                <Form.Control
                    type="text"
                    name="quick_fact_2"
                    value={quick_fact_2}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.quick_fact_2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="quick_fact_3">
                <Form.Label>Quick Fact 3</Form.Label>
                <Form.Control
                    type="text"
                    name="quick_fact_3"
                    value={quick_fact_3}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.quick_fact_3?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="quick_fact_4">
                <Form.Label>Quick Fact 4</Form.Label>
                <Form.Control
                    type="text"
                    name="quick_fact_4"
                    value={quick_fact_4}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.quick_fact_4?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="quick_fact_5">
                <Form.Label>Quick Fact 5</Form.Label>
                <Form.Control
                    type="text"
                    name="quick_fact_5"
                    value={quick_fact_5}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.quick_fact_5?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}

            <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.content?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}
    
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
        >
            cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            create
        </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label className={`${btnStyles.Button} ${btnStyles.Blue} btn`} htmlFor="image-upload" >
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label className="d-flex justify-content-center" htmlFor="image-upload">
                                    <Asset src={Upload} message="Click or tap to upload an image" />
                                </Form.Label>
                            )}
                           
                            <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} ref={imageInput} />
                            {errors.image?.map((message, idx) => (
                                <Alert key={idx} variant="warning">
                                    {message}
                                </Alert>
                            ))}
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default AdvertCreateForm;