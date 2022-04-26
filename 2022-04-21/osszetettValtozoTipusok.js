//Tuple
var tupleMinta;
tupleMinta = ["Kis Józseg", 22];
console.log(tupleMinta[0]);
var kerTerFeladat;
kerTerFeladat = [22, 30];
//Enum
var fizetesTipusok;
(function (fizetesTipusok) {
    fizetesTipusok[fizetesTipusok["juniorFrontEnd"] = 450000] = "juniorFrontEnd";
    fizetesTipusok[fizetesTipusok["juniorBackEnd"] = 500000] = "juniorBackEnd";
    fizetesTipusok[fizetesTipusok["juniorFullStack"] = 600000] = "juniorFullStack";
    fizetesTipusok[fizetesTipusok["seniorFrontEnd"] = 900000] = "seniorFrontEnd";
    fizetesTipusok[fizetesTipusok["seniorBackEnd"] = 1000000] = "seniorBackEnd";
    fizetesTipusok[fizetesTipusok["seniorFullStack"] = 1200000] = "seniorFullStack";
})(fizetesTipusok || (fizetesTipusok = {}));
var jozsiFizetes = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);
var interfaceObjektum = { nev: "Kis József", eletkor: 22, aktiv: true };
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);
function PrimGenerator(hatarEgy, hatarKetto) {
    var also;
    var felso;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        var generaltSzam_1 = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i <= generaltSzam_1; i++) {
            if (generaltSzam_1 % i == 0) {
                oszto++;
            }
            if (oszto == 2) {
                sikeresGeneralas = true;
            }
        }
    } while (sikeresGeneralas = false && probalkozasokSzama < 100);
    return generaltSzam;
}
