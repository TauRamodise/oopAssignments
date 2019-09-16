describe('BankAccount', () => {
    let bank;
    beforeEach(() => {
        bank = new BankAccount('Mrs Fantastic', 'Investment', 5587496672255, 52085777);
    })
    it('should define the persons account information', () => {
        expect(bank.accountInformation()).toBeDefined();
    })
    it('should define the account owners account', () => {
        expect(bank.account()).toBeDefined();
    });
    it('should calculate the account owners balances', () => {
        expect(bank.account(250000, 25000, 120, 520800, 12)).toEqual(6474480);
    });
    it('should expect bank account to return the owners account information', () => {
        expect(bank.accountInformation(bank.account(250000, 25000, 120, 520800, 12))).toEqual(`
        Account owner Mrs Fantastic has the account type Investment,
        with the account number: 5587496672255,
        this account has an interest rate of 12 percent
        currently has a balance of R6474480`);
    });
});