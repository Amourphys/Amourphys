'use strict';

// To string 
// 1 - обьект String
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2 - конкатенация, при сложении со строкой число превращается в строку
console.log(typeof(null + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 +'px';

// To number
// 1 Number
console.log(typeof(Number('string')));

// 2 - унарный +
console.log(typeof(+'5'));

// 3 - парсинг
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', ' ');

// To boolean
// 0, '', null, undefined, NaN - to false

// 1
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(!!'4444'));