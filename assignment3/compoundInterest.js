class BankAccount {
    constructor(accOwner, type, accNumber, balance, fee, interest) {
        this.accOwner = accOwner;
        this.type = type;
        this.accNumber = accNumber;
        this.fee = fee;
        this.balance = balance;
        this.interest = interest;

    }

    accountInformation() {
        return `Account owner ${this.accOwner} has the account type ${this.type},
        with the account number: ${this.accNumber},
        the account racked up a total of R${this.fee} in banking fees,
        currently has a balance of R${this.balance}, 
        this account has an interest rate of ${this.interest} percent
     `
    }
}

let personW = new BankAccount('Warona', 'Savings', 452657852155, 158267, 555, 12);
console.log(personW.accountInformation());