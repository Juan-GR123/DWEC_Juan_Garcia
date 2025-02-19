import $, { event } from 'jquery'; //referencia a todos los elementos de jquery


$(() => {
    const apiUrl = 'https://unsplash-image-search-api.p.rapidapi.com/search?page=1&query=Tesla';
    const apiKey = ''; // Sustituye con tu clave de RapidAPI
    let page = 1;
    let loading = false;

    function loadImages(page) {
        if (loading) return;
        loading = true;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            data: {
                page: page,
                per_page: 10, // Número de imágenes por página
            },
            headers: {
                'x-rapidapi-key': '',
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'unsplash-image-search-api.p.rapidapi.com',
            },
            success: function (response) {
                console.log(response);  // Verifica la respuesta para asegurarte de la estructura de los datos

                // Accedemos correctamente a la propiedad "data.results"
                const images = response.data.results; // Ahora tomamos `response.data.results`

                if (Array.isArray(images)) {
                    images.forEach(image => {
                        const imageElement = `
                                    <article class="bg-white shadow-md rounded-lg overflow-hidden">
                                        <img class="w-full h-64 object-cover" src="${image.urls.small}" alt="${image.alt_description}">
                                    </article>
                                `;
                        $('#image-container').append(imageElement);
                    });
                } else {
                    console.error('La respuesta de la API no contiene un array en "data.results":', response);
                }

                loading = false;
            },
            error: function (error) {
                console.error('Error al cargar imágenes:', error);
                loading = false;
            }
        });
    }

    // Cargar las primeras imágenes al inicio
    loadImages(page);

    // Detectar el scroll infinito
    $(window).scroll(() => {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            page++;
            loadImages(page);
        }
    });
});

