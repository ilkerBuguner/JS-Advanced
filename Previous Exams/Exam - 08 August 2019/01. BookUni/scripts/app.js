function solve() {
    document.querySelector('button').addEventListener('click', addBook);
    const totalStoreProfitTag = document.querySelectorAll('h1')[1];
    function addBook(e) {
        e.preventDefault();
        const bookTitle = document.querySelectorAll('input')[0].value;
        const bookYear = document.querySelectorAll('input')[1].value;
        const bookPrice = document.querySelectorAll('input')[2].value;

        if(bookTitle && bookYear > 0 && bookPrice > 0) {
            let newBooksSection = document.getElementById('outputs').children[1].children[1];

            let newBook = el('div', [
                el('p', `${bookTitle} [${bookYear}]`),
                el('button', `Buy it only for ${Number(bookPrice).toFixed(2)} BGN`),
                el('button', 'Move to old section')
            ] , {className: 'book'})

            newBook.children[1].addEventListener('click', buyBook);
            newBook.children[2].addEventListener('click', moveToOldSection);
            newBooksSection.appendChild(newBook);
        }
    }

    function buyBook(e) {
        const notCuttedBookPrice = e.target.textContent.replace( /^\D+/g, '');
        const cuttedBookPrice = Number(notCuttedBookPrice.substring(0, notCuttedBookPrice.length - 4));
        const notCuttedTotalPrice = totalStoreProfitTag.textContent.replace( /^\D+/g, '');
        const cuttedTotalPrice = Number(notCuttedTotalPrice.substring(0, notCuttedTotalPrice.length - 4));
        totalStoreProfitTag.textContent = `Total Store Profit: ${(cuttedBookPrice + cuttedTotalPrice).toFixed(2)} BGN`;
        e.target.parentNode.remove();
    }

    function moveToOldSection(e) {
        const oldBookSection = document.getElementById('outputs').children[0].children[1];
        const notCuttedBookPrice = e.target.previousSibling.textContent.replace( /^\D+/g, '');
        const cuttedBookPrice = Number(notCuttedBookPrice.substring(0, notCuttedBookPrice.length - 4));
        const bookNewPrice = cuttedBookPrice - (cuttedBookPrice * 0.15);
        e.target.previousSibling.textContent = `Buy it only for ${bookNewPrice.toFixed(2)} BGN`;
        const bookDiv = e.target.parentNode;
        e.target.remove();
        oldBookSection.appendChild(bookDiv);
        //bookDiv.remove();
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