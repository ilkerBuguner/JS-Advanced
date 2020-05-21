function rotateArray(arr) {
    var timesToRotate = Number(arr.pop());
    for(let i = 0; i < timesToRotate % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4', 
'2']
);