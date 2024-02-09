
import { crearDeck , miNombre, pedirCarta,valorCarta , turnoComputadora ,crearCarta} from './usecases';
 //import { pedirCarta } from  './usecases/pedir-carta';
 //import { valorCarta } from  './usecases/valor-carta';
 
//import { crearDeck } from './usecases/crear_deck';
import _ from 'underscore';

 //import '{ crearDeck } from ./usecases/crear-deck';  // exportacion independiente
/**
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
console.log({miNombre})

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;

let carta ='',
valorc=0;
// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

 deck = crearDeck(tipos ,especiales);

 carta = pedirCarta(deck);
 valorc = valorCarta ( carta );
 console.log( valorc  );

// Eventos
btnPedir.addEventListener('click', () => {

     carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    crearCarta(carta, divCartasJugador);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btndisabledPedirDetener(true);
        puntosHTML[1].innerText =( turnoComputadora ( 21 , deck , puntosJugador, divCartasJugador));  

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btndisabledPedirDetener(true);
        puntosHTML[1].innerText =( turnoComputadora ( 21 , deck , puntosJugador, divCartasJugador));
    }

});


btnDetener.addEventListener('click', () => {
    btndisabledPedirDetener(true);
    puntosHTML[1].innerText =( turnoComputadora ( 21 , deck , puntosJugador, divCartasComputadora));
   
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos ,especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btndisabledPedirDetener(false);

});

const btndisabledPedirDetener =( active) =>{  // true /false
    btnPedir.disabled   = active;
    btnDetener.disabled = active;
}

