
let somma = 0;


for (i=1; i<=10; i++) {
    let num = parseInt(prompt("Inserisci un numero"));
    if(isNaN(num)) {
        num = 0;
    }
    
    somma += num;
}


document.getElementById("somma").innerHTML = `La somma dei numeri inseriti è ${somma}`;