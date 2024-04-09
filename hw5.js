"use strict";
// sự khác biệt giữa union và intersection
// union cho phép bạn chỉ định 1 biến hoặc tham số có thể nhận giá trị từ nhiều loại khác nhau
let myVar;
myVar = 10; // hợp lệ
myVar = "sdfg";
const dog = {
    name: "Buddy",
    bark() {
        console.log("Woof!");
    },
    run() {
        console.log("Running...");
    }
};
dog.run();
dog.bark();
// với sự kết hợp này thì c có cả sủa và chạy
// => union là cho phép biến chứa 1 trong các kiểu dữ liệu được chỉ định
// còn intersection là bắt buộc các biến phải thỏa mãn tất cả các điều kiện được kết hợp
// union là kí hiệu bằng dấu | , còn intersection được kí hiệu là &
