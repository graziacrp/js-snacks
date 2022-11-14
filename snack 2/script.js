


let primaParola = prompt("Inserisci la prima parola");
let secondaParola = prompt("Inserisci la seconda parola");




if (primaParola.length < secondaParola.length) {
    document.getElementById("parolaCorta").innerHTML = `La parola più corta è "${primaParola}"`;
    document.getElementById("parolaLunga").innerHTML = `La parola più lunga è "${secondaParola}"`;
} else if (primaParola.length > secondaParola.length) {
    document.getElementById("parolaCorta").innerHTML = `La parola più corta è "${secondaParola}"`;
    document.getElementById("parolaLunga").innerHTML = `La parola più lunga è "${primaParola}"`;


}