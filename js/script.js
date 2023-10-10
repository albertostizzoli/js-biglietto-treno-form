// Variabili
const kmPrice = 0.21;
const discountUnder18 = 20/100;
const discountOver65 = 40/100;
let price = kmPrice * km;
let message = 'Il prezzo del biglietto è:';

// Bottone Genera

const button = document.querySelector('.btn-primary');
console.log(button);

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    //Condizioni
    if(age < 18){
        price = price - (price * discountUnder18); 
    } else if(age > 65){
        price = price - (price * discountOver65);
    }


}
);