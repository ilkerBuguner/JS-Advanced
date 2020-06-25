class ChristmasDinner {
    _budget;
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if(Number(value) < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }

        this._budget = value;
    }

    shopping(product) {
        const [type, price] = product;

        if(this.budget < Number(price)) {
            throw new Error(`Not enough money to buy this product`);
        } else {
            this.products.push(type);
            this.budget -= Number(price);
            return `You have successfully bought ${type}!`;
        }
    }

    recipes(recipe) {
        const recipeName = recipe.recipeName;
        const neededProducts = recipe.productsList;

        neededProducts.forEach(product => {
            if(!this.products.includes(product)) {
                throw new Error(`We do not have this product`);
            }
        });

        const cookedMeal = {
            recipeName,
            neededProducts
        };

        this.dishes.push(cookedMeal);
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let doWeHaveTheDish = false;
        this.dishes.forEach(currentDish => {
            if(currentDish.recipeName == dish) {
                doWeHaveTheDish = true;
            }
        });

        if(doWeHaveTheDish == false) {
            throw new Error(`We do not have this dish`);
        }

        if(this.guests[name]) {
            throw new Error(`This guest has already been invited`);
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        const guestNames = Object.keys(this.guests);
        let resultArr = [];
        for (const guest of guestNames) {
            const dish = this.dishes.find(d => d.recipeName === this.guests[guest]);
            resultArr.push(`${guest} will eat ${this.guests[guest]}, which consists of ${dish.neededProducts.join(', ')}`);
        }

        return resultArr.join('\n');
    }
}

let dinner = new ChristmasDinner(-300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
