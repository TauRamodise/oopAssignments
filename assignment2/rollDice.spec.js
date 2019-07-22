describe('DiceFactory', () => {
    let dice
    beforeEach(() => {
        dice = new DiceFactory(6, 20);
    })
    it('should output a random number for a six sided die', () => {
        expect(dice.makeDie()).toBeLessThanOrEqual(6)
    })
    it('should output a random number for a 20 sided die', () => {
        expect(dice.makeDie()).toBeLessThanOrEqual(20)
    })
});

describe('DiceTester', () => {
    let dice;
    beforeEach(() => {
        dice = new DiceTester();
    })
    it('should produce a six sided die', () => {
        expect(dice.testDie()).toBeDefined();
    })
    it('should test if a die does not output a number more than three times, the die is fair', () => {
        expect(dice.testDie()).toBe('This die is fair');
    })
    it('should trow an error if any other kind of die is input for testing', () => {
        let die = function () {
            throw 'unexpected input'
        }
        expect(die).toThrow('unexpected input');
    })
});