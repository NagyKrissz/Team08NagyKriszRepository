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