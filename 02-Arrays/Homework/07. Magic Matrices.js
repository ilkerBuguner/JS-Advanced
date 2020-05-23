function areEqual(matrix) {
    let isMagical = true;
    const magicalSum = matrix[0].reduce((accumulator, currentValue) => accumulator + currentValue);

    for (let row = 0; row < matrix.length; row++) {
         let rowSum = matrix[row].reduce((accumulator, currentValue) => accumulator + currentValue);

         if (magicalSum !== rowSum) {
             isMagical = false;
         }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += Number(matrix[row][col]);
        }

        if (magicalSum !== colSum) {
            isMagical = false;
        }
    }

    return isMagical;
}

console.log(areEqual([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));

   console.log(areEqual([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));