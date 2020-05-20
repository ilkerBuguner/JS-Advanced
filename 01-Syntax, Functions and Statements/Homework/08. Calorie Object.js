function solve([...params]) {
    let calorie = {};
    for(i = 0; i < params.length; i+=2){
        const propName = params[i];
        const value = params[i + 1];

        calorie[propName] = Number(value);
    }

    console.log(calorie);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);