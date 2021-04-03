'use strict';

const arr = [1, 2, 3, 6,8];

//arr[99] = 0; // так делать нельзя
//console.log(arr.length);
console.log(arr);

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

// Методы перебора массивов

// Цикл for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Цикл for of

for (let value of arr) { // цикл для перебора массивов, псевдомассивов , строк а также MAP & SET
    console.log(value);
}

// Метод forEach

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt('', '');
const products = str.split(', '); // разбивает строку на массив с данными
products.sort(compareNum); // сортирует массив как строки
console.log(products.join('; ')); // собирает массив в строку

function compareNum(a, b) { // функция для того чтоб расставить числа в правильном порядке
    return a - b;
}

