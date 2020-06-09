class Company {
    constructor() {
        this.departments = [];
        this.departmentsAsObject = {};
    }

    addEmployee(username, salary, position, department) {
        if(!username || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        const employee = {
            'username': username,
            'salary': Number(salary),
            'position': position,
            'department': department
        };
        this.departments.push(employee);

        if(this.departmentsAsObject[department] == undefined) {
            this.departmentsAsObject[department] = [employee];
        }
        else {
            this.departmentsAsObject[department].push(employee);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = {};
        let biggestAvgSalary = 0;
        const departmentNames = Object.keys(this.departmentsAsObject);
        
        for (const departmentName of departmentNames) {
            let currentAvgSalary = 0;
            this.departmentsAsObject[departmentName] = this.departmentsAsObject[departmentName].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            this.departmentsAsObject[departmentName].forEach(e => {
                currentAvgSalary += e.salary;
            });
            currentAvgSalary /= this.departmentsAsObject[departmentName].length;

            if(biggestAvgSalary < currentAvgSalary) {
                biggestAvgSalary = currentAvgSalary;
                bestDepartment = this.departmentsAsObject[departmentName];
            };
            
        }

        let result = `Best Department is: ${bestDepartment[0].department}\n`;
        result += `Average salary: ${biggestAvgSalary.toFixed(2)}`;
        for (const employee of bestDepartment) {
            result += `\n${employee.username} ${employee.salary} ${employee.position}`;
        }

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

