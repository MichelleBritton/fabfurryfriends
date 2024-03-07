import React, { useEffect, useState } from "react";

import { axiosReq } from "../../api/axiosDefaults";

import { useParams } from "react-router-dom";
import Advert from "./Advert";

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
        <Advert {...advert.results[0]} setAdvert={setAdvert} advertPage />              
    );
}

export default AdvertPage;