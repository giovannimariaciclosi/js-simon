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
- Genero 5 numeri casuali, li metto in un array e li stampo in pagina
- Li faccio scomparire dopo 10 secondi ???
- Tramite 5 campi di input faccio inserire 5 numeri all'utente
- SE il valore del primo campo di input è presente nell'array di numeri casuali
  °Lo inserisco in un nuovo array di numeri corretti
ALTRIMENTI  no
- SE il valore del secondo campo di input è presente nell'array di numeri casuali
  °Lo inserisco in un nuovo array
ALTRIMENTI no
- SE il valore del terzo campo di input è presente nell'array di numeri casuali
  °Lo inserisco in un nuovo array
ALTRIMENTI no
- SE il valore del quarto campo di input è presente nell'array di numeri casuali
  °Lo inserisco in un nuovo array
ALTRIMENTI no
- SE il valore del quinto campo di input è presente nell'array di numeri casuali
  °Lo inserisco in un nuovo array
ALTRIMENTI no

- SE il nuovo array ha lunghezza 0
  ° scrivo che l'utente non ha preso neanche un numero
- ALTRIMENTI
  ° scrivo che l'utente ha preso array.lenght numeri, che corrispondono a: array


*/

let numberContainerEl = document.getElementById("rundom-numbers-container");

let number1El = document.getElementById("number1");
let number2El = document.getElementById("number2");
let number3El = document.getElementById("number3");
let number4El = document.getElementById("number4");
let number5El = document.getElementById("number5");

let checkButtonEl = document.getElementById("check-button");
let resultEl = document.getElementById("result");

let randomNumberList = [];
let correctUserNumberList = [];


// Genero 5 numeri casuali, li metto in un array
while (randomNumberList.length < 5) {

  const newRandomNumber = randomNumberBetween (1, 100);
  randomNumberList.push(newRandomNumber);
}
// Li stampo in pagina
numberContainerEl.innerText = randomNumberList;

checkButtonEl.addEventListener('click', function() {

  if (randomNumberList.includes(parseInt(number1El.value))) {
    correctUserNumberList.push(number1El.value);
  } 

  if (randomNumberList.includes(parseInt(number2El.value))) {
    correctUserNumberList.push(number2El.value);
  }

  if (randomNumberList.includes(parseInt(number3El.value))) {
    correctUserNumberList.push(number3El.value);
  }

  if (randomNumberList.includes(parseInt(number4El.value))) {
    correctUserNumberList.push(number4El.value);
  }

  if (randomNumberList.includes(parseInt(number5El.value))) {
    correctUserNumberList.push(number5El.value);
  }

  if (correctUserNumberList.length == 0) {
    resultEl.innerText = "Non hai azzeccato neanche un numero, fai schifo."
  } else {
    resultEl.innerText = `Hai preso ${correctUserNumberList.length} numeri: ${correctUserNumberList}`;
  }

});




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
