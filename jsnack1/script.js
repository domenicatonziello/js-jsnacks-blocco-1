console.log('JS OK');

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
*/

// PRENDERE ELEMENTI DAL DOM:
const finalNumber = document.getElementById('final-number');

// CHIEDERE 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO:
let somma = 0;
let userNumber = true;
for (let i = 0; i < 10 && userNumber ; i++) {
    userNumber = parseInt(prompt('Digita un numero'));
    somma += userNumber;
}
// STAMPARE LA SOMMA NEL DOM
finalNumber.innerText = 'La somma dei tuoi numeri è:'+ ' ' + somma; 
