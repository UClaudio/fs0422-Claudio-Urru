
let distanza = document.querySelector("#risultato")
let labels = document.querySelectorAll("label")

let anni = () => {
    let anno1 = document.querySelector("#anno1").value
    let anno2 = document.querySelector("#anno2").value
    let risultato = anno1 - anno2
    if (risultato < 0) {
        risultato = Math.abs(risultato)
    }
    if (!isNaN(risultato)) {
        isultato = "la distanza è di " + risultato + " anni"
        distanza.innerHTML = risultato

    } else {
        distanza.innerHTML = "non hai inserito un numero"
    }
}


function bordino() {
    console.log()
    labels[0].classList.add("indietro")
    
}
function bordino1() {
    console.log()
    labels[1].classList.add("indietro")
    
}
anno1.onblur = () => labels[0].classList.remove("indietro")
anno2.onblur = () => labels[1].classList.remove("indietro")




