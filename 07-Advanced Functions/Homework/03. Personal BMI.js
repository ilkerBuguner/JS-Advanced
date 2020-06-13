function solve(name, age, weight, heightInCm) {
    const bmi = Math.round(weight / Math.pow(heightInCm / 100, 2));

    const infoAboutPerson = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: heightInCm
        },
        BMI: bmi
    };

    let status = '';
    if(bmi < 18.5) {
        status = 'underweight';
    }
    else if(bmi < 25) {
        status = 'normal';
    }
    else if(bmi < 30) {
        status = 'overweight';
    }
    else {
        status = 'obese';
    }
    infoAboutPerson.status = status;

    if(status === 'obese') {
        infoAboutPerson.recommendation = 'admission required';
    }

    return infoAboutPerson;
}

solve('Peter', 29, 75, 182);