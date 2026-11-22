const div = document.querySelector('.mensaje');
const parrafo = div.querySelector('p');
const segundos = 6000;
let mensajitos = [
    'No se necesita un día especial para dar algo',
    'Te quiero mucho Maye ❤️',
    'Cada vez que escucho tu risa me pongo feliz',
    'Me gusta escucharte hablar',
    'Me gustasssss ❤️',
    'Me gusta pasar tiempo contigo cuando estamos en llamada',
    'Me siento feliz cuando me mandas fotos de tu carita',
    'Eres una persona muy especial para mí',
    'Me gusta cuando me dices que me quieres',
    'Maye y Mino urraaa ❤️',
    'Cuando te vea te dare un abrazo muy fuerte',
    'Eres increíble, Maye ❤️',
];
let i = 0;
function cambiarMensaje() {
    parrafo.textContent = mensajitos[i];

    i++;

    if (i >= mensajitos.length) {
        i = 0;
    }
}
cambiarMensaje();
setInterval(cambiarMensaje, segundos);