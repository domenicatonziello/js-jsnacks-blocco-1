console.log('JS OK');

/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
l’utente inserisce il suo nome tramite un input.
comunicagli se può partecipare o no alla festa.
*/
// CREO ARRAY CON NOMI DEGLI INVITATI
const guestList = [
    'leonardo',
    'francesca', 
    'alessandra', 
    'lorenzo', 
    'mattia', 
    'tommaso', 
    'gabriele', 
    'andrea'
];
// Prendo elementi dal DOM
const firstName = document.getElementById('user-name');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
// CREO EVENT LISTENER
btn.addEventListener( 'click', function() {
    // raccolgo valore dall'input
    const userName = firstName.value.trim().toLowerCase();
    // controllo che il valore sia valido
    if (!userName){
        result.innerHTML = `<strong> Inserisci nome valido </strong>`
        return;
    }
    // Controllo se il nome dell'utente è nella lista degli invitati
    let isInvited = false; 
    for(let i=0; i < guestList.length && !isInvited ; i++){
        const currentName = guestList[i];
        console.log(currentName);
        if(currentName === userName){
            isInvited = true;
        }

    }
    // Stampo il messaggio in pagina
    result.innerText = isInvited ? 'Puoi partecipare alla festa' : 'Non sei invitato alla festa'; 
}); 
