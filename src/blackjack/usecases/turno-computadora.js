import { pedirCarta, valorCarta, creatCartaHTML } from "./index.js";

/**
 * 
 * @param {Number} puntosMinimos Puntos mnimos que la computadora necestia superar para ganar
 * @param {HTMLElement} puntosHTML Elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento html para mostrar las cartas
 * @param {Array<String>} deck Cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error("Los puntos minimos son necesarios");
    if(!puntosHTML) throw new Error("Argumento puntosHTMl es necesario");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = creatCartaHTML(carta);

        divCartasComputadora.append( imgCarta );

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
}
