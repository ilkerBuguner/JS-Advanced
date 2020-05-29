function storeCatalogue(input) {
    let catalogue = {};

    for (const product of input) {
        const [name, price] = product.split(' : ');
        const letter = name[0];

        if(catalogue.hasOwnProperty(letter) === false) {
            catalogue[letter] = {};
        }

        catalogue[letter][name] = price;
    }

    let sortedCatalogue = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of sortedCatalogue) {
        console.log(key);
        let sortedProducts = Object.keys(catalogue[key]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);