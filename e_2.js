'use strict';

/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

function isKeyNam(str, obj) {
    return str in obj;
}

/*
let objj = {};
objj.a = 1;
objj.b = 2;
objj.c = 3;


let st = 'a';

let res = isKeyNam(st, objj);
console.log(res);
*/