const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const a = prompt('Сколько фильмов вы уже посмотрели?', ''),
      b =('На сколько оцените его?', ''),
      c =('Сколько фильмов вы уже посмотрели?', ''),
      d =('На сколько оцените его?', '');


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);