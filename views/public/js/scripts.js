
document.addEventListener('DOMContentLoaded', function () {
    var botonCambioColor = document.getElementById('botonCambioColor');
    if (botonCambioColor) {
        botonCambioColor.addEventListener('click', function () {
            document.body.style.backgroundColor = '#ffeeba';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el elemento de audio
    var reproductor = document.getElementById('reproductor');

    // Función para detener o reproducir la música
    window.toggleMusica = function () {
        if (reproductor.paused) {
            reproductor.play();
        } else {
            reproductor.pause();
        }
    }
});
