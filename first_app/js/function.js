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