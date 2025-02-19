import $, { event } from 'jquery'; //referencia a todos los elementos de jquery


$(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Reemplaza esta URL por la de tu API si es necesario
    const apiKey = ''; // Si estás usando una API que requiere autenticación, coloca aquí tu clave
    let loading = false;

    // Función para cargar las tarjetas
    function loadCards() {
        if (loading) return;
        loading = true;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'jsonplaceholder30.p.rapidapi.com'
            },
            success: function (response) {
                console.log(response); // Verifica la respuesta

                // Limitar la cantidad de tarjetas cargadas para la demo (puedes quitar este límite si deseas cargar más)
                const data = response.slice(0, 10); // Limitamos a 10 elementos para probar

                data.forEach(item => {
                    // Agregar un parámetro de tiempo único para evitar la caché
                    const card = `
                          <article class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                            <img class="w-full h-60 object-cover" src="https://cataas.com/cat?unique=${Math.random()}" alt="Imagen de ejemplo">
                             <section class="p-4">
                                <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
                                 <p class="text-gray-600 text-sm mt-2">${item.body.substring(0, 100)}...</p>
                             </section>
                             </article>
                    `;
                    $('#card-container').append(card);
                });

                loading = false;
            },
            error: function (error) {
                console.error('Error al cargar las tarjetas:', error);
                loading = false;
            }
        });
    }

    // Función para detectar si se llegó al final de la página
    function checkScroll() {
        // Detectamos si el usuario ha llegado al final de la página
        const scrollPosition = $(window).scrollTop() + $(window).height();
        const documentHeight = $(document).height();
        if (scrollPosition >= documentHeight - 200) {
            loadCards(); // Cargar más tarjetas si llegamos cerca del final
        }
    }

    // Cargar las primeras tarjetas al inicio
    loadCards();

    // Evento de scroll para cargar más tarjetas cuando el usuario llegue al final
    $(window).on('scroll', checkScroll);
});