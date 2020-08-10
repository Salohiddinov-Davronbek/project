const numberofMovies = +prompt('How many movies you have seen?', '' );

const personalMoviesDB = {
    count: numberofMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

const a = prompt('Name of last movie you have seen', ''),
    b = prompt('how much would you rate it', ''),
    c = prompt('Name of last movie you have seen', ''),
    d = prompt('how much would you rate it', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
