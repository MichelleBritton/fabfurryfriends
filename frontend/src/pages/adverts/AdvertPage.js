import React, { useEffect, useState } from "react";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Advert from "./Advert";

import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function AdvertPage() {
    const { id } = useParams();

    const [advert, setAdvert] = useState({results: []});

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: advert}] = await Promise.all([
                    axiosReq.get(`/adverts/${id}`),
                ]);
                setAdvert({results: [advert]});
                console.log(advert);
            } catch(err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Container className={`${appStyles.MainContent}`} fluid>
            <Advert {...advert.results[0]} setAdvert={setAdvert} advertPage /> 
        </Container>                     
    );
}

export default AdvertPage;