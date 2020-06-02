function toggle() {
    const buttonText = document.getElementsByClassName("button")[0];
    if(buttonText.textContent === 'Less') {
        buttonText.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
    else {
        buttonText.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }
}