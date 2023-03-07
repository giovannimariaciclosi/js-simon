/*
CONSEGNA:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.


PSEUDOCODICE:
- Generare 5 numeri casuali
- Farli scomparire dopo 10 secondi
*/





//________________________________________________________________

// FUNZIONI

/**
 * Funzione che genera un numero random compreso tra i due parametri min e max
 * @param {any} min
 * @param {any} max
 * @returns {any}
 */
function randomNumberBetween(min, max) {

  // genero un numero random
  let random = Math.floor(Math.random() * (max - min + 1) + min)

  // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
  return random;
};
