"use strict";
exports.__esModule = true;
//Téglalap kerület-terület eljárás
function TeglalapKeruletTerulet(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    document.write("<br>A ".concat(a, ", ").concat(b, " oldal\u00FA t\u00E9glalap ker\u00FClete ").concat(kerulet));
    document.write("<br>A ".concat(a, ", ").concat(b, " oldal\u00FA t\u00E9glalap ter\u00FClete ").concat(terulet));
}
//Páros-e függvény
//Szám bemeneti paraméter
//Logikai értékkel kell visszatérni
function ParosE(vizsgalandoSzam) {
    if (vizsgalandoSzam % 2 == 0)
        return true;
    {
        return true;
    }
    return false;
}
//Tuple
function TeglalapKeruletTeruletTupleFuggveny(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    return [kerulet, terulet];
}
function UniverzalisTombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
function OsszegzesTetele(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}
