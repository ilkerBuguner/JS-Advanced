function solve(num){
    let numAsString = num.toString();
    let prevNum = Number(numAsString[0]);
    let isSameNum = true;
    let sum = Number(numAsString[0]);

    for(i = 1; i <= numAsString.length - 1; i++){
        let currentNum = Number(numAsString[i]);
        if(currentNum !== prevNum){
            isSameNum = false;
        }
        sum += currentNum;
        prevNum = currentNum;
    }

    console.log(isSameNum);
    console.log(sum);
}