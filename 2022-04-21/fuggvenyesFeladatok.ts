export { };

//Téglalap kerület-terület eljárás

function TeglalapKeruletTerulet(a: number, b: number): void {
    let kerulet: number = 2 * (a + b);
    let terulet: number = a * b;
    document.write(`<br>A ${a}, ${b} oldalú téglalap kerülete ${kerulet}`);
    document.write(`<br>A ${a}, ${b} oldalú téglalap területe ${terulet}`);
}

//Páros-e függvény
//Szám bemeneti paraméter
//Logikai értékkel kell visszatérni

function ParosE(vizsgalandoSzam: number): boolean {
    if (vizsgalandoSzam % 2 == 0) return true;
    {
        return true;
    }
    return false;
}

//Tuple

function TeglalapKeruletTeruletTupleFuggveny(a: number, b: number): [number, number] {
    let kerulet: number = 2 * (a + b);
    let terulet: number = a * b;
    return [kerulet, terulet];
}

function UniverzalisTombGenerator(meret: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    for (let i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}

function OsszegzesTetele(vizsgaltTomb: Array<number>): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}