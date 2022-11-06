"use strict";

// function showFirstMessage() {
//     console.log('Hello world');
// }

// showFirstMessage();


// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage('Nurzhigit');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(6, 10));
// console.log(calc(2, 13));

// function calcMinus(a, b) {
//     return (a - b);
// }

// console.log(calcMinus(3, 2));
// console.log(calcMinus(3, 1));
// console.log(calcMinus(8, 1));

// function ret() {
//     let num = 40;

//     //


//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



// const logger = function() {
//     console.log("hello");
// };  

// logger();


// const calc = (a, b) => a + b;

// function Person() {
//     // В конструкторе Person() `this` указывает на себя.
//     this.age = 0;
  
//     setInterval(function growUp() {
//       // В нестрогом режиме, в функции growUp() `this` указывает
//       // на глобальный объект, который отличается от `this`,
//       // определяемом в конструкторе Person().
//       this.age++;
//     }, 1000);
// }
  
// var p = new Person();

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;

}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {return}
    }

    console.log('Done');
}

test();
 
// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.


function sayHello(name, text) {
    return text + name;
}

console.log(sayHello(' Anton', 'Privet,'));



function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));



function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        }
        else {
            str += `${num * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(10, 5));
console.log(getMathResult(20, -5));
