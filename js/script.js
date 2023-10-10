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

    const ticket = document.getElementById('ticket');
}
);





