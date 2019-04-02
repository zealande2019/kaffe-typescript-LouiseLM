import {Kaffe} from "./Kaffe"
import {Imælk} from "./Imælk"

export class Cortado extends Kaffe implements Imælk
{
    Pris(): number{
        return 25
    }
    MlMælk(): number{
        return 25
    }
    KaffeType(): string{
        return "Cortado";
    }

    constructor(rabat: number=0){super(0);};

}