function solve([...params]) {
    let lastNum = Number(params.pop());
    let validNums = [];

    for(let i = 0; i < params.length; i += lastNum) {
        validNums.push(params[i]);
    }

    for(let i = 0; i < validNums.length; i++) {
        console.log(validNums[i]);
    }
}