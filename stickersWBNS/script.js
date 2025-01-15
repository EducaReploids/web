// Archivo: script.js

// Función para buscar stickers por el nombre del youtuber
function searchStickers() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        // Si el nombre del slider incluye el texto de búsqueda, se muestra; si no, se oculta
        const title = slider.querySelector("h2").textContent.toLowerCase();
        slider.style.display = title.includes(searchInput) ? "block" : "none";
    });
}

// Función para habilitar el filtro al presionar Enter en el buscador
function setupSearchEnter() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita comportamiento predeterminado
            searchStickers(); // Llama a la función de búsqueda
        }
    });
}

// Funcionalidad para hacer scroll en los sliders
function enableSliderScroll() {
    const sliderContents = document.querySelectorAll(".slider-content");

    sliderContents.forEach(slider => {
        slider.addEventListener("wheel", (event) => {
            event.preventDefault();
            slider.scrollLeft += event.deltaY;
        });
    });
}

// Añadir funcionalidad a los botones de descarga
function setupDownloadButtons() {
    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(button => {
        button.addEventListener("click", () => {
            const youtuberName = button.parentElement.querySelector("h2").textContent;
            alert(`¡Descargando stickers de ${youtuberName}!`);
            // Reemplazar el enlace con el destino real de descarga
            window.open(`https://www.example.com/descargar/${youtuberName.toLowerCase()}`, "_blank");
        });
    });
}

// Inicialización del script cuando la página esté completamente cargada
document.addEventListener("DOMContentLoaded", () => {
    setupSearchEnter(); // Configura la búsqueda con Enter
    enableSliderScroll(); // Habilita desplazamiento en sliders
    setupDownloadButtons(); // Configura botones de descarga
});
