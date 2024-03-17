import React, { useEffect, useRef, useState } from "react";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
// import { toast } from "react-toastify";

function AdvertEditForm() {
    const currentUser = useCurrentUser();
    const isAdmin = currentUser?.is_admin_user;
    const [errors, setErrors] = useState({});
    const [advertData, setAdvertData] = useState({
        dog_name: "",
        breed: "",
        age: "",
        sex: "",
        quick_fact_1: "",
        quick_fact_2: "",
        quick_fact_3: "",
        quick_fact_4: "",
        quick_fact_5: "",        
        content: "",
        image: "",
    });
    const { 
        dog_name, breed, age, sex, quick_fact_1, quick_fact_2, 
        quick_fact_3, quick_fact_4, quick_fact_5, content, image
    } = advertData;
    const imageInput = useRef(null);
    const history = useHistory();
    const {id} = useParams();

    // GET request to retrieve adverts by id
    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/adverts/${id}/`);
                const {
                    dog_name, breed, age, sex, quick_fact_1, quick_fact_2, 
                    quick_fact_3, quick_fact_4, quick_fact_5, content, image
                } = data;

                // Check if user is an admin user and set advert data otherwise redirect to home page
                isAdmin ? setAdvertData({dog_name, breed, age, sex, quick_fact_1, quick_fact_2, 
                    quick_fact_3, quick_fact_4, quick_fact_5, content, image}) : history.push('/');
            } catch(err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [history, id, isAdmin]);

    // Handle form change
    const handleChange = (event) => {
        setAdvertData({
        ...advertData,
        [event.target.name]: event.target.value,
        });
    };

    // Handle image change
    const handleChangeImage = (event) => {
        if (event.target.files.length){
            URL.revokeObjectURL(image);            
            setAdvertData({
                ...advertData,
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('dog_name', dog_name);
        formData.append('breed', breed);
        formData.append('age', age);
        formData.append('sex', sex);
        formData.append('quick_fact_1', quick_fact_1);
        formData.append('quick_fact_2', quick_fact_2);
        formData.append('quick_fact_3', quick_fact_3);
        formData.append('quick_fact_4', quick_fact_4);
        formData.append('quick_fact_5', quick_fact_5);
        formData.append('content', content);
        
        if (imageInput?.current?.files[0]){
            formData.append('image', imageInput.current.files[0]);
        }
                
        try {
            // PUT request to update advert
            await axiosReq.put(`/adverts/${id}/`, formData);
            history.push(`/adverts/${id}`);
            // toast.success("Edit advert successful!");
        } catch(err){
            // console.log(err);       
            // toast.error("Error editing advert. Please try again.");     
            if (err.response?.status !== 401){
                setErrors(err.response?.data);
            }
        }
    };

    // Form input fields
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

            <Form.Group controlId="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Control
                    type="text"
                    name="sex"
                    value={sex}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.sex?.map((message, idx) => (
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
                save
            </Button>
        </div>
    );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">   
                <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                    <Form.Label className={`${btnStyles.Button} ${btnStyles.Blue} btn`} htmlFor="image-upload" >
                        Change the image
                    </Form.Label>
                </div>                                                
                
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

export default AdvertEditForm;