function getFibonator() {
    let prev = null;
    let current = null;

    function fibonator() {
        if (prev === null && current === null) {
            prev = 0;
            current = 1;
        } else {
            let newNum = prev + current;
            prev = current;
            current = newNum;
        }

        return current;
    }

    return fibonator;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
