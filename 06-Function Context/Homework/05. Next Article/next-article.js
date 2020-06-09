function getArticleGenerator(articles) {
    const div = document.getElementById('content');

    function showNext() {
        if (articles.length > 0) {
            let currentArticle = articles.shift();
            const article = document.createElement('article');
            article.textContent = currentArticle;
            div.appendChild(article);
        }
    }

    return showNext;
}
