/*
TYPESCRIPT

- Keszits alprogramot, ami...
    - Eldonti, hogy a parameterul kapott szamo tombben van-e negativ szam
    - Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet
        - Tuple-t alkalmazz
        - Kerulet: 2 * sugar * PI
        - Terulet: sugar * sugar * PI
    
- Keszits interface-t Auto neven
    - Gyarto (szoveg)
    - Tipus (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/

function VanENegativ(szamok: number[]): boolean {
    var vanE: number = 0;

    while (vanE < szamok.length && !(szamok[vanE] < 0)) {
        vanE++;
    }

    return vanE < szamok.length;

    /*if(vanE < szamok.length){
        return true;
    }
    else{
        return false;
    }*/
}

function KorKerTer(r: number): [number, number] {
    var ker: number = 2 * r * Math.PI;
    var ter: number = r * r * Math.PI;

    return [ker, ter];
}

interface Auto {
    gyarto: string;
    tipus: string;
    hengerurtartalom: number;
    benzinesE: boolean;
}

function TrKeszito(f: string, bemenet: any, kimenet: any): void {
    var tr: HTMLElement = document.createElement("tr");

    var td1: HTMLElement = document.createElement("td");
    var td2: HTMLElement = document.createElement("td");
    var td3: HTMLElement = document.createElement("td");

    td1.appendChild(document.createTextNode(f));
    td2.appendChild(document.createTextNode(bemenet));
    td3.appendChild(document.createTextNode(kimenet));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("torzs")?.appendChild(tr);
}



/*
2023.11.02.
feladat1 (git)

Készíts publikus GitHub repositorit a saját felhasználói fiókodban
Inditsd Git Bash-t, és a jelenlegi TS projectedben inicializálj git-et
A lokális repo-t kösd össze az online (github-os) repoddal
Töltsd fel a jelenlegi állapotot a github-ra

feladat2 (ts)

Készíts alprogramot, ami kiválasztja egy auto tömbből a legkisebb hengerűrtartalmú autót
Készíts alprogramot, ami megadja a paraméterül kapott tömbből a benzinesek darabszámáz
A változtatásokat töltsd fel a github repodba
*/
var autok: Auto[] = [];
var a1: Auto = { gyarto: "Opel", tipus: "Astra", hengerurtartalom: 1600, benzinesE: true };
var a2: Auto = { gyarto: "Ford", tipus: "Cmax", hengerurtartalom: 2000, benzinesE: false };
var a3: Auto = { gyarto: "Suzuki", tipus: "Vitara", hengerurtartalom: 1400, benzinesE: true };
autok.push(a1);
autok.push(a2);
autok.push(a3);


function LegkisebbHengerurtartalom(autok:any[]): Auto[]{
    var minHenegerur: Auto = autok[0];

    for (var i: number = 1; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < minHenegerur.hengerurtartalom) {
            minHenegerur = autok[i];
            autok.push(minHenegerur);
        }
    }
    return minHenegerur[i];
}


console.log(LegkisebbHengerurtartalom);



function BenzinesE(autok:any[]): Auto[] {
    var db: any = 0;
    

    for (var i:number = 0; i < autok.length; i++) {
        if (autok[i].benzinesE) {
            db++;
        }
        
    }
    return db;
}

console.log(BenzinesE);


/*
2023.11.07
Feladat 3.

Készíts alprogramot, ami...
    -Egy auto tömbből megadja az átlag hengerűrtartalmat
    -Eldönti, hogy van-e nem benzines auto az autok tömbben
    -Szétválogatja a benzines és nem benzines autokat

A változatot tölsd fel a github repoba

*/
var hengerek:number[]=[1600, 2000, 1400];
function Atlag(hengerek: number[]):number{
var atlag: number = 0;
for(var i: number = 0; i < hengerek.length; i++){
    atlag += hengerek[i];
}
atlag/= hengerek.length;
return atlag;
}


function Benzines(autok:any[]):any[]{
    var benzines:any[]=[];
    var egyeb:any[]=[];
    for(var i:any = 0; i<autok.length; i++){
        if (autok[i]==true){
            benzines.push(autok[i]);
        }
        else{
            egyeb.push(autok[i]);
        }
    }
    return [benzines, egyeb];
}

function VanBenzines(autok:any[]):any[]{
    var benzindb:any;
    for(var i:any = 0; i< autok.length; i++){
        if (autok[i]==true){
            benzindb++ ;
        }
    }
    return benzindb;
}


function Futtatas(): void {
    TrKeszito("Van-e negativ", [12, 23, 5, 0, -1, 17], VanENegativ([12, 23, 5, 0, -1, 17]));
    TrKeszito("Kor kerulet-terulet", 3, KorKerTer(3));
    TrKeszito("Benzines-e?", autok, BenzinesE(autok));
    TrKeszito("MinHengerur", autok, LegkisebbHengerurtartalom(autok));
    TrKeszito("Atlag", hengerek, Atlag(hengerek));
    TrKeszito("Benzinesdb", autok, Benzines(autok));
    TrKeszito("VanBenzines?", autok, VanBenzines(autok));


}

Futtatas();

