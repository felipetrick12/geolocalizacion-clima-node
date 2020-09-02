const axios = require("axios");


const getClima = async(lat, lng) => {


    // se crean esas dos variables ya que son las que buscan la latitud y longitud
    // se cambia en api esos parametros por que son los que van cambiar de valor
    // se crea el metodo async para que el await comparta los datos del objeto
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3af52842577fdd3dd0159805d8a10c52&units=metric`)

    // return console.log(resp.data.main.temp);;

    return resp.data.main.temp;

}

module.exports = {
    getClima
}