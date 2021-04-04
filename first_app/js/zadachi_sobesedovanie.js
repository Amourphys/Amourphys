'use strict';

// 1
let x =5; alert(x++); // х++ выведет 5, ++х выведет 6

// 2
// [] + false - null + true;
console.log(typeof([] + false)); // string
console.log([] + false - null +true); // NaN
console.log([] + false - null + true); // NaN

// 3
//let y = 1; let x = y = 2; alert(x);
// alert выдаст 2

// 4
console.log([] + 1 + 2); // '12' - произойдет конкатенация

// 5
alert('1'[0]); // 1

//6
console.log(2 && 1 && null && 0 && undefined); // null
// И(&&) запинается на лжи(null)
// ИЛИ(||) запинается на правде

// 7
console.log(!!(1 && 2) === (1 && 2)); // false

// 8
//alert(null || 2 && 3 || 4);// 3 - в приоритете сначала выполняется И а потом ИЛИ

// 9
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); // false - это разные переменные

// 10
//alert(+'Infinity'); // будет тип данных число потому что стоит унарный +

// 11
console.log('Ёжик' > 'яблоко'); // false

// 12
console.log(0 || '' || 2 || undefined || true || false); // 2 ИЛИ запинается на правде(true)