//Tuple

var tupleMinta: [string, number];
tupleMinta = ["Kis Józseg", 22];

console.log(tupleMinta[0]);

var kerTerFeladat: [number, number];
kerTerFeladat = [22, 30];

//Enum

enum fizetesTipusok {
    juniorFrontEnd = 450000,
    juniorBackEnd = 500000,
    juniorFullStack = 600000,
    seniorFrontEnd = 900000,
    seniorBackEnd = 1000000,
    seniorFullStack = 1200000
}
var jozsiFizetes: fizetesTipusok = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);

//Interface
interface Dolgozo {
    nev: string;
    eletkor: number;
    aktiv: boolean;
}

var interfaceObjektum: Dolgozo = { nev: "Kis József", eletkor: 22, aktiv: true }
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);


function PrimGenerator(hatarEgy: number, hatarKetto: number): number {
    let also: number;
    let felso: number;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    let probalkozasokSzama = 0;
    let sikeresGeneralas = false;
    let generaltSzam;
    do {
        let generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        let oszto = 0;
        for (let i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
            if (oszto == 2) {
                sikeresGeneralas = true;
            }
        }
    } while (sikeresGeneralas = false && probalkozasokSzama < 100)
    return generaltSzam;
}