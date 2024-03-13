import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import Asset from "../components/Asset";
import Container from "react-bootstrap/Container";
import appStyles from "../App.module.css";

export const AdvertDataContext = createContext();
export const SetAdvertDataContext = createContext();

export const useAdvertData = () => useContext(AdvertDataContext);
export const useSetAdvertData = () => useContext(SetAdvertDataContext);

export const AdvertDataProvider = ({ children }) => {
    const [advertData, setAdvertData] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchAdverts = async () => {
            try {
                const { data } = await axiosReq.get(`/adverts/?${filter}search=${query}`);
                setAdvertData((prevAdvertData) => ({
                    ...prevAdvertData,
                    ...data, 
                }));
                setHasLoaded(true);           
            } catch (err) {
                //console.log(err);
            }
        };

        setHasLoaded(false);

        fetchAdverts();
    }, [filter, query]);

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