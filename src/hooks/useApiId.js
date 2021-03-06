import {useState, useEffect} from "react";

export default function useApiId(query) {
    console.log(query);
    const [data, setData] = useState();
    const getRequest = async () => {
        try {
            const response = await fetch(query, 
                {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                        "x-rapidapi-host": "the-legend-of-zelda.p.rapidapi.com"
                    }
                }
            );
            const json = await response.json();
            console.log(json.data);
            setData(json.data);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getRequest();
    }, [])
    return data;
}