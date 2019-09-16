class BankAccount {
    constructor(accOwner, type, accNumber, accBalance) {
        this.accOwner = accOwner;
        this.type = type;
        this.accNumber = accNumber;
        this.accBalance = accBalance

    }
    account(deposit, withdrawal, bankFee, balance, interest) {
        this.interest = interest;
        this.bankFee = bankFee;
        this.deposit = deposit;
        this.withdrawal = withdrawal;
        this.balance = balance

        this.accBalance = this.interest * this.balance + this.deposit - this.withdrawal - this.bankFee;
        return this.accBalance;


    }

    accountInformation() {
        let netBalance = this.accBalance

        return `
        Account owner ${this.accOwner} has the account type ${this.type},
        with the account number: ${this.accNumber},
        this account has an interest rate of ${this.interest} percent
        currently has a balance of R` + netBalance
    }
}