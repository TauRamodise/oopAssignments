describe('BankAccount', () => {
    let dice;
    beforeEach(() => {
        dice = new BankAccount();
    })
    it('should define the persons account information', () => {
        expect(dice.accountInformation()).toBeDefined();
    })
});