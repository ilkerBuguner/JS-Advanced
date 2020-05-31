function solve(input) {
    const sysComponents = {};

    for (const part of input) {
        const [systemName, componentName, subcomponentName] = part.split(' | ');

        if(sysComponents.hasOwnProperty(systemName) === false) {
            sysComponents[systemName] = {};
        }

        if(sysComponents[systemName].hasOwnProperty(componentName) === false) {
            sysComponents[systemName][componentName] = [subcomponentName];
        }
        else {
            sysComponents[systemName][componentName].push(subcomponentName);
        }
    }

    for (const system of Object.keys(sysComponents).sort((a, b) =>
     sysComponents[b].length - sysComponents[a].length || a.localeCompare(b))) {
        console.log(system);
        for (const component of Object.keys(sysComponents[system]).sort((a, b) =>
         sysComponents[system][b].length - sysComponents[system][a].length)) {
            console.log('|||' + component);
            for (const subComponent of sysComponents[system][component]) {
                console.log('||||||' + subComponent);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);