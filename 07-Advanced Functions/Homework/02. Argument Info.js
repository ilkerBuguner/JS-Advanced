function solve(...arguments) {
    let argumentCounter = {};

    for (const arg of arguments) {
        const typeOfArg = typeof (arg);

        if(argumentCounter[typeOfArg] === undefined) {
            argumentCounter[typeOfArg] = 0;
        }

        argumentCounter[typeOfArg]++;

        console.log(`${typeOfArg}: ${arg}`);
    }

    Object.entries(argumentCounter).sort((a, b) => b[1] - a[1]).forEach(e => console.log(`${e[0]} = ${e[1]}`))
}

solve('cat', 42, function () { console.log('Hello world!'); });