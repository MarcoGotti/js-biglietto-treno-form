/* 
Scrivere un programma che chieda all’utente:

    Il numero di chilometri da percorrere
    Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
*/

//chiedi i km
const km = parseInt(document.getElementById('wished-km').value);
console.log(km);

//chiedi età passeggero
const age = parseInt(document.getElementById('user-age').value);
console.log(age);

//prezzo
const price_full = (km * 0.21);
console.log(price_full);

if (age < 18) {
    //se minorenne 20% sconto
    price = (price_full * 0.8)
} else if (age >= 65) {
    //se over 65 40% sconto
    price = (price_full * 0.6)
} else {
    //altrimenti prezzo pieno
    price = (price_full)
}


//stampa prezzo
const priceElement = document.getElementById('total-price');
priceElement.innerHTML = (`${price.toFixed(2)} €`);
