function jsonsTable(input) {
    let result = '<table>\n';

    for (let i = 0; i < input.length; i++) {
        result += '\t<tr>\n';
        let currentObject = input[i];
        let object = JSON.parse(currentObject);

        result += `\t\t<td>${object['name']}</td>\n`;
        result += `\t\t<td>${object['position']}</td>\n`;
        result += `\t\t<td>${object['salary']}</td>\n`;
        result += '\t</tr>\n';
    }
    result += '</table>\n';

    console.log(result);
}

jsonsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);