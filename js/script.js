let mioDiv = document.getElementById('ticket');
console.dir(mioDiv);

// Variabili
const kmPrice = 0.21;
const discountUnder18 = 20/100;
const discountOver65 = 40/100;



// Bottone Genera

const button = document.querySelector('.btn-primary');

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    let price = kmPrice * km;

    //Condizioni
    if(eta === 'Under18'){
        price = price - (price * discountUnder18); 
    } else if(eta === 'Over65'){
        price = price - (price * discountOver65);
    }

    console.log(price);

    const ticket = document.getElementById('ticket');
    ticket.innerHTML = `<strong>NOME PASSEGGERO</strong> ${nome}`;

    console.log(nome);

    const offer = document.getElementById('offer');
    offer.innerHTML = `<strong>Offerte</strong> Biglietto Standard`;

    console.log (offer);

    const carrozza = document.getElementById('carrozza');
    carrozza.innerHTML = `<strong>Carrozza</strong> 7`;

    console.log(carrozza);

    const codice = document.getElementById('codice');
    codice.innerHTML = `<strong>Codice</strong> 92911`;

    console.log(codice);

    const biglietto = document.getElementById('biglietto');
    biglietto.innerHTML = `<strong>Costo biglietto</strong> ${price};`
}
);




