import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCarta } from "./crear-carta";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos , deck=[], puntosHTML, divCartasComputadora) => {

    if(!puntosMinimos) throw new Error ('Puntos minimos es necesario');
    if(!puntosHTML) throw new Error ('Puntos HTML es necesario');

    let puntosComputadora=0;

    do {
       const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML = puntosComputadora;
        //console.log(puntosComputadora);
        crearCarta(carta, divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }


    }, 100 );

    return puntosHTML;
}

