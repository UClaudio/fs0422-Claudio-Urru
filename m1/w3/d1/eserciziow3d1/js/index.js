/*
alert('Usa il pop up per dare dei messaggi');
window.alert('Sto studiando JS');



var calcolatrice = document.getElementById('calcolatrice');
var risultato = document.getElementById('risultato');
var pulsanti = Array.from(document.getElementsByClassName("pulsante"))

console.log(pulsanti)

function funzione() {
    risultato.innerHTML =(numero)  
}

function somma(a, b) {
    return a + b;
}
*/

var input = document.getElementById('input');
var slider1 = document.getElementById('slider1');
var slider = document.getElementsByClassName('slider');

function slide() {
    slider1.style.display = "block"
    slider1.style.transform = "translateX(0)"
    slider1.style.transition = "all 3s"
    console.log("funziona")
};

