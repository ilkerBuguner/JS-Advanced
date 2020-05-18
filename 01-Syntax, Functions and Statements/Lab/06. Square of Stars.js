function drawStars(num = 5){
    let result = '';
    for(let i = 0; i < num; i++) {
        for(let i = 0; i < num; i++) {
            result += '* '
        }
        result+='\n';
    }
    console.log(result)
}

drawStars(4);