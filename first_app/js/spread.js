'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Ссылка на уже существующий обьект

copy.a = 10;

console.log(copy);
console.log(obj);

// Использование цикла

function copied(mainObj) {
    let objCopied = {};

    let key;
    for (key in mainObj) {
        objCopied[key] = mainObj[key];
    }

    return objCopied;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copied(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// Object.assign - метод для помещения миниобьекта в другой обьект

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);// клонирование обьекта(поверхностная копия)

clone.d = 20;

console.log(add);
console.log(clone);

// Копирование массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'qwerty';
console.log(newArray);
console.log(oldArray);

// Spread ...

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

console.log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};