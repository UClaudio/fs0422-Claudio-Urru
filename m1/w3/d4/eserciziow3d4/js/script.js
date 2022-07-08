let frase = "Frase di Test per EsercizioW3D4"
console.log(frase)

let fraseMaiuscola = frase.toUpperCase()
console.log(fraseMaiuscola + "  MAIUSCOLA")

let fraseMinuscola = frase.toLowerCase()
console.log(fraseMinuscola + "  minuscola")

splittata = frase.split(" ")
console.log(splittata)


console.log(splittata[1].concat(splittata[2]))



let persone = ["mario", "chiara", "mattia"]
console.log(persone[2])
let personaAggiunta = "claudio"
persone.push(personaAggiunta)
console.log(persone.length)

let numeri = []
numeri.push(Math.floor(Math.random() * 10))
numeri.push(Math.floor(Math.random() * 10))
console.log(numeri)

const potenza = (n1, n2) => {
    return n1 ** n2
}

console.log(potenza(numeri[0], numeri[1]))


let provaArray = [3, 5, 21, 33]
provaArray.push(500)
console.log(provaArray)
provaArray.pop()
console.log(provaArray)
provaArray.shift()
console.log(provaArray)
provaArray.unshift(3)
console.log(provaArray)
