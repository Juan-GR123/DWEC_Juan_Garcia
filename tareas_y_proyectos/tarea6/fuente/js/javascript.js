    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const apiKey = ''; // Si necesitas una clave de API

    // Función para cargar las tarjetas
    async function loadCards() {//async se utiliza al declarar una función y hace que devuelva una promesa.
        try{
            const response = await fetch(apiUrl, { //await solo se puede usar dentro de funciones asíncronas y permite esperar el resultado de una promesa antes de continuar con la ejecución.
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'jsonplaceholder30.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            const cardContainer = document.getElementById('card-container');
            const posts = data.slice(0, 10); // Solo 10 elementos para probat

            posts.forEach(item => {
                const imageUrl = `https://cataas.com/cat?unique=${Math.random()}`; // Imagen aleatoria

                const article = document.createElement('article');
                article.className = 'bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out';

                article.innerHTML = `
                    <img class="w-full h-60 object-cover" src="${imageUrl}" alt="Imagen de ejemplo">
                    <section class="p-4">
                        <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
                        <p class="text-gray-600 text-sm mt-2">${item.body.substring(0, 100)}...</p>
                    </section>
                `;

                cardContainer.appendChild(article); //agrega el contenido de article al elemento llamado card-container
            });

        }catch(error){
            console.error('Error al cargar las tarjetas:', error);
        }
    }
    
       /* fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'jsonplaceholder30.p.rapidapi.com'
            }
        })
        .then(response => {
            if (!response.ok) throw new Error('Error en la solicitud'); //response.ok es una propiedad del objeto Response de la API que verifica si el código de estado está entre 200 y 299
            return response.json(); //lo pasa a un objeto
        })
        .then(data => {
            const cardContainer = document.getElementById('card-container');
            const posts = data.slice(0, 10); // Solo 10 elementos para la demo

            posts.forEach(item => {
                const imageUrl = `https://cataas.com/cat?unique=${Math.random()}`; // Imagen aleatoria

                const article = document.createElement('article');
                article.className = 'bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out';

                article.innerHTML = `
                    <img class="w-full h-60 object-cover" src="${imageUrl}" alt="Imagen de ejemplo">
                    <section class="p-4">
                        <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
                        <p class="text-gray-600 text-sm mt-2">${item.body.substring(0, 100)}...</p>
                    </section>
                `;

                cardContainer.appendChild(article); //agrega el contenido de article al elemento llamado card-container
            });

            loading = false; //se reestablece el valor loading=false para que se pueda seguir utilizando la funcion
        })
        .catch(error => {
            console.error('Error al cargar las tarjetas:', error);
            loading = false;
        });
    }*/

    // Detectar el scroll y cargar más tarjetas
    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        //window.scrollY devuelve la cantidad de píxeles que has desplazado desde la parte superior de la página.
        //window.innerHeight devuelve la altura visible de la ventana del navegador (la parte de la pantalla donde se muestra el contenido).
        const documentHeight = document.documentElement.scrollHeight;
        //scrollHeight devuelve la altura total de la página, incluyendo la parte que no se ve si hay scroll.
        if (scrollPosition >= documentHeight - 200) {
            loadCards();
        }
    }

    // Cargar las primeras tarjetas
    loadCards();

    // Evento de scroll para scroll infinito
    window.addEventListener('scroll', checkScroll);
