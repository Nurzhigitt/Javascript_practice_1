"use strict";

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(option.name);

// delete option.name;
// console.log(option);

let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Property ${i} imeet znachenie ${option[key][i]}`);
            counter++;
        }
    } 

    else {
        console.log(`Property ${key} imeet znachenie ${option[key]}`);
        counter++;
    }
}

console.log(counter);



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