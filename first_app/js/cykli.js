'use strict';

// Циклы

// While

while (num <= 55) {
    console.log(num);
    num++;
}

// Do While

do {
    console.log(num);
    num++;
}
while (num < 55);

// For

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}