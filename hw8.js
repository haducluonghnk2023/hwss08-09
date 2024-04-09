"use strict";
function ketHop(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
let a = {
    name: "minh"
};
let b = {
    age: 20
};
let c = ketHop(a, b);
console.log(c);
