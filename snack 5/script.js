let arrNum = [];


for(let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Inserisci un numero"));

    if(num % 2 !== 0){
        arrNum.push(num);
    }
}
console.log(arrNum);

