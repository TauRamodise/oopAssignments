//
//
// die factory produces a six or twenty sided die 

class DiceFactory {
    constructor(diceSides) {
        this.diceSides = diceSides;

        console.log('welcome to the Dice factory!');
    }

    makeDie() {
        // output a single dice instance 
        let diceRoll = Math.floor(Math.random() * this.diceSides) + 1;

        return diceRoll;
    }
}

//Test if the die produced is fair or not 
class DiceTester {
    constructor() {

        this.diceSides = 6;

    }
    testDie(rolls) {
        let randomNumbers = [];
        let array = [];

        if (this.diceSides === 6) {
            let fairRolls = Math.round(0.3 * this.diceSides);

            for (let a = 1; a <= this.diceSides; a++) {
                rolls = Math.floor(Math.random() * this.diceSides) + 1;
                array.push(rolls);

            }
            array.sort();


            for (let c = 0; c < array.length; c++) {
                randomNumbers.push(array[c]);

                if (this.diceSides > 6) {
                    throw `error invalid die`;
                }
                if (randomNumbers[c] === fairRolls) {
                    return `This die is not fair`

                } else {
                    return `This die is fair`
                }
            }
        }
    }
}


