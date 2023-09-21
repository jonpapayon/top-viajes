const menu = document.querySelector('#menu')
const open = document.querySelector('#open')
const close = document.querySelector('#close')
open.addEventListener('click', () => {
    menu.classList.add('visible')
})
close.addEventListener('click', () => {
    menu.classList.remove('visible')
})

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    // Muestra los datos en una alerta
    let datosEnviados = "Nombre: " + nombre + "\nCorreo Electrónico: " + email + "\nMensaje:\n" + mensaje;
    alert("Datos enviados:\n\n" + datosEnviados);

    // Puedes enviar los datos al servidor aquí usando AJAX o fetch si es necesario
});

function initMap() {
    let ubicacion = { lat: 40.7128, lng: -74.0060 }; // Coordenadas del mapa (latitud y longitud)
    let mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: ubicacion,
        zoom: 12 // Nivel de zoom del mapa
    });

    // Puedes agregar marcadores, líneas y otros elementos del mapa aquí
}