
/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck 
 * @returns {String} Retorna una carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}