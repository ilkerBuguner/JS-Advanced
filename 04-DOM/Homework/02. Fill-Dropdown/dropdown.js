function addItem() {
    const textContent = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const dropDownMenu = document.getElementById('menu');

    
    let newOption = document.createElement('option');
    newOption.textContent = textContent.value;
    newOption.value = value.value;


    dropDownMenu.appendChild(newOption);

    textContent.value = '';
    value.value = '';
}