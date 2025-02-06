//asincrono no hace falta esperar a que carge

console.log("inicio");

setTimeout(()=>{
    console.log("dentro de settimeout");
    for(let i=0; i<1e5; i++){
        console.log("dentro del for")
    }
}, 0);

console.log("fin");