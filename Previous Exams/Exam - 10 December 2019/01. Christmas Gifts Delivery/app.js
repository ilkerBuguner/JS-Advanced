function solution() {
    document.querySelector('button').addEventListener('click', addGift);
    const listOfGiftsUl = document.querySelectorAll('ul')[0];
    const sentGiftsUl = document.querySelectorAll('ul')[1];
    const discardedGiftsUl = document.querySelectorAll('ul')[2];

    function addGift() {
        let giftInput = document.querySelector('input');
        const sendButton = el('button', 'Send', {id: 'sendButton'});
        sendButton.addEventListener('click', sendGift);
        const discardButton = el('button', 'Discard', {id: 'discardButton'});
        discardButton.addEventListener('click', discardGift);
        
        const newGiftLi = el('li', [
            giftInput.value,
            sendButton,
            discardButton
        ] , {className: 'gift'})

        giftInput.value = '';
        listOfGiftsUl.appendChild(newGiftLi);
        const items = [...listOfGiftsUl.querySelectorAll('li')];
        listOfGiftsUl.innerHTML = '';
        items.sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => listOfGiftsUl.appendChild(li));
    }

    function sendGift(e) {
      const targetGift = e.target.parentNode;
      targetGift.children[0].remove();
      targetGift.children[0].remove();
      sentGiftsUl.appendChild(targetGift);
    }

    function discardGift(e) {
      const targetGift = e.target.parentNode;
      targetGift.children[0].remove();
      targetGift.children[0].remove();
      discardedGiftsUl.appendChild(targetGift);
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

