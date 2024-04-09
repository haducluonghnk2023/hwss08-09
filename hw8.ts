interface A {
    name:string;
}

interface B {
    age:number;
}
function ketHop(a:A, b:B): A & B {
    return {
       ...a,
       ...b,
    }
}

let a:A = {
    name:"minh"
}

let b:B = {
    age:20
}

let c: A & B = ketHop(a,b);

console.log(c);