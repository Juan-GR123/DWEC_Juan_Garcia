document.querySelector("button").addEventListener("click", ()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response =>{
        if(!response.ok){
            throw new Error("error conectar al serv");
        }
        return response.json();
    })
    .then(datos=>{
        console.log(datos.value);
        const parrafo=document.createElement("p");
        parrafo.innerText=datos.value;
        document.body.append(parrafo)
    })
    .catch ((error)=>{
        console.log(error);
    });
});

//ya si eso pruebas ha hacerlo con splash
const imagen1="https://placehold.co/400";
const imagen2="https://placehold.co/400";
const imagen3="https://placehold.co/400";


promesa1= cargarImagen(imagen1);
promesa2= cargarImagen(imagen1);
promesa3= cargarImagen(imagen1);


function cargarImagen(url){
    return new Promise((resolve,reject)=>{
        const img = new Image();
        img.src =url;
        img.onload=()=> resolve(img);
        img.onerror=()=>reject("error al cargar");
    });
}


Promise.all([promesa1,promesa2,promesa3])
        .then(imagenes=>{
            imagenes.forEach(element => {
                document.body.append(element);
            });
        })
        .catch(error=>{
            console.log(error);
        })