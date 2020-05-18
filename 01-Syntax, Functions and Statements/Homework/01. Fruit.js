function solve(fruit, weight, money){
    let kg = weight / 1000;
    let moneyNeeded = money * kg;

    console.log('I need $' + moneyNeeded.toFixed(2) +' to buy ' + kg.toFixed(2) + ' kilograms ' +fruit + '.')
}

solve('orange', 2500, 1.80);