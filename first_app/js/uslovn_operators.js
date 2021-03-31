'use strict';

// условные операторы

let num = 50;

    if(num < 49) {
        console.log('Error');
    } else if (num > 100) {
        console.log('Much many');
    } else {
        console.log('Ok');
    }

    (num === 50) ? console.log('Ok') : console.log('Error');

    switch (num) {
        case 49:
            console.log('Not right');
            break;
        case 100:
            console.log('Not right');
            break;
        case 50:
            console.log('All right');
            break;
        default:
            console.log('Another choice');
            break;      
    }