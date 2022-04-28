export { };

//1. feladat

function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    let tanfolyamTipus: string = "Junior Frontend";
    if (tipus == false) {
        tanfolyamTipus = "Webprogramozó";
    }
    return nev + " [Team0" + csoport + "] - " + tanfolyamTipus;
}

//2. feladat



//3. feladat

function HarommalOszthatokSzama(array: Array<number>): number {
    let harommalOszthatokSzama = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            harommalOszthatokSzama += 1;
        }
    }
    return harommalOszthatokSzama;
}

//4. feladat