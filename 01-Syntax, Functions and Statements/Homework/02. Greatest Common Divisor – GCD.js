function FindGCD(num1, num2){
    let minNum = Math.min(num1, num2);
    let gcd = 1;

    for(let i = 1; i <= minNum; i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    console.log(gcd);
}