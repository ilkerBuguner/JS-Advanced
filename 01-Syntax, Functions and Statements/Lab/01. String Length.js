function solve(arr1, arr2, arr3){
    let firstArgumentLength = arr1.length;
    let secondArgumentLength = arr2.length;
    let thirdArgumentLength = arr3.length;

    let sumOfArgumentLengths = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    let averageLength = Math.floor(sumOfArgumentLengths / 3);

    console.log(sumOfArgumentLengths);
    console.log(averageLength);
}