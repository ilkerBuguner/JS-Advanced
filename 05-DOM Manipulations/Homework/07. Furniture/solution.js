function solve() {
  document.querySelectorAll('button')[0].addEventListener('click', generate);
  document.querySelectorAll('button')[1].addEventListener('click', buy);

  function generate(e) {
    const json = JSON.parse(document.querySelector('textarea').value);
    const tBody = document.querySelector('tbody');

    for (const object of json) {
      const newTr = document.createElement('tr');

      if (json.length > 0) {
        for (const product of json) {
            let newTr = document.createElement('tr');
            let { name, img, price, decFactor } = product;
            newTr.innerHTML += `<td><img src ="${img}"></td>`;
            newTr.innerHTML += `<td><p>${name}</p></td>`;
            newTr.innerHTML += `<td><p>${price}</p></td>`;
            newTr.innerHTML += `<td><p>${decFactor}</p></td>`;
            newTr.innerHTML += `<td><input type="checkbox"/></td>`;
            document.getElementsByTagName('tbody')[0].appendChild(newTr);
        }
    }
                     
      tBody.appendChild(newTr);
    }
  }

  function buy(e) {
    const allInputs = document.querySelectorAll('input');
    let furniture = [];
    let totalPrice = 0;
    let decFac = 0;
    const resultTextArea = document.querySelectorAll('textarea')[1];

    for (const input of allInputs) {
      if(input.checked) {
        furniture.push(input.parentNode.parentNode.children[1].textContent);
        totalPrice += Number(input.parentNode.parentNode.children[2].textContent);
        decFac += Number(input.parentNode.parentNode.children[3].textContent);
      }
    }

    if(furniture.length > 0) {
      resultTextArea.value = `Bought furniture: ${furniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFac / furniture.length}`
    }
  }
}