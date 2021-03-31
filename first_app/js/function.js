'use strict';

// Function declaration

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function expression

const logger = function() {
    console.log('Hello');
};

logger();

// Стрелочные функции

const calcul = (a, b) => {
    console.log('3');
    return a + b;
};

// Callback function - функция которая должна выполниться после того как другая функция завершила свое выполнение

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {  // 1 variant
    console.log('Я прошел этот урок!');
});

function done() {  // 2 variant
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

// Методы строк

const logg = 'Hello world';

console.log(logg.slice(6, 11)); // с какого символа по какой вырезать
console.log(logg.slice(6)); //с этого символа и до конца
console.log(logg.slice(-5, -1)); // с конца строки в начало

console.log(logg.substring(6, 11)); // то же самое, только нельзя использовать отрицательные значения

console.log(logg.substr(6, 5)); // говорит с какого символа и сколько нужно вырезать

// Методы чисел

const numb = 12.2;
console.log(Math.round(numb)); // округление

const test = '12.2px';
console.log(parseInt(test)); // перевод в другую систему исчичления
console.log(parseFloat(test)); // возвращение числа с плавающей точкой