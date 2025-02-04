//navigator -> geolocalización
console.log(navigator.userAgent); //antigua
console.log(navigator.userAgentData.brands, 
    navigator.userAgentData.platform
); //moderna

console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.cookieEnabled);
console.log(navigator.geolocation);

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (position) =>{
            console.log("latitud " +position.coords.latitude);
            console.log("longitud " + position.coords.longitude);
            console.log("altitud " + position.coords.altitude);
            
        }, {enableHighAccuracy: true});
}else{
    console.log("error, no lo soporta");
}