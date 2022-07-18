let tasti = document.querySelectorAll(".tasti")
let risultato = document.querySelector("#risultato")



function getInner (indice) {
    
    let clicked = tasti[indice].getAttribute("data-numero")
    let operatori = [".", "+", "-", "x", "/"]

    


    if (operatori.filter((word) => word==clicked) == false  || clicked != risultato.value.slice(-1)) {

        

        risultato.value += clicked

        
    } 

    
    return clicked
    
}

function clearDisplay () {
    risultato.value = ""
}

function calcolo() {
    
    risultato.value = risultato.value.replaceAll("x", "*")
    risultato.value = eval(risultato.value)
}

function invert (indice) {
    tasti[indice].classList.add("inverti")
}
function revert (indice) {
    tasti[indice].classList.remove("inverti")
}
function clickedRevert(indice) {
    tasti[indice].classList.add("revert")
}
