class Square {
    constructor(public x:number) {}
}

class Circle {
    constructor(public radius:number) {}
}

function calculateArea(a :Square | Circle):number{
    if(a instanceof Square){
        return a.x * a.x;
    }else if(a instanceof Circle){
        return Math.PI * a.radius * a.radius;
    }else {
        throw new Error("lỗi")
    }
}
const a1 = new Square(5);
const b1 = new Circle(3);
console.log( calculateArea(a1));
console.log( calculateArea(b1));