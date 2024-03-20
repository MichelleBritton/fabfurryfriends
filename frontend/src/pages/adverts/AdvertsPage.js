import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import appStyles from "../../App.module.css";
import styles from "../../styles/AdvertsPage.module.css";
import NoResults from "../../assets/no-results.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { axiosReq } from "../../api/axiosDefaults";
import Advert from "./Advert";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function AdvertsPage ({ message }) {
    const [adverts, setAdverts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");

    // GET request to fetch adverts based on search query
    useEffect(() => {
        const fetchAdverts = async () => {
            try {
                const { data } = await axiosReq.get(`/adverts/?search=${query}`);
                setAdverts(data);
                setHasLoaded(true);
            } catch (err) {
                //console.log(err);
            }
        };

        setHasLoaded(false);

        const timer = setTimeout(() => {
            fetchAdverts();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };

    }, [query]);

    return (
        <Container className={`${appStyles.MainContent}`} fluid>
            <Row>
                <Col className={`${appStyles.Content} mr-auto mb-5`} xs={12} lg={3} xl={2}>
                    <i className={`fas fa-search ${styles.SearchIcon}`} />
                    <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
                        <Form.Control 
                            value={query} 
                            onChange={(event) => setQuery(event.target.value)} 
                            type="text" 
                            className="mr-sm-2" 
                            placeholder="Search Adverts" 
                        />
                    </Form>                  
                </Col>
                <Col className="ml-auto" lg={9} xl={10}>
                    <div className={`${appStyles.Content} mx-3 mb-4`}>
                        <h2 className={`${appStyles.Red}`}>Our Dogs</h2>
                        <p>
                            These dogs are currently available for adoption. If you would like to adopt any of these dogs, 
                            please click on the "I would like to adopt" button at the bottom of the advert.  Please ensure
                            that your profile has been fully completed before sending an adoption request. Requests to adopt
                            will not be processed without a full profile.
                        </p>
                    </div>
                    {hasLoaded ? (
                        adverts.results.length ? (
                            <InfiniteScroll 
                                children={
                                    adverts.results.map((advert) => (  
                                        <Col key={advert.id} className={styles.Card} xs={12} md={6} xl={4}>
                                            <Advert {...advert} setAdverts={setAdverts} /> 
                                        </Col>                  
                                    ))
                                }
                                dataLength={adverts.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!adverts.next}
                                next={() => {fetchMoreData(adverts, setAdverts)}}    
                                className={"d-flex flex-row flex-wrap justify-content-between"}                            
                            />
                        ) : (
                            <Container className={appStyles.Content}>
                                <Asset src={NoResults} message={message} />
                            </Container>
                        )
                    ) : 
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                    }                        
                </Col>
            </Row>
        </Container>
    );
};

export default AdvertsPage;
