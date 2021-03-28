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