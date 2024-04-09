"use strict";
function kiemTraDuLieu(variable) {
    if (typeof variable === 'number') {
        console.log(variable ** 2);
    }
    else if (typeof variable === 'string') {
        console.log(variable.length);
    }
    else if (Array.isArray(variable)) {
        const sum = variable.reduce((a, i) => {
            return a + i;
        }, 0);
        console.log(sum);
    }
}
kiemTraDuLieu(10);
kiemTraDuLieu("asdfghjkl;ưertyui ");
kiemTraDuLieu([1, 2, 3, 4, 32, 5, 7634, 1]);
