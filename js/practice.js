"use strict";
const numberOfFilms = prompt('Skolko filmov vi yzhe posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// Aumatization 
for (let i = 0; i < 2; i++) {
    const a = prompt('Odin iz poslednix prosmotrennix filmov?', '');
    const b = prompt('Na skolko ocenite ego?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }
    else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Prosmotreno dovolno malo filmov");
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Vi klassicheskiy zritel");
}
else if (personalMovieDB.count >= 30) {
    console.log('Vi kinoman');
}
else {
    console.log('Proizoshlo owibka');
}
console.log(personalMovieDB);




// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }


// if(num < 48) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok!');
// }


// (num === 50) ? console.log('Ok!') : console.log('Error');


// const num = 50;

// switch (num) {
    
//     case 51:
//         console.log('v tochky!');
//         break;

//     case 49:
//         console.log('v tochky!');
//         break;
    
//     default:
//         console.log('Net pravilnix otvetov brat');
//         break;
// }


// const lines = 5;
// let result = '';

// for (let i = 1; i <= lines; i++) {
//     for (let j = 1; j < lines - i; j++) {
//         result += "/";
//     }

//     for (let j = 1; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


// let sum = 0;
// let p = 0;
// while (p <= 3) {
//     sum = sum + p;
//     p++;
// }

// console.log('sum = ' + sum);



