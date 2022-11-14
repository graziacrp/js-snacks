
let primoNumero = prompt("Inserisci il primo numero");
let secondoNumero = prompt("Inserisci il secondo numero");




if (primoNumero > secondoNumero) {
    document.getElementById("risultato").innerHTML = `Il primo numero (${primoNumero}) è maggiore`;
} else if (primoNumero < secondoNumero) {
    document.getElementById("risultato").innerHTML = `Il secondo numero (${secondoNumero}) è maggiore`;
} else {
    document.getElementById("risultato").innerHTML = `Hai inserito due numeri uguali...`;
}