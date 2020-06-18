function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color,
            this.gasWeight = gasWeight
        }
    }
    
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight),
            this.ribbon = [ribbonColor, ribbonLength];
        }
    
        get ribbon() {
            return this._ribbon;
        }

        set ribbon(args){
            this._ribbon = {};
            this._ribbon.color = args[0];
            this._ribbon.length = args[1];
        }
    }
    
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength),
            this._text = text
        }
    
        get text() {
            return this._text;
        }

        set text(v){
            this._text = v;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}