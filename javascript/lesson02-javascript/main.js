// Lesson 02

// HW1:
// Есть массив ['Капуста', 'Репа', 'Редиска', 'Морковка']. Надо вывести в консоль 
// строку 'Капуста | Репа | Редиска | Морковка';

let arr1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let resultArr1;

resultArr1 = arr1.join(' | ');
console.log(resultArr1);



// HW2:
// Есть строка 'Вася;Петя;Вова;Олег'. Используя стандартные методы строк получить массив их имен;
// const newArr = .....; // ["Вася", "Петя", "Вова", "Олег"]

let string2 = 'Вася;Петя;Вова;Олег';
let arr2;

arr2 = string2.split(';');
console.log(arr2);



// HW3:
// Напишите функцию hello2(), которая при вызове будет принимать переменную (в аргументы) 
// name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
// В случае отсутствующего аргумента выводить «Привет, гость»

function hello3 (name = 'гость') {
    return console.log(`Привет, ${name}`);
}

hello3('Григорий');
hello3();



// HW4:
// Есть массив ['яблоко', 'ананас', 'груша']
// Привести каждый элемент массива в верхний регистр (сделать все слово большими буквами) 
// и получить результат (новый массив) в новую переменную.
// const fruits = ['яблоко', 'ананас', 'груша'];
// const fruitsInUpperCase = ....; // тут должен быть массив, в котором ['ЯБЛОКО', 'АНАНАС', 'ГРУША']

let fruits = ['яблоко', 'ананас', 'груша'];
let fruitsInUpperCase;

fruitsInUpperCase = fruits.map(function(item, i, fruits) {
    return item.toUpperCase();
});
console.log(fruitsInUpperCase);



// HW5:
// Написать функцию addOneForAll, которая может принять неограниченное кол-во аргументов.
// Добавить к каждому аргументу 1 и вернуть новый массив с новыми значениями.
// Пример:
// передал в массив такие числа - 1, 2, 3, 4
// функция добавляет к каждму числу + 1
// функция возвращает новый массив, в котором новые значения
// const val = addOneForAll(1, 2, 3, 4);
// console.log(val); [2, 3, 4, 5]

let arr5 = addOneForAll(1,2,3,4,5,6,7);

function addOneForAll (...items) {
    return newArray = items.map(function(item) {
        return ++item;
    });
}

console.log(arr5);



// HW6:
// Написать функцию getSum, которая может принять неограниченное кол-во аргументов и возвращает их сумму.
// const val = getSum(1, 2, 3, 4);
// console.log(val); // 10

let val = getSum(7, 8, 9, 10);

function getSum(...numbers) {
    let sum = null;
    numbers.forEach(function(item) {
        sum += item;
    });
    return sum;
}

console.log(val);



// HW7:
// Есть массив [1, 'hello', 2, 3, 4, '5', '6', 7, null]. Отфильтровать массив так, чтобы 
// остались только числа. Сделать можно любым способом из того, что учили.
// const numberArray = ....; // [1, 2, 3, 4, 7];

let arr7 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

let numberArray = arr7.filter(item => typeof(item) === 'number');

console.log(numberArray);



// HW8:
// Написать функцию arrayTesting, которая принимает в себя любой массив (в аргументы)
// функция проверяет есть ли в массиве хоть одно true значение
// и если оно есть, то возвращаем из функции строку 'Нашли true значение', если его нет - 'Ничего нет'
// const haveTrueValue = arrayTesting([0, false, null, 1]); // Нашли true значение (потому что есть хотябы одно true значение - 1)
// const dontHaveTrueValue = arrayTesting([0, false, null, 0]); // Ничего нет

function arrayTesting(arr) {
    let haveTrueValue = 'Нашли true значение';
    let dontHaveTrueValue = 'Ничего нет';

    arr.find(item => !!item) ? console.log(haveTrueValue) : console.log(dontHaveTrueValue);
}

arrayTesting([0, false, null, 1]);
arrayTesting([0, false, null, 0]);