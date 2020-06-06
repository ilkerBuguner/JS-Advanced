function notify(message) {
    const div = document.getElementById('notification');
    div.innerText = message;
    div.style.display = 'block';
    setTimeout(() => {div.style.display = 'none'}, 2000);
}