




var listaNomi = ["nick", "jordan", "daisy", "tom"];
var nomeUtente = prompt("scrivi il tuo nome e vedo se puoi partecipare");
var validato = false;



for (var i = 0; i < listaNomi.length; i++) {
  if ( listaNomi[i].toLowerCase() == nomeUtente.toLowerCase() ) {
    validato = true;
  }
}

if (validato == true) {
  document.getElementById('testo').innerHTML = "Puoi partecipare";

} else {
  document.getElementById('testo').innerHTML = "Non puoi partecipare";

}