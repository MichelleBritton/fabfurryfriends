import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { 
    useCurrentUser, useSetCurrentUser, 
} from "../../contexts/CurrentUserContext";
import { toast } from "react-toastify";

const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();
    const [maritalStatusOptions, setMaritalStatusOptions] = useState([]);
    const [childrenOptions, setChildrenOptions] = useState([]);
    const [homeStatusOptions, setHomeStatusOptions] = useState([]);
    const [prevOwnedOptions, setPrevOwnedOptions] = useState([]);
    const [prefSexOptions, setPrefSexOptions] = useState([]);
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        marital_status: "",
        age: "",
        children: "",
        children_age: "",
        daily_life: "",
        other_pets: "",
        describe_house: "",
        describe_garden: "",
        home_status: "",
        where_dog_live: "",
        dog_left_alone: "",
        previously_owned: "",
        why: "",
        sex: "",
        preferred_age: "",
        when: "",
        activities: "",
        image: "",
    });
    const { 
        name, email, phone, address, marital_status,
        age, children, children_age, daily_life,
        other_pets, describe_house, describe_garden,
        home_status, where_dog_live, dog_left_alone,
        previously_owned, why, sex, preferred_age,
        when, activities, image
    } = profileData;
    const [errors, setErrors] = useState({});

    // GET request for marital status choices endpoint to populate select field
    useEffect(() => {
        let isMounted = true; 
        const fetchMaritalStatusOptions = async () => {
            try {
                const response = await axiosReq.get('/choices/marital_status_choices'); 
                if (isMounted) setMaritalStatusOptions(response.data);
            } catch (err) {
                //console.log(err);
            }
        };
        
        fetchMaritalStatusOptions();
        return () => { isMounted = false };
    }, []);

    // GET request for closed choices endpoint to populate select field
    useEffect(() => {
        let isMounted = true; 
        const fetchClosedOptions = async () => {
            try {
                const response = await axiosReq.get('/choices/closed_choices'); 
                if (isMounted) setChildrenOptions(response.data);
                if (isMounted) setPrevOwnedOptions(response.data);
            } catch (err) {
                //console.log(err);
            }
        };
        
        fetchClosedOptions();
        return () => { isMounted = false };
    }, []);

    // GET request for home status choices endpoint to populate select field
    useEffect(() => {
        let isMounted = true; 
        const fetchHomeStatusOptions = async () => {
            try {
                const response = await axiosReq.get('/choices/home_status_choices'); 
                if (isMounted) setHomeStatusOptions(response.data);
            } catch (err) {
                //console.log(err);
            }
        };
        
        fetchHomeStatusOptions();
        return () => { isMounted = false };
    }, []);

    // GET request for preferred sex choices endpoint to populate select field
    useEffect(() => {
        let isMounted = true; 
        const fetchPrefSexOptions = async () => {
            try {
                const response = await axiosReq.get('/choices/preferred_sex_choices'); 
                if (isMounted) setPrefSexOptions(response.data);
            } catch (err) {
                //console.log(err);
            }
        };
        
        fetchPrefSexOptions();
        return () => { isMounted = false };
    }, []);
    
    // GET request to retrieve profile by id
    useEffect(() => {
        let isMounted = true;  
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const { 
                        name, email, phone, address, marital_status,
                        age, children, children_age, daily_life,
                        other_pets, describe_house, describe_garden,
                        home_status, where_dog_live, dog_left_alone,
                        previously_owned, why, sex, preferred_age,
                        when, activities, image 
                    } = data;
                    if (isMounted) setProfileData({ name, email, phone, address, 
                        marital_status, age, children, children_age, daily_life,
                        other_pets, describe_house, describe_garden, home_status, 
                        where_dog_live, dog_left_alone, previously_owned, why, 
                        sex, preferred_age, when, activities, image });
                } catch (err) {
                    // console.log(err);                    
                    history.push("/");
                }
            } else {
                toast.error(
                    "You are not authorised to view this page"
                )
                history.push("/");
            }
        };

        handleMount();
        return () => { isMounted = false };
    }, [currentUser, history, id]);

    // Handle form changes
    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("marital_status", marital_status);
        formData.append("age", age);
        formData.append("children", children);
        formData.append("children_age", children_age);
        formData.append("daily_life", daily_life);
        formData.append("other_pets", other_pets);
        formData.append("describe_house", describe_house);
        formData.append("describe_garden", describe_garden);
        formData.append("home_status", home_status);
        formData.append("where_dog_live", where_dog_live);
        formData.append("dog_left_alone", dog_left_alone);
        formData.append("previously_owned", previously_owned);
        formData.append("why", why);
        formData.append("sex", sex);
        formData.append("preferred_age", preferred_age);
        formData.append("when", when);
        formData.append("activities", activities);

        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current?.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));            
            history.goBack();
            toast.success("Profile edited successfully!");
        } catch (err) {
            toast.error("Error submitting changes. Please try again.");
            // console.log(err);
            setErrors(err.response?.data);
        }
    };
       
    // Form input fields
    const textFields = (
        <>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
            />
        </Form.Group>
        {errors?.name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
            />
        </Form.Group>
        {errors?.email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
                type="text"
                value={phone}
                onChange={handleChange}
                name="phone"
            />
        </Form.Group>
        {errors?.phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
                as="textarea"
                value={address}
                onChange={handleChange}
                name="address"
                rows={7}
            />
        </Form.Group>
        {errors?.address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Marital Status</Form.Label>
                <Form.Control
                    as="select"
                    value={marital_status}
                    onChange={handleChange}
                    name="marital_status"
                >
                    {maritalStatusOptions.map(option => (
                        <option key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
        {errors?.marital_status?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>How old are you?</Form.Label>
            <Form.Control
                type="text"
                value={age}
                onChange={handleChange}
                name="age"
            />
        </Form.Group>
        {errors?.age?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Do you have chldren?</Form.Label>
                <Form.Control
                    as="select"
                    value={children}
                    onChange={handleChange}
                    name="children"
                >
                    {childrenOptions.map(option => (
                        <option key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
        {errors?.children?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Age of children?</Form.Label>
            <Form.Control
                type="text"
                value={children_age}
                onChange={handleChange}
                name="children_age"
            />
        </Form.Group>
        {errors?.children_age?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Tell us about your daily life</Form.Label>
            <Form.Control
                as="textarea"
                value={daily_life}
                onChange={handleChange}
                name="daily_life"
                rows={7}
            />
        </Form.Group>
        {errors?.daily_life?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Do you have other pets?</Form.Label>
            <Form.Control
                as="textarea"
                value={other_pets}
                onChange={handleChange}
                name="other_pets"
                rows={7}
            />
        </Form.Group>
        {errors?.other_pets?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Describe your house</Form.Label>
            <Form.Control
                as="textarea"
                value={describe_house}
                onChange={handleChange}
                name="describe_house"
                rows={7}
            />
        </Form.Group>
        {errors?.describe_house?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}   

        <Form.Group>
            <Form.Label>Describe your garden</Form.Label>
            <Form.Control
                as="textarea"
                value={describe_garden}
                onChange={handleChange}
                name="describe_garden"
                rows={7}
            />
        </Form.Group>
        {errors?.describe_garden?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}   

        <Form.Group>
            <Form.Label>Home Status</Form.Label>
                <Form.Control
                    as="select"
                    value={home_status}
                    onChange={handleChange}
                    name="home_status"
                >
                    {homeStatusOptions.map(option => (
                        <option key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
        {errors?.home_status?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))} 

        <Form.Group>
            <Form.Label>Where will the dog live?</Form.Label>
            <Form.Control
                as="textarea"
                value={where_dog_live}
                onChange={handleChange}
                name="where_dog_live"
                rows={7}
            />
        </Form.Group>
        {errors?.where_dog_live?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}     

        <Form.Group>
            <Form.Label>Will the dog be left alone?</Form.Label>
            <Form.Control
                as="textarea"
                value={dog_left_alone}
                onChange={handleChange}
                name="dog_left_alone"
                rows={7}
            />
        </Form.Group>
        {errors?.dog_left_alone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}   

        <Form.Group>
            <Form.Label>Have you ever owned a dog?</Form.Label>
                <Form.Control
                    as="select"
                    value={previously_owned}
                    onChange={handleChange}
                    name="previously_owned"
                >
                    {prevOwnedOptions.map(option => (
                        <option key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
        {errors?.previously_owned?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))} 

        <Form.Group>
            <Form.Label>Why do you want a dog?</Form.Label>
            <Form.Control
                as="textarea"
                value={why}
                onChange={handleChange}
                name="why"
                rows={7}
            />
        </Form.Group>
        {errors?.why?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}   

        <Form.Group>
            <Form.Label>Preferred sex</Form.Label>
                <Form.Control
                    as="select"
                    value={sex}
                    onChange={handleChange}
                    name="sex"
                >
                    {prefSexOptions.map(option => (
                        <option key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
        {errors?.sex?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Preferred age</Form.Label>
            <Form.Control
                type="text"
                value={preferred_age}
                onChange={handleChange}
                name="preferred_age"
            />
        </Form.Group>
        {errors?.preferred_age?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}   

        <Form.Group>
            <Form.Label>When do you want a dog?</Form.Label>
            <Form.Control
                as="textarea"
                value={when}
                onChange={handleChange}
                name="when"
                rows={7}
            />
        </Form.Group>
        {errors?.when?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}   

        <Form.Group>
            <Form.Label>
                What types of activities do you plan to do with the dog?
            </Form.Label>
            <Form.Control
                as="textarea"
                value={activities}
                onChange={handleChange}
                name="activities"
                rows={7}
            />
        </Form.Group>
        {errors?.activities?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}           
        
        <Button
            className={`${btnStyles.Button} ${btnStyles.Bright}`}
            onClick={() => history.goBack()}
        >
            cancel
        </Button>
        <Button 
            className={`${btnStyles.Button} ${btnStyles.Bright}`} 
            type="submit"
        >
            save
        </Button>
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container className={appStyles.Content}>
                        <Form.Group>
                            {image && (
                                <figure>
                                    <Image src={image} fluid />
                                </figure>
                            )}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div>
                                <Form.Label
                                    className={`
                                        ${btnStyles.Button} 
                                        ${btnStyles.Bright} 
                                        btn my-auto
                                    `}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfileData({
                                            ...profileData,
                                            image: URL.createObjectURL(e.target.files[0]),
                                        });
                                     }
                                }}
                            />
                        </Form.Group>
                        <div className="d-md-none">
                            {textFields}
                        </div>
                    </Container>
                </Col>
                <Col 
                    md={5} 
                    lg={6} 
                    className="d-none d-md-block p-0 p-md-2 text-center"
                >
                    <Container 
                        className={appStyles.Content}
                    >
                        {textFields}
                    </Container>
                </Col>
            </Row>
        </Form>
    );
};

export default ProfileEditForm;