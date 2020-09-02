const yargs = require("yargs");
const { getClima } = require('./clima/clima');
const { getlatitudlogintud } = require('./lugar/lugar');

//validaciones 
const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Traer la ciudad requerida en consola",
        demand: true,
    },
}).argv;


const main = async() => {
        let location = await getlatitudlogintud(argv.direccion);
        let clima = await getClima(location.lat, location.lon);
        console.log(`El clima de ${location.direccion} es de: ${clima} C°`);
    }
    // getlatitudlogintud(argv.direccion);
    // getClima(40.000, -75.000);


main();

//     .then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log(err);

// });