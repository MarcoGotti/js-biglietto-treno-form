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


//click
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function(){

    //chiedi Name e Surname
    const name = document.getElementById('Name').value;
    const surname = document.getElementById('Surname').value;
    const fullname = (name + ' ' + surname);

    //chiedi i km
    const km = parseInt(document.getElementById('wished-km').value);

    //chiedi età passeggero
    const age = parseInt(document.getElementById('user-age').value);

    //prezzo full
    const price_full = (km * 0.21);
    let price = (price_full);

    //fai apparire ticket
    const ticketElement = document.querySelector('.your-ticket');
    console.log(ticketElement);
    ticketElement.classList.remove('d-none')

    //calcola prezzo secondo età
    if (age < 18) {
        //se minorenne 20% sconto
        price = (price_full * 0.8);
        document.getElementById('priceType').innerText = ('Discount Under-18');
    } else if (age >= 65) {
        //se over 65 40% sconto
        price = (price_full * 0.6)
        document.getElementById('priceType').innerText = ('Reduced over-65');
    } else {
        //altrimenti prezzo pieno
        price = (price_full)
        document.getElementById('priceType').innerText = ('Standard');
    }
    
    //stampa nome e cognome
    console.log(fullname);
    document.getElementById('passenger').innerText = (fullname);
    
    //stampa prezzo totale
    console.log(price);
    const priceElement = document.getElementById('total-price');
    priceElement.innerHTML = (`${price.toFixed(2)} €`);

    //stampa random carrozza
    document.getElementById('wagon').innerText = (Math.floor(Math.random() * 10) +1);

    //stampa random cp-code
    document.getElementById('cp-code').innerHTML = getRndInteger(11111,98766)
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    });



