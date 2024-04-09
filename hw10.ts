interface PerSon {
    name: string;
    age: number;
}
interface Employee {
    person:PerSon;
    employeeId : string;
}

const employee: Employee = {
    person: {
        name: "John Doe",
        age: 30
    },
    employeeId: "E12345"
};
console.log(employee);
