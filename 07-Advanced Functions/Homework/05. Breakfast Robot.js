function solve() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat' , 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    }

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function restock(microelement, quantity) {
        ingredients[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        for (const ingredient of recipes[recipe].order) {
            if(ingredients[ingredient] < recipes[recipe][ingredient] * quantity) {
                return `Error: not enough ${ingredient} in stock`;
            }

            ingredients[ingredient] -= recipes[recipe][ingredient] * quantity;
        }

        return 'Success';
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }

    const commands = {
        restock,
        prepare,
        report
    }

    function manager(command) {
        const tokens = command.split(' ');
        return commands[tokens[0]](tokens[1], Number(tokens[2]));
    }

    return manager;
}

let manager = solve();
console.log(manager("restock flavour 50"));  // Success
console.log(manager('report'));
