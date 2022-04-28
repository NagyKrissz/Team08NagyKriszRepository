"use strict";
exports.__esModule = true;
//1. feladat
function DiakInfo(nev, csoport, tipus) {
    var tanfolyamTipus = "Junior Frontend";
    if (tipus == false) {
        tanfolyamTipus = "Webprogramozó";
    }
    return nev + " [Team0" + csoport + "] - " + tanfolyamTipus;
}
//2. feladat
//3. feladat
function HarommalOszthatokSzama(array) {
    var harommalOszthatokSzama = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            harommalOszthatokSzama += 1;
        }
    }
    return harommalOszthatokSzama;
}
//4. feladat
