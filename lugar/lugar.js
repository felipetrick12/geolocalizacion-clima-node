const getlatitudlogintud = async(direccion) => {

    const EncodeUrl = encodeURIComponent(direccion);
    const axios = require("axios");
    let lat, lon;
    await axios({
            "method": "GET",
            "url": "https://trueway-places.p.rapidapi.com/FindPlaceByText",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "trueway-places.p.rapidapi.com",
                "x-rapidapi-key": "3b5db85235msh9aed27a03ff574ep12f091jsnfb4142f52fdd",
                "useQueryString": true
            },
            "params": {
                "language": "en",
                "text": `${EncodeUrl}`
            }
        })
        .then((response) => {
            // console.log(response.data.results[0].location);
            lat = response.data.results[0].location.lat;
            lon = response.data.results[0].location.lng;
        })
        .catch((error) => {
            console.log(error);
        })
    return {
        direccion,
        lat,
        lon
    }
};

module.exports = {
    getlatitudlogintud,
};