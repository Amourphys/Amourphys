const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Насколько вы оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Насколько вы оцените его?', '');

      personalMovieDB.movies[a] = b;// лучше использовать [] чем .
      personalMovieDB.movies[c] = d;

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