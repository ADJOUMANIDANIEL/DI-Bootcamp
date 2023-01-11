// let error  = document.createElement("span");
// error.setAttribute("id", "error");

// let latitude = document.createElement("span");
// error.setAttribute("id", "latitude");

// let longitude  = document.createElement("span");
// error.setAttribute("id", "longitude");

// let btn = document.createElement("button");
// btn.innerHTML = "Votre Position";

// btn.addEventListener("click", getPosition);


// if (navigator.geolocation) {
//     console.debug('geolocalisation en cours...');
//     navigator.geolocation.getCurrentPosition(getPosition, getError);
// }
// else {
//     document.getElementById("error").innerHTML = "La géolocalisation n'est pas disponible avec votre navigateur.";
// }

// function getPosition(position) {
//     document.getElementById("latitude").innerHTML = "Latitude : " + latitude;
//     document.getElementById("longitude").innerHTML = "Longitude : " + longitude; 
// }

// function getError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             document.getElementById("error").innerHTML = "User denied the request for Geolocation."
//             break;
//         default:
//             document.getElementById("error").innerHTML = "Votre géolocalisation est impossible...";
//     }
// }; 