import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import Asset from "../components/Asset";
import Container from "react-bootstrap/Container";
import appStyles from "../App.module.css";

export const AdvertDataContext = createContext();
export const SetAdvertDataContext = createContext();

export const useAdvertData = () => useContext(AdvertDataContext);
export const useSetAdvertData = () => useContext(SetAdvertDataContext);

export const QueryContext = createContext();
export const SetQueryContext = createContext();

export const useQuery = () => useContext(QueryContext);
export const useSetQuery = () => useContext(SetQueryContext);

export const AdvertDataProvider = ({ children, query="" }) => {
    const [advertData, setAdvertData] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        console.log(query)
        const fetchAdverts = async () => {
            try {                
                const { data } = await axiosReq.get(`/adverts/?search=${query}`);
                console.log("query:", query);
                console.log("Fetched adverts:", data)
                setAdvertData(data);
                setHasLoaded(true);                           
            } catch (err) {
                console.log("Error fetching adverts:", err);
            }
        };

        // setHasLoaded(false);

        const timer = setTimeout(() => {
            fetchAdverts();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
        
    }, [query]);

    return hasLoaded ? (
        <AdvertDataContext.Provider value={advertData}>
            <SetAdvertDataContext.Provider value={setAdvertData}>
                {children}
            </SetAdvertDataContext.Provider>
        </AdvertDataContext.Provider>
    ) : (
        <Container className={appStyles.Content}>
            <Asset spinner />
        </Container>
    )
}