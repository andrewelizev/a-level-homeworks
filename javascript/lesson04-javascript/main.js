// Lesson 04


console.log('HW1 ==================================================');
// HW1
// Написать функцию bindFunc, которая принимает в себя 2 + аргументов (Точно должна принять 2 аргумента, а дальше сколько угодно).
// 1 аргумент - какая-то функция
// 2 аргумент - значение контекста
// 3 + ... аргументы - любое кол-во аргументов
// Эта функция, должна устанавливать контекст для функции, которая в первом аргументе, и возвращать эту функцию с новым контекстом.
// Сам контекст, который мы хотим установить, находиться во втором аргументе
const now = new Date();
let bindResult;
let person = {
    name: '',
    yearBirth: '',
    calcAge() {
        return (now.getFullYear()) - this.yearBirth;
    },
};

function yourAge() {
    let name;
    let year;
    let stringResult;

    name = prompt('Enter your name, please');

    if (name === null || name === undefined) {
        return 'Good bye!';
    }

    while (isNaN(year)) {
        year = Number(prompt('Enter your year of birth, please'));
        if (year === 0) {
            return 'Good bye!';
        }
    }

    this.name = name;
    this.yearBirth = year;

    stringResult = `${this.name}, you are ${this.calcAge()} years old!`;
    
    return stringResult;
}

function bindFunc(func, newThis, ...args) {
    let newFunc;

    newFunc = func.bind(newThis);
    
    return newFunc;
}

bindResult = bindFunc(yourAge, person);

console.log(bindResult());



console.log('HW2 ==================================================');
// HW2
// Написать функцию, которая не принимает никаких аргументов. В теле функции написать логику для нахождения суммы значений любого количества ключей (значения ключей должны быть больше нуля) из переданного контекста.
// Обращаться к objectA напрямую нельзя :)
// Пример
// const func = function() {
//  this.a + this.b + .....
// }
// const objectA = {
//  a: 1,
//  b: 2,
//  c: 3,
// }
let funcResult;
const objectA = {
    a: 1,
    b: 2,
    c: 3,
    d: -2,
    e: 'test',
    f: 4,
    g: 5,
    h: '-256',
};

function calcSumKeys() {
    let arrObjKeys;
    let arrFiltered;
    let sumObjKeys;

    arrObjKeys = Object.values(this);
    arrFiltered = arrObjKeys.filter(item => +item && item > 0);
    sumObjKeys = arrFiltered.reduce((sum, current) => sum + current, 0);

    return sumObjKeys;
}

funcResult = calcSumKeys.call(objectA);

console.log(funcResult);



console.log('HW3 ==================================================');
// HW3
// Написать функцию, которая возвращает новый массив, в котором должны быть только четные числа, которые больше двуx и меньше 10. Новый массив будет состоять из значений ключа values из контекста, если такого ключа нет, то выводим сообщение "Не найдено".
// Обращаться к valObject0 напрямую нельзя :)
// Если хотите использовать map, то внутри map this всегда равен глобальному объекту. Чтобы это поменять передаем нужное значение this во второй аргумент map -
// arr.map(() => {}, this);
// Пример:
// function getNewArray() {
//  ....
// };
// const valObject0 = {
//  values: [1, '2', 4, 8, '8',  3, 10, null, false],
// };
// const result = getNewArray...; // Ссылаясь на массив ключа values из valObject0 [4, 8]
let result;
const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
};

function getNewArray() {
    let arrSrc;
    let arrNew;

    if ('values' in this) {
        arrSrc = this.values;
        arrNew = arrSrc.filter(item => typeof item === 'number' && item % 2 === 0 && item > 2 && item < 10);

        return arrNew;
    } else {
        return "Не найдено";
    }
}
   
result = getNewArray.call(valObject0);

console.log(result);