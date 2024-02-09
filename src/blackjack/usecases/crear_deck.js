import _ from 'underscore';
 
export const miNombre = 'Silvia' ;
// Esta función crea un nuevo deck   04-blackjack-vite\src\blackjack\usecases
/**
 * Esta fucnion crea un nuevo deck de cartas
 * @param {Array <String>} tiposDeCartas - ejemplo ['C','D','H','S']
 * @param {array <String>} tiposCartasespeciales - ['A','J','Q','K']
 * @returns {array} regresa  un deck de cartas -ejemplo (52) ['QH', 'AS', '3C', 'AD', '10D', '6H', '4C', '7D', 'KS', '9H', 'QC', '5S', 'KD', '8C', '5C', 'KC', 'JC', '5D', 'JS', '8H', '8S', '3S', '6C', 'AC', '2D', 'KH', '2S', '7C', 'JH', '3D', 'QS', '5H', '8D', '10H', '2H', '6S', '6D', '9D', '9C', 'AH', '3H', '7S', '4S', '10C', 'QD', '9S', '4H', '4D', 'JD', '10S', '2C', '7H']
 */
export  const crearDeck = (tiposDeCartas , tiposCartasespeciales ) => {
    let deck         = [];

    if((!tiposDeCartas) || (tiposDeCartas.length===0)){
        throw new  Error('tiposDeCartas es obligatorio.');
    }
    if((!tiposCartasespeciales) || (tiposCartasespeciales.length===0)){
        throw new  Error('tiposDeCartasEspeciales es obligatorio.');
    }

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposCartasespeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
