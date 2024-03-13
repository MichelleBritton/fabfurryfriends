import React, { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import appStyles from "../../App.module.css";
import styles from "../../styles/AdvertsPage.module.css";
import NoResults from "../../assets/no-results.png";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { useAdvertData, useSetAdvertData, AdvertDataProvider } from "../../contexts/AdvertsContext";
import Advert from "./Advert";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function AdvertsPage ({ message }) {
    const advertData = useAdvertData(); 
    const setAdverts = useSetAdvertData(); 
    const [query, setQuery] = useState("");    

    return (  
        <AdvertDataProvider query={query}>
                <Container className={`${appStyles.MainContent}`} fluid>
                <Row>
                    <Col className={`${appStyles.Content} mr-auto mb-5`} md={2}>
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
                        {console.log(query)}                 
                    </Col>
                    <Col className="ml-auto" md={9}>
                        <Row>
                            {advertData.results.length ? (
                                <InfiniteScroll 
                                    children={
                                        advertData.results.map((advert) => (  
                                            <Col key={advert.id} className={styles.Card} xs={12} md={6} xl={4}>
                                                <Advert {...advert} setAdverts={setAdverts} /> 
                                            </Col>                  
                                        ))
                                    }
                                    dataLength={advertData.results.length}
                                    loader={<Asset spinner />}
                                    hasMore={!!advertData.next}
                                    next={() => {fetchMoreData(advertData, setAdverts)}}    
                                    className={"d-flex flex-row flex-wrap justify-content-between"}                            
                                />
                            ) : (
                                <Container className={appStyles.Content}>
                                    <Asset src={NoResults} message={message} />
                                </Container>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AdvertDataProvider>     
       
    );
};

export default AdvertsPage;