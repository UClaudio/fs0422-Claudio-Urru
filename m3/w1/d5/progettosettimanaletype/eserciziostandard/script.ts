interface Smartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number

    ricarica(unaRicarica: number): void
    chiamata(minutiDurata: number): void
    numero404(): number
    getNumeroChiamate(): number
    azzeraChiamate(): void
}

class FirstUser implements Smartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
    }
    

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    public chiamata(minutiDurata: number): void {
        this.numeroChiamate += 1
        this.carica = this.carica - (this.costoMinuto * minutiDurata)
    }

    public numero404(): number {
        return this.carica
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    
}
class SecondUser implements Smartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
    }
    

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    public chiamata(minutiDurata: number): void {
        this.numeroChiamate += 1
        this.carica = this.carica - (this.costoMinuto * minutiDurata)
    }

    public numero404(): number {
        return this.carica
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    
}
class ThirdUser implements Smartphone {

    carica: number
    numeroChiamate: number
    costoMinuto: number

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
    }
    

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica
    }

    public chiamata(minutiDurata: number): void {
        this.numeroChiamate += 1
        this.carica = this.carica - (this.costoMinuto * minutiDurata)
    }

    public numero404(): number {
        return this.carica
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    
}


let user0 = new FirstUser()
let user1 = new SecondUser()
let user2 = new ThirdUser()
console.table([user0, user1, user2])
console.log("ricarico i telefoni.....")
user0.ricarica(10)
user1.ricarica(20)
user2.ricarica(30)
console.log("credito first user: " + user0.numero404(), "\ncredito second user: " + user1.numero404(), "\ncredito third user: " + user2.numero404())
console.log("\nchiamate in corso...")
user0.chiamata(25)
user0.chiamata(25)
user1.chiamata(30)
user1.chiamata(20)
user2.chiamata(100)
user2.chiamata(10)
user2.chiamata(15)
user2.chiamata(12)
console.log("\ncredito dopo le chiamate:\n" + "credito first user: " + user0.numero404(), "\ncredito second user: " + user1.numero404(), "\ncredito third user: " + user2.numero404())
console.log("\nchiamate effetuate per ognuno:\n" + "chiamate first user: " + user0.getNumeroChiamate() + "\nchiamate second user: " + user1.getNumeroChiamate() + "\nchiamate third user: " + user2.getNumeroChiamate())
console.table([user0, user1, user2])
console.log("\nazzerano le chiamate...")
user0.azzeraChiamate()
user1.azzeraChiamate()
user2.azzeraChiamate()
console.table([user0, user1, user2])