const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Насколько вы оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Насколько вы оцените его?', '');

      personalMovieDB.movies[a] = b;// лучше использовать [] чем .
      personalMovieDB.movies[c] = d; */

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('Насколько вы оцените его?', '');

    if (a != null && b !== null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

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