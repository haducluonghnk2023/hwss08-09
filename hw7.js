"use strict";
function kiemTraLoaiDuLieu(variable) {
    if (typeof variable === 'number') {
        console.log('Biến là một số.');
    }
    else if (Array.isArray(variable)) {
        console.log('Biến là một mảng.');
    }
    else if (typeof variable === 'object') {
        console.log('Biến là một đối tượng.');
    }
    else {
        console.log('Không thể xác định loại dữ liệu của biến.');
    }
}
kiemTraLoaiDuLieu(5);
kiemTraLoaiDuLieu([1, 2, 3]);
kiemTraLoaiDuLieu({ name: 'John', age: 30 });
// kiemTraLoaiDuLieu('Hello'); // Output: Không thể xác định loại dữ liệu của biến.
