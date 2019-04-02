import {Kaffe} from "./Kaffe"
import {Imælk} from "./Imælk"
import {Cortado} from "./Cortado"
import {Latte} from "./Latte"
import {SortKaffe} from "./SortKaffe"

let c1 = new Cortado();
// console.log("Cortadoen er " + c1.Styrke() +  " og koster " + c1.Pris() + "kr. med " + c1.Rabat + "kr. i rabat. ");
printOut(c1);

let l1 = new Latte();
// console.log("Latten er " + l1.Styrke() +  " og koster " + l1.Pris() + "kr. med " + l1.Rabat + "kr. i rabat. ");
printOut(l1);

let s1 = new SortKaffe(0);
// console.log("Latten er " + s1.Styrke() +  " og koster " + s1.Pris() + "kr. med " + s1.Rabat + "kr. i rabat. ");
printOut(s1);

let s2 = new SortKaffe(4);
// console.log("Latten er " + s2.Styrke() +  " og koster " + s2.Pris() + "kr. med " + s2.Rabat + "kr. i rabat. ");
printOut(s2);

// let kaffeListe: Kaffe[] = new Array<Kaffe>();

// kaffeListe.push(new Cortado(0));

// kaffeListe.forEach(kaffe => { printOut(kaffe);});

function printOut(k: Kaffe): void{
    console.log("kaffen er en " + k.KaffeType() + " som er " + k.Styrke() + ". Denne drik koster " + k.Pris() + "kr. med " + k.Rabat + "kr. i rabat.")
}