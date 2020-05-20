function isDistanceValid([x1, y1, x2, y2]) {

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);

    function isValid(x1, y1, x2, y2) {
        let distX = x1 - x2;
        let distY = y1 - y2;
        let dist = Math.sqrt(distX ** 2 + distY ** 2);

        if (Number.isInteger(dist)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}

isDistanceValid([2, 1, 1, 1]);