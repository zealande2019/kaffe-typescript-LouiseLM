import {Kaffe} from "./Kaffe"
import {Imælk} from "./Imælk"

export class Latte extends Kaffe implements Imælk
{
    Pris(): number{
        return 40
    }
    MlMælk(): number{
        return 120
    }
    KaffeType(): string{
        return "Latte";
    }

    constructor(){super(0);
        this.Rabat
        this.Styrke
        };
}