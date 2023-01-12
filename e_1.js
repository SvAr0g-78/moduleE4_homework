'use strict';
/* Написать, функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

function key(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`key = ${key}, value = ${obj[key]}`);
        }
    }
}

// let objj = {};
// objj.a = 1;
// objj.b = 2;
// objj.c = 3;

// let objj1 = Object.create(objj);
// objj1.ownA = 4;
// objj1.ownB = 5;
// objj1.ownC = 6;

// key(objj1);