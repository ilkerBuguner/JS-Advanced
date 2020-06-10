function solve() {

    document.getElementById('add').addEventListener('click', add);

    function add(e) {
        e.preventDefault()
        const taskName = document.getElementById('task').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const openDiv = document.querySelectorAll('section')[1].children[1];

        if (!taskName || !description || !date) {
            return;
        }

        const article = el('article', [
            el('h3', taskName),
            el('p', 'Description: ' + description),
            el('p', 'Due Date: ' + date),
            el('div', [
                el('button', 'Start', { class: "green" }),
                el('button', 'Delete', { class: 'red' })
            ], { class: 'flex' })
        ])
        article.children[3].children[0].addEventListener('click', startArticle)
        article.children[3].children[1].addEventListener('click', deleteArticle)
        openDiv.appendChild(article);
    }

    function startArticle(e) {
        const article = e.target.parentNode.parentNode;
        article.remove();

        const inProgressDiv = document.getElementById('in-progress');
        
        article.children[3].children[0].remove();
        const finishButton = document.createElement('button');
        finishButton.className = 'orange';
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', finishArticle);
        article.children[3].appendChild(finishButton);

        inProgressDiv.appendChild(article);
    }

    function deleteArticle(e) {
        const article = e.target.parentNode.parentNode;
        article.remove();
    }

    function finishArticle(e) {
        const completedDiv = document.querySelectorAll('section')[3].children[1];
        const article = e.target.parentNode.parentNode;
        article.children[3].remove();
        completedDiv.appendChild(article);
    }

    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);

            if(attributes['class']) {
                result.className = attributes['class'];
            }
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }

        return result;
    }
}