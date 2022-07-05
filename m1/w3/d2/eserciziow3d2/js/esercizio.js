console.log("-----------------------------------------------\nINIZIO ESERCIZIO\n-----------------------------------------------")

const EsempioConst = 1000
console.log("questa -> " + EsempioConst + " è una variabile const, se provo a cambiare il suo valore, dopo averla dichiarata, javascript mi restituisce questo errore:\n\nUncaught TypeError: Assignment to constant variable.")

//esempioConst = 2000    questa riassegnazione darebbe un errore perchè const non è riassegnabile una volta dichiarata

console.log("")


let esempioLet = 10
console.log(`questa -> ${ esempioLet} è una variabile let, a differenza di una variabile dichiarata con var, non può essere cambiata dall'esterno se si trova in un blockscope`)
{
    let numeri = 1234 //let dichiarata in un blockscope
    numeri = 12345 //let riassegnata in un blockscope
}
//console.log(numeri) da errore perchè non è all'interno del blockscope in cui è stata dichiarata la let quindi JS non la trova

console.log("")
var esempioVar = "200"
console.log("questa -> " + esempioVar + " è una variabile dichiarata con var, quindi è possibile riassegnarla all'esterno di un blockscope anche se è stata dichiarata all'interno di esso")
{
    var errata = "variabile var dichiarata nel blockscope"
    console.log(errata)
}

errata = "variabile var riassegnata all'esterno del blockscope"
console.log(errata)
console.log("")

let booleana = true
console.log("questa -> " + booleana + "è una variabile di tipo booleano, quindi può essere o true o false")

function cambio() {
    if(booleana){
        booleana = false
    } else if(booleana == false) {
        booleana = true
    }
    console.log(booleana)
}
var paragrafo = document.querySelector("#calcolo")
let numero = null
let cifra = 2
function moltiplica() {
    if (numero == null) {
        numero = prompt("scegli un numero da motiplicare x " + cifra)
        if (numero == NaN) {
            alert("sono validi solo numeri")
            numero = null
        } else if (numero != null) {
            numero *= cifra
            console.log(numero)
        }
    } else {
        numero *= cifra
    }
    paragrafo.innerHTML = numero
    console.log(numero)
}