function lockedProfile() {
    document.getElementById('main').addEventListener('click', solve);

    function solve(e) {
        let btn = e.target;
        if(btn.nodeName === 'BUTTON' && btn.textContent === 'Show more') {
            if(e.target.parentNode.children[2].checked) {
                return;
            }
            const div = e.target.parentNode.children[9];
            div.style.display = 'block'
            btn.textContent = 'Hide it'
        }
        else if(btn.nodeName === 'BUTTON' && btn.textContent === 'Hide'){
            const div = e.target.parentNode.children[9];
            div.style.display = 'none'
            btn.textContent = 'Show more'
        }
    }
}