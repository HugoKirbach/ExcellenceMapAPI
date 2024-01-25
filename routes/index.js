var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;

// Fonction pour récupérer les coordonnées GPS d'une adresse avec l'API Nominatim
function getCoordinates(address) {
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    // Faire une requête HTTP avec Axios
    axios.get(nominatimUrl)
        .then(response => {
            // Vérifier si la réponse est valide
            if (response.data && response.data.length > 0) {
                // Récupérer les coordonnées GPS
                const latitude = response.data[0].lat;
                const longitude = response.data[0].lon;

                console.log(`Coordonnées GPS de ${address}: Latitude ${latitude}, Longitude ${longitude}`);
            } else {
                console.error('Aucune coordonnée GPS trouvée pour cette adresse.');
            }
        })
        .catch(error => console.error('Erreur de réseau :', error));
}

function getTrack(adressA, adressB){
const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adressA)}`;
    const nominatimUrl2 = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adressB)}`;
    axios.get(nominatimUrl)
        .then(response => {
            // Vérifier si la réponse est valide
            if (response.data && response.data.length > 0) {
                // Récupérer les coordonnées GPS
                const latitude = response.data[0].lat;
                const longitude = response.data[0].lon;

                console.log(`Coordonnées GPS de ${adressA}: Latitude ${latitude}, Longitude ${longitude}`);
            } else {
                console.error('Aucune coordonnée GPS trouvée pour cette adresse.');
            }
        })
        .catch(error => console.error('Erreur de réseau :', error));
    axios.get(nominatimUrl2)
        .then(response => {
            // Vérifier si la réponse est valide
            if (response.data && response.data.length > 0) {
                // Récupérer les coordonnées GPS
                const latitude = response.data[0].lat;
                const longitude = response.data[0].lon;

                console.log(`Coordonnées GPS de ${adressB}: Latitude ${latitude}, Longitude ${longitude}`);
            } else {
                console.error('Aucune coordonnée GPS trouvée pour cette adresse.');
            }
        })
        .catch(error => console.error('Erreur de réseau :', error));

}

// Utilisation de la fonction avec une adresse spécifique
//const adresse = '1600 Amphitheatre Parkway, Mountain View, CA';
//getCoordinates(adresse);
getTrack('202C rue victor rimmel', '13 rue du grand rabbin haguenauer');




