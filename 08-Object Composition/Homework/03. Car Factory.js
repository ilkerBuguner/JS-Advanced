function solve(infoObj) {
    const allEngines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ]

    const car = {
        model: infoObj.model
    }

    for (const engine of allEngines) {
        if(infoObj.power <= engine.power) {
            car.engine = engine;
            break;
        }
    }

    car.carriage = {
        type: infoObj.carriage,
        color: infoObj.color
    }

    const modifiedWheelSize = infoObj.wheelsize - 1;
    if(infoObj.wheelsize % 2 == 0) {
        car.wheels = [modifiedWheelSize, modifiedWheelSize, modifiedWheelSize, modifiedWheelSize];
    }
    else {
        car.wheels = [infoObj.wheelsize, infoObj.wheelsize, infoObj.wheelsize, infoObj.wheelsize];
    }

    return car;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));