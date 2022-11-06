"use strict";

// const str = "Test";

// // console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));


// const logg = "Hello world";

// console.log(logg.slice(6, 10));
// console.log(logg.substr(6, 10));
// // console.log(logg.substring(6, 10));


// const num = 12.2;
// console.log(Math.round(num));


// const num1 = 12.7;
// console.log(Math.round(num1));


// const test = "12.2px";
// console.log(parseFloat(test));


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Skolko filmov vi yzhe posmotreli?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Skolko filmov vi yzhe posmotreli?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// Aumatization 
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Odin iz poslednix prosmotrennix filmov?', '').trim();
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
}

rememberMyFilms();



function detecctPersonalLevel() {
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
}

detecctPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Vash luybimiy zhanr pod nomerom ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


function calculateVolumeAndArea() {

}

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "Pri vicheslenii proizoshlo owipka";
    }

    let volume = 0;
    let area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Obiem kuba: ${volume}, plowad vsei poverhnosti: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea("hello"));


function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Owibka. Proverte pravilnost vvedennogo nomera mesta";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Takix mest ne sywestvyet!";
    }

    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(33));



function receiveCoupeNumber(seatOn) {
    if (typeof(seatOn) !== 'number' || seatOn < 0 || !Number.isInteger(seatOn)) {
        return "Owibka!";
    }

    if (seatOn === 0 || seatOn > 36) {
        return "Takix mest netu!";
    }

    return Math.ceil(seatOn / 4);
}

console.log(receiveCoupeNumber(32));


// 


// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Owibka, proverte dannie";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'chasov';
//             break;
        
//         case 1:
//             hoursStr = "chas";
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'chasa';
//             break;
//         default:
//             hoursStr = 'chasov';
//     }

//     return `Eto ${hours} ${hoursStr} i ${minutes} minut`;
// }

// console.log(getTimeFromMinutes(55));


function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Owibka. Proverte dannie!";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = "chasov";
            break;
        
        case 1:
            hoursStr = "chas";
            break;

        case 2:
        case 3:
        case 4:
            hoursStr = "chasa";
            break;
        
        default:
            hoursStr = "chasov";
            break;
    }

    return `Eto ${hours} ${hoursStr} i ${minutes} minut`;
}

console.log(getTimeFromMinutes(185));


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    }
    else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 2, 5, 7));



function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        }
        else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(5));