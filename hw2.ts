interface Person {
    name: string;
    age: number;
}
function checkProperties(obj:any):obj is Person {
    return typeof obj.name === 'string' && typeof obj.age === 'number'
}
function isValidObj(obj:any):boolean {
    return checkProperties(obj)
}
const validateObj = { name:  "hello", age:10 };
const validateObj1 = { name: "a", age:"A"}
console.log(isValidObj(validateObj));
console.log(isValidObj(validateObj1));

    