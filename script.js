const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastViewFilms = prompt('Последний просмотренный фильм?', ''),
      ratind = +prompt('На сколько оцените его?', '');
      

const lastViewFilms2 = prompt('Последний просмотренный фильм?', ''),
      rating2 = +prompt('Насколько оцените его?', '');

personalMovieDB.movies[lastViewFilms] = ratind;
personalMovieDB.movies[lastViewFilms2] = rating2;

console.log(personalMovieDB);
