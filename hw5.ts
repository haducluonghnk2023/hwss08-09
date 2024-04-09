// sự khác biệt giữa union và intersection
// union cho phép bạn chỉ định 1 biến hoặc tham số có thể nhận giá trị từ nhiều loại khác nhau
let myVar :number | string ;
myVar =10; // hợp lệ
myVar = "sdfg"
// myVar= boolean; // lỗi vì kiểu boolean không nằm trong union khai báo ở trên
// intersection kết hợp nhiều kiểu dữ liệu thành 1 kiểu mới . khi sử dụng thì 1 trong những biến phải thỏa mãn các điều kiện kết hợp
interface Dog {
    name: string;
    bark(): void;
}
interface CanRun {
    run(): void;
}
type c = Dog & CanRun;

const dog: c = {
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