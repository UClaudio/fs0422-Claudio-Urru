var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        this.carica = this.carica - (this.costoMinuto * minutiDurata);
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        this.carica = this.carica - (this.costoMinuto * minutiDurata);
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        this.carica = this.carica - (this.costoMinuto * minutiDurata);
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var user0 = new FirstUser();
var user1 = new SecondUser();
var user2 = new ThirdUser();
console.table([user0, user1, user2]);
console.log("ricarico i telefoni.....");
user0.ricarica(10);
user1.ricarica(20);
user2.ricarica(30);
console.log("credito first user: " + user0.numero404(), "\ncredito second user: " + user1.numero404(), "\ncredito third user: " + user2.numero404());
console.log("\nchiamate in corso...");
user0.chiamata(25);
user0.chiamata(25);
user1.chiamata(30);
user1.chiamata(20);
user2.chiamata(100);
user2.chiamata(10);
user2.chiamata(15);
user2.chiamata(12);
console.log("\ncredito dopo le chiamate:\n" + "credito first user: " + user0.numero404(), "\ncredito second user: " + user1.numero404(), "\ncredito third user: " + user2.numero404());
console.log("\nchiamate effetuate per ognuno:\n" + "chiamate first user: " + user0.getNumeroChiamate() + "\nchiamate second user: " + user1.getNumeroChiamate() + "\nchiamate third user: " + user2.getNumeroChiamate());
console.table([user0, user1, user2]);
console.log("\nazzerano le chiamate...");
user0.azzeraChiamate();
user1.azzeraChiamate();
user2.azzeraChiamate();
console.table([user0, user1, user2]);
