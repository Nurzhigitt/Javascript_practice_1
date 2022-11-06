"use strict";

let age = prompt("Skolko vam let?", '');

// if (age < 18) {
//     alert('Ranovato ewe!');
// } else if (age > 100) {
//     alert('Posznovato ewe!');
// }
// else {
//     alert('Vi mozhete voiti!');
// }


switch (age) {
    case '18':
        alert('Vi mozhete voiti!');
        break;
    
    case '100':
        alert('Posznovato ewe!');
        break;

    default:
        alert('Znachenie neizvestno!');
}

// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };

// option.makeTest();

// const {border, bg} = option.colors; // destryktorizacia
// console.log(border);

// console.log(Object.keys(option).length);


// let counter = 0;
// for (let key in option) {
//     if (typeof(option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`Property ${i} imeet znachenie ${option[key][i]}`);
//             counter++;
//         }
//     } 

//     else {
//         console.log(`Property ${key} imeet znachenie ${option[key]}`);
//         counter++;
//     }
// }

// console.log(counter);



// function first() {
//     // do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJs(lang, callback) {
//     console.log(`I am learning: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I passed this lesson!');
// }

// learnJs('Javascript', done);

