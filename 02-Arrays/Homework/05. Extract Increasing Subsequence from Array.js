function solve(arr) {
    let currentMaxNum = 0;
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if(currentNum > currentMaxNum){
            result.push(currentNum);
            currentMaxNum = currentNum
        }
    }

    console.log(result.join('\n'));
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );