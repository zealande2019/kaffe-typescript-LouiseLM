import {Kaffe} from "./Kaffe"
import {Imælk} from "./Imælk"

export class SortKaffe extends Kaffe implements Imælk
{
    
    Pris(): number{
        let SKpris: number = 20 - this.Rabat;
        return (SKpris)
    }
    MlMælk(): number{
        return 0
    }
    Styrke():string {
        return "Stærk";
    }
    KaffeType(): string{
        return "SortKaffe";
    }

    constructor(rabat: number){super(rabat);
        this.Rabat = rabat
        this.Styrke
        };
}