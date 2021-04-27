import {useState, useEffect} from "react";

export default function useAPI(number) {
    const queries = ["items", "places", "dungeons", "bosses", "monsters", "characters", "games"];
    const [data, setData] = useState([]);
    const getRequest = async () => {
        try {
            const response = await fetch(
                `https://the-legend-of-zelda.p.rapidapi.com/${queries[number]}`, 
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