function solve() {
    const select = document.getElementById('selectMenuTo');

    const options = document.getElementById('selectMenuTo').children;
    options[0].value = 'Binary';
    options[0].textContent = 'Binary';

    const toHexadecimalOption = document.createElement('option');
    toHexadecimalOption.value = 'Hexadecimal';
    toHexadecimalOption.textContent = 'Hexadecimal';
    select.appendChild(toHexadecimalOption);

    document.querySelector('button').addEventListener('click', convert)

    function convert(input) {
        const numberToConvert = document.getElementById('input').value;

        if(select.value === 'Binary'){
            document.getElementById('result').value = Number(numberToConvert).toString(2);
        }
        else if(select.value === 'Hexadecimal') {
            document.getElementById('result').value = Number(numberToConvert).toString(16);
        }
        
    }
}