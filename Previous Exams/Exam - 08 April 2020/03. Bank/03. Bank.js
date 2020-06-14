class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const firstName = customer.firstName;
        const lastName = customer.lastName;
        const personalId = customer.personalId;

        const newCustomer = {
            firstName,
            lastName,
            personalId
        };

        for (const customer of this.allCustomers) {
            if(customer.personalId === personalId) {
                throw new Error(`${firstName} ${lastName} is already our customer!`);
            }
        }

        this.allCustomers.push(newCustomer);

        return newCustomer;
    }

    depositMoney(personalId, amount) {
        let currentCustomer;
        this.allCustomers.forEach(customer => {
            if(customer.personalId === personalId) {
                currentCustomer = customer;
            }
        });

        if(currentCustomer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        if(!currentCustomer.hasOwnProperty('totalMoney')) {
            currentCustomer.totalMoney = 0;
        }

        if(!currentCustomer.hasOwnProperty('transactionHistory')) {
            currentCustomer.transactionHistory = [];
        }

        currentCustomer.transactionHistory.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
        currentCustomer.totalMoney += amount;

        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let currentCustomer;
        this.allCustomers.forEach(customer => {
            if(customer.personalId === personalId) {
                currentCustomer = customer;
            }
        });

        if(currentCustomer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        if(currentCustomer.totalMoney && currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }
        else {
            currentCustomer.totalMoney -= amount;
            currentCustomer.transactionHistory.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
            return `${currentCustomer.totalMoney}$`;
        }
    }

    customerInfo(personalId) {
        let currentCustomer;
        this.allCustomers.forEach(customer => {
            if(customer.personalId === personalId) {
                currentCustomer = customer;
            }
        });

        if(currentCustomer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        let result = `Bank name: ${this.bankName}\n`;
        result += `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\n`;
        result += `Customer ID: ${currentCustomer.personalId}\n`;
        result += `Total Money: ${currentCustomer.totalMoney}$\n`;
        result += `Transactions:`;
        for(let i = currentCustomer.transactionHistory.length - 1; i > -1; i--) {
            let currentTransaction = currentCustomer.transactionHistory[i];
            result += `\n${i+1}. ${currentTransaction}`;
        }

        return result;
            
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


