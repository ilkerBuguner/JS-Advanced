function heroicInventory(input) {
    let result = [];

    for (const hero of input) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));
}