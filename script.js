"use strick"; // строгий режим



//let flowers = document.querySelector('.flower-1').style.color = "red";




//alert("hello")
//
//const result = confirm('it ok?');
//console.log(result)


// const answer = prompt("вам есть 18?", "182222");
//console.log(answer)


//const answers = []
//
//
//answers[0] = prompt('как вас зовут?', '');
//answers[1] = prompt('как ваша фамилия?', '');
//answers[2] = prompt('сколько вам лет?', '');
//
//document.write(answers)



//let category = 'toys'
//
//console.log(`http://someurl.com/${category}/5/hthth`) // Интерполяция


const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "")

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};


const a = prompt("Один из просмотренных фильмов?", ''),
 b = prompt("На сколько оцените его?", ''),
 c = prompt("Один из просмотренных фильмов?", ''),
 d = prompt("На сколько оцените его?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)










