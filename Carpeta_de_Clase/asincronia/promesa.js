document.querySelector("#boton").addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("error conectar al serv");
            }
            return response.json();
        })
        .then(datos => {
            console.log(datos.value);
            const parrafo = document.createElement("p"); //crea un elemento el que sea, en este caso p
            parrafo.innerText = datos.value;
            document.body.append(parrafo)
        })
        .catch((error) => {
            console.log(error);
        });
});

/*//ya si eso pruebas ha hacerlo con splash
const imagen1 = "https://placehold.co/400";
const imagen2 = "https://placehold.co/400";
const imagen3 = "https://placehold.co/400";
const url= "https://cataas.com/";

promesa1 = cargarImagen(imagen1);
promesa2 = cargarImagen(imagen1);
promesa3 = cargarImagen(imagen1);


function cargarImagen(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject("error al cargar");
    });
}


Promise.all([promesa1, promesa2, promesa3])
    .then(imagenes => {
        imagenes.forEach(element => {
            document.body.append(element);
        });
    })
    .catch(error => {
        console.log(error);
    });*/





/*document.querySelector("#boton2").addEventListener("click", async () => {
    let respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    if (respuesta.ok) { //ok significa que devuelve datos si es true
        let datos = await respuesta.json();
        console.log(datos.value);
        const parrafo = document.createElement("p");
        parrafo.innerText = datos.value;
        document.body.append(parrafo);
    } else {
        throw new Error("error");
    }
});*/


document.querySelector("#boton2").addEventListener("click", async () => {
    const apiKey = "oculta"; //debes de poner tu api de la web

    const respuesta = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    });
    if (respuesta.ok) { //ok significa que devuelve datos si es true
        let datos = await respuesta.json();
        const parrafo = document.createElement("p");
        parrafo.innerText = datos[0].quote;
        document.body.append(parrafo);
    } else {
        throw new Error("error");
    }
});


//ahora con async y await
const imagen1 = `https://cataas.com/cat?${Math.random()}`;
const imagen2 = `https://cataas.com/cat?${Math.random()}`;
const imagen3 = `https://cataas.com/cat?${Math.random()}`;

promesa1 = cargarImagen(imagen1);
promesa2 = cargarImagen(imagen2);
promesa3 = cargarImagen(imagen3);


async function cargarImagen(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject("error al cargar");
    });
}

document.getElementById("boton3").addEventListener("click", async () => {
    const imagenes = await Promise.all([promesa1, promesa2, promesa3]);
    imagenes.forEach(element => {
        document.body.append(element);
    });
});

