// Variabili
const kmPrice = 0.21;
const discountUnder18 = 20/100;
const discountOver65 = 40/100;
let price = kmPrice * km;


// Bottone Genera

const button = document.querySelector('.btn-primary');

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    //Condizioni
    if(age < 18){
        price = price - (price * discountUnder18); 
    } else if(age >= 65){
        price = price - (price * discountOver65);
    }

    document.getElementById('ticket').innerHTML= `
Il prezzo del biglietto è: ${price}&euro
`;
}
);
