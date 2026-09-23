export class Employee {
    constructor(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    calculateSalary() {
        return this.baseSalary;
    }
}

export class Developer extends Employee {
    constructor(id, name, baseSalary, overtimeHours) {
        super(id, name, baseSalary);
        this.overtimeHours = overtimeHours;
    }
    calculateSalary() {
        return this.baseSalary + this.overtimeHours * 200000;
    }
}

export class Manager extends Employee {
    constructor(id, name, baseSalary, bonus) {
        super(id, name, baseSalary);
        this.bonus = bonus;
    }
    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

export function calculateTotalSalary(employeeList) {
    return employeeList.reduce((total, emloyee) => {
        return total + emloyee.calculateSalary();
    }, 0);
}
