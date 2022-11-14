




let listaNomi = ["nick", "jordan", "daisy", "tom"];
let nomeUtente = prompt("scrivi il tuo nome e vedo se puoi partecipare");
let validato = false;



for (let i = 0; i < listaNomi.length; i++) {
  if ( listaNomi[i].toLowerCase() == nomeUtente.toLowerCase() ) {
    validato = true;
  }
}

if (validato == true) {
  document.getElementById('testo').innerHTML = "Puoi partecipare";

} else {
  document.getElementById('testo').innerHTML = "Non puoi partecipare";

}