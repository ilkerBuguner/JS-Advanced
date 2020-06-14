function solve(){
   document.querySelector('button').addEventListener('click', create);

   function create(e) {
      e.preventDefault();
      const author = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;
      const sectionToPasteArticles = document.querySelectorAll('section')[1];

      const article = el('article', [
         el('h1', title),
         el('p', [
            'Category:',
            el('strong', category)
         ]),
         el('p', [
            'Creator:',
            el('strong', author)
         ]),
         el('p', content),
         el('div', [
            el('button', 'Delete', {className: 'btn delete'}),
            el('button', 'Archive', {className: 'btn archive'})
         ], {className: 'buttons'})
      ]);
      article.children[4].children[0].addEventListener('click', deleteArticle);
      article.children[4].children[1].addEventListener('click', archiveArticle);

      sectionToPasteArticles.appendChild(article);
   }

   function deleteArticle(e) {
      const article = e.target.parentNode.parentNode;
      article.remove();
   }

   function archiveArticle(e) {
      const archiveSection = document.querySelector('ul');
      const article = e.target.parentNode.parentNode;
      article.remove();
      const li = el('li', article.children[0].textContent);
      archiveSection.appendChild(li);
      const allLiElements = Array.from(archiveSection.children).map(e => e.textContent);
      let allElements = document.querySelectorAll('li');
      allElements.forEach(element => {
         element.remove();
      });
      allLiElements.sort((a, b) => a.localeCompare(b));
      allLiElements.forEach(element => {
         archiveSection.appendChild(el('li', element));
      });

   }

   function el(type, content, attributes) {
      const result = document.createElement(type);
  
      if (attributes !== undefined) {
        Object.assign(result, attributes);
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
