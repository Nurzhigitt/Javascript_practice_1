"use strict";
// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num <= 55);


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
    
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// *
// ** 
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 4; i++) {
//     console.log(`First level: ${i}`);
    
//     for (let j = 0; j < 4; j++) {
//         console.log(`Second level: ${j}`);
        
//         for (let k = 0; k < 5; k++) {
//             if (k === 3) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// let i = 5;
// while (i < 11) {
//     console.log(i);
//     i++
// }

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i >= 9; i--) {
//     if (i === 13) break; {
//         console.log(i);
//     }
// }

// При помощи цикла for вывести числа от 30 до 18 в консоль. В обратном порядке. Когда цикл дойдет до числа 22 - остановить весь цикл

// for (let i = 30; i >= 18; i--) {
//     if (i === 22) break; {
//         console.log(i);
//     }
// }

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let j = 2;
// while (j <= 16) {
//     if (j % 2 === 0) {
//         j++;
//         continue;
//     }
//     else {
//         console.log(j)
//     }
//     j++;
// }


// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers [i - 4] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;


// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);
// return result;


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     }
//     else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);
// return data;

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];


//      *
//     ***
//    *****
//   *******
//  *********
// ***********

