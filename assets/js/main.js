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


//click to generate
const buttonGenerate = document.getElementById('generate-btn');
buttonGenerate.addEventListener('click', function(){

    //chiedi dati
    const name = document.getElementById('Name').value;
    const surname = document.getElementById('Surname').value;
    const fullname = (name + ' ' + surname);

    const km = document.getElementById('wished-km').value;

    const age = document.getElementById('user-age').value;

    //calcola prezzo full
    const price_full = km * 0.21;
    let price = price_full;


    //calcola prezzo secondo età
 if ((name.length < 1) || (surname.length < 1) || (km.length < 1) || (age.length < 1)/* || (surname = '') || (km = '') || (age = '') */) {
        //alert
        const ticketElement = document.querySelector('.your-ticket');
        ticketElement.classList.add('d-none')
        alert('You must fill every space');
        
    }else if (age < 18) {
        //calcola prezzo e stampa ticket-type
        price = (price_full * 0.8);
        document.getElementById('priceType').innerText = ('Discount Under-18');
        //stampa biglietto con i dati
        const ticketElement = document.querySelector('.your-ticket');
        console.log(ticketElement);
        ticketElement.classList.remove('d-none')
        console.log(fullname);
        document.getElementById('passenger').innerText = (fullname);
    
        console.log(price);
        const priceElement = document.getElementById('total-price');
        priceElement.innerHTML = (`${price.toFixed(2)} €`);

        document.getElementById('wagon').innerText = (Math.floor(Math.random() * 10) +1);

        document.getElementById('cp-code').innerHTML = getRndInteger(11111,98766)
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
        }

    } else if (age >= 65) {
        //calcola prezzo e stampa ticket-type
        price = (price_full * 0.6)
        document.getElementById('priceType').innerText = ('Reduced over-65');
        //stampa biglietto
        const ticketElement = document.querySelector('.your-ticket');
        console.log(ticketElement);
        ticketElement.classList.remove('d-none')
        console.log(fullname);
        document.getElementById('passenger').innerText = (fullname);
    
        console.log(price);
        const priceElement = document.getElementById('total-price');
        priceElement.innerHTML = (`${price.toFixed(2)} €`);

        document.getElementById('wagon').innerText = (Math.floor(Math.random() * 10) +1);

        document.getElementById('cp-code').innerHTML = getRndInteger(11111,98766)
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
        }

    } else {
        //calcola prezzo e stampa ticket-type
        price = (price_full)
        document.getElementById('priceType').innerText = ('Standard');
        //stampa biglietto
        const ticketElement = document.querySelector('.your-ticket');
        console.log(ticketElement);
        ticketElement.classList.remove('d-none')
        console.log(fullname);
        document.getElementById('passenger').innerText = (fullname);
    
        console.log(price);
        const priceElement = document.getElementById('total-price');
        priceElement.innerHTML = (`${price.toFixed(2)} €`);

        document.getElementById('wagon').innerText = (Math.floor(Math.random() * 10) +1);

        document.getElementById('cp-code').innerHTML = getRndInteger(11111,98766)
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
        }
    }
});

//click to cancel
document.getElementById('cancel-btn').addEventListener('click', 
function () {
    document.getElementById('Name').value = '';
    document.getElementById('Surname').value = '';
    document.getElementById('wished-km').value = '';   //??input type:"number"??
    document.getElementById('user-age').value = '';
    
});


 /*  //stampa nome e cognome
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
      } */
