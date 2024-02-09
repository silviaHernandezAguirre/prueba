/**
 * 
 * @param {<string>} carta 
 * @param {HTMLElement} divCartas 
 */

export const crearCarta = ( carta ,  divCartas) => {
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `./public/assets/cartas/${ carta }.png`;      
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );
}