import {} from "react";

export default function useAPI() {
    const queries = ["items", "places", "dungeons", "bosses", "monsters", "characters", "games"];
    fetch("https://the-legend-of-zelda.p.rapidapi.com/bosses", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "x-rapidapi-host": "the-legend-of-zelda.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response.json());
    })
    .catch(err => {
        console.error(err);
    });

}