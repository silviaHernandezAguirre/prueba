
/**
 * Extare el valor de una cARTA 
 * @param {<string>} -carta 
 * @returns  {Integer <Number>} -valor  numerico
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
