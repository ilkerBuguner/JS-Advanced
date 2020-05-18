function sumOfNumbersInRange(n, m){
    let result = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for(let i = num1; i <= num2; i++){
        result += parseInt(i);
    }

    console.log(result);
}

sumOfNumbersInRange('-8', '20');