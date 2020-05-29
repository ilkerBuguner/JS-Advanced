function calculateCarBrands(input) {
    let catalogue = {};
    for (const part of input) {
        let [brand, model, producedCars] = part.split(' | ');

        if(catalogue.hasOwnProperty(brand) === false){
            catalogue[brand] = {};
        }

        if(catalogue[brand].hasOwnProperty(model) == false){
            catalogue[brand][model] = Number(producedCars);
        }
        else {
            catalogue[brand][model] += Number(producedCars);
        }
    }

    let brands = Object.keys(catalogue);

    for (const brand of brands) {
        console.log(brand);
        let models = Object.keys(catalogue[brand]);
        for (const model of models) {
            console.log(`###${model} -> ${catalogue[brand][model]}`);
        }
    }
}

calculateCarBrands(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);