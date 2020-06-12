function solve(elements, sortingType) {
    const arr = Array.from(elements);

    if(sortingType === 'asc') {
        elements.sort((a, b) => a - b);
    }
    else {
        elements.sort((a, b) => b - a);
    }

    return elements;
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));