"use strict";
exports.__esModule = true;
//Visszatérési érték és paraméter nélküli eljárás
function IloveTypescript() {
    document.write("Szeretem a Typescriptet");
}
//Visszatérési érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete:").concat(kerulet));
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ter\u00FClete:").concat(terulet));
}
//Visszatérési érték és paraméter nélküli függvény
function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
