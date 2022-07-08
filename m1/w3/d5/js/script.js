let tasti = document.querySelectorAll(".tasti")
let risultato = document.querySelector("#risultato")
let segni = document.querySelectorAll(".segni")


function getInner (indice) {
    carattere = tasti[indice].getAttribute("data-numero")

       
    risultato.value += tasti[indice].getAttribute("data-numero")

    
    
    return tasti[indice].getAttribute("data-numero")
    
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
