function solve(num){
    let numAsString = toString(num);
    let prevNum = 0;
    let isSameNum = true;
    let sum = 0;
    for(i = 0; i < numAsString.length; i++){
        let currentNum = Number(numAsString[i]);
        if(currentNum !== 0 && currentNum !== prevNum){
            isSameNum = false;
        }
        sum += currentNum;
    }

    console.log(isSameNum);
    console.log(sum);
}

solve(2222222);