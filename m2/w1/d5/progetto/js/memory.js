let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/
let modal = document.querySelector("#modal")
let griglia = document.querySelector("#griglia")
let millis = document.querySelector("#millis")
let precedenti = document.querySelector("#precedenti")

let interval
let arrayComparison = [];
let tempi = []


document.body.onload = startGame();

// mi serviranno alcune variabili 1. interval 2. una agganciata alla classe find 
// 3. una agganciata al'id modal 4. una agganciata alla classe timer

let timerDiv = document.querySelector(".timer")

//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// una funzione che rimuove la classe active e chiama la funzione startGame()

// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
function startGame() {
    modal.classList.remove("active")
    clearInterval(interval)
    let arr = []
    arr = shuffle(arrayAnimali)
    while (griglia.hasChildNodes()) {  
        griglia.removeChild(griglia.firstChild);
    }
    for(carta of arr){

        let div = document.createElement("div")
        let divIcon = document.createElement("div")
        divIcon.innerHTML = carta
        divIcon.classList.add("icon")
        griglia.appendChild(div)
        div.appendChild(divIcon)
    }
    startTimer()
    let icons = document.querySelectorAll(".icon")

    icons.forEach(element => {
        element.addEventListener("click", displayIcon)
        element.addEventListener("click", modaleOn)
    });



}



// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, 
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto



function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    let iconsFind = document.querySelectorAll(".find")

    this.classList.add("primo")
    /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML && this != arrayComparison[0]) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 500);
        }
    }

}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte
function modaleOn(){
    iconsFind = document.querySelectorAll(".find")
    if (iconsFind.length == 24) {
        clearInterval(interval)
        modal.classList.add("active")
        let timerVero = timerDiv.innerHTML.substring(6)
        document.querySelector("#tempoTrascorso").innerHTML = timerVero
        

            //let altro = document.createElement("p")
            //altro.innerHTML = "Tempi precedenti:"
            //while (precedenti.hasChildNodes()) {  
            //    precedenti.removeChild(griglia.firstChild);
            //}
            //for (let tempo of tempi) {
            //    let d = document.createElement("p")
            //    d.innerHTML = tempo
            //    precedenti.appendChild(d)
            //}

        //tempi.push(timerVero)
        
    }
}


// una funzione che nasconde la modale alla fine e riavvia il gioco
function playAgain(){
    modal.classList.toggle("active")
    startGame()
}


// una funzione che calcola il tempo e aggiorna il contenitore sotto
function startTimer(){
    let ms = 0
    let s = 0
    let m = 0
    let h = 0
    interval = setInterval(function(){
    timerDiv.innerHTML = 'Tempo: ' + m + " min " + s + " sec " 
    millis.innerHTML = + ms + " ms " 
    
      ms += 10
      if(ms == 1000){
        s++
        ms = 0
      }
      if(s == 60){
        m++
        s = 0
      }
      if(m == 60){
        h++
        m = 0
      }
    },10)
}
//per tasti aggiuntivi
/*
let stop = document.querySelector("#stop")
let pausa = document.querySelector("#pausa")


stop.addEventListener("click", stopTimer = () => {
    clearInterval(interval)
    timerDiv.innerHTML = 'Tempo: ' + 0 + " min " + 0 + " sec " + 0 + " ms " 
})
pausa.addEventListener("click", pausaTimer = () => {
    clearInterval(interval)
})
*/