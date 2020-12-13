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
////console.log(`http://someurl.com/${category}/5/hthth`) // Интерполяция
//
//


//const num = 10
//
//if (num > 9) {
//    console.log('Ok')
//} else {
//  console.log('error')      
//    }
// тернарный оператор


/*const num = 100;
(num === 100) ? console.log("ok"): console.log("error") // тернарное выражение

const num2 = 1;

switch (num2) {
    case 12:
        alert('Неа')
        break;
    case 11:
        console.log('Неа')
        break;

    default:
        alert('Ну потом как нибудь!')
}*/


//let year = prompt("В каком был развал СССР?")
//
//while (year < 1991 < year){
//    alert("Not yet")
//    year = prompt("В каком был развал СССР?")
//}
//
//if(year == 1991){
//alert("все верно!")
//}
//let num = 33
//
//for (let i = 0; i < 20; i++){
//    
//    console.log(i)
//    num++;
//    
//}

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "")

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (i = 0; i < 2; i++) {

    const a = prompt("Один из просмотренных фильмов?", ''),
        b = prompt("На сколько оцените его?", '');


    if (numberOfFilms != null && numberOfFilms != '' && a != null && b != null && a != '' && b != '' && a.length < 30) {
        personalMovieDB.movies[a] = b;
        console.log('Done')
    } else {
        console.log('error');
        alert('Вы не ответили ни на один из вопросов!')
        i--
        break;


    }

}

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель")
} else if (personalMovieDB.count >= 30) {
    alert("Ну Вы и киноман!")
} else {
    alert("Error")
}
console.log(personalMovieDB)
