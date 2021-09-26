// Lesson 03


console.log('HW1 ==================================================');
// HW1
// Получить от юзера число.
// Получить сумму квадаров всех чисел от 1 до числа, которое ввел юзер. Пример:
// Юзер ввел 4
// (1 * 1) + (2 * 2) + (3 * 3) + (4 * 4) = 30
// Вывести в консоль результат
// Привести во вторую степерь можно через оператор **. 3 ** 2 = 9
let userNumber;

// userNumber = prompt('Enter your number, please:');
userNumber = 10;

function calcSquareRootsUserNumbers (userNumber) {
    let squareRootsNumber;
    let arraySquareNumbers = [];
    let sumNumbersResult;

    for(let i = 1; i <= userNumber; i++) {
        squareRootsNumber = i ** 2;
        arraySquareNumbers.push(squareRootsNumber);
    }
    
    sumNumbersResult = arraySquareNumbers.reduce((sum, currentItem) => sum + currentItem, 0);
    
    return sumNumbersResult;
}    

// alert(`Sum of all square roots of numbers from 1 to ${userNumber} is ${calcSquareRootsUserNumbers(userNumber)}`);
console.log(`Sum of all square roots of numbers from 1 to ${userNumber} is ${calcSquareRootsUserNumbers(userNumber)}`);



console.log('HW2 ==================================================');
// HW2
// Есть массив [3, 5, 12, 9, 23, 93, 17]
// Отфильтровать его так, чтобы остались только те числа, которые больше 2 и меньше 20. И потом получить их сумму.

let arrayForFilter = [3, 5, 12, 9, 23, 93, 17];
let sumFilteredArray;

function calcFilteredArraySum (arr) {
    let arrayFiltered;
    let calcSumResult;
    
    arrayFiltered = arr.filter(item => item > 2 && item < 20);
    
    console.log(arrayFiltered);
    
    calcSumResult = arrayFiltered.reduce((sum, currentItem) => sum + currentItem, 0);

    return calcSumResult;
}

sumFilteredArray = calcFilteredArraySum(arrayForFilter);

console.log(sumFilteredArray);



console.log('HW3 ==================================================');
// HW3
// Дан массив [[1, 6, 3, '6'], [10, 15, 13, '10']]. Найти сумму элементов, которые являются числами и которые кратны двум
let arrayNumbers = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let resultMain;

function calcNumbers (arr) {
    let resultInnerArray;
    let calcSumInnerArray;
    let arrayMain = [];
    let resultSum;

    arrayNumbers.forEach(function(item, i) {
        resultInnerArray = arr[i].filter(item => typeof(item) === 'number' && item % 2 === 0);
        calcSumInnerArray = resultInnerArray.reduce((sum, currentItem) => sum + currentItem, 0);
        arrayMain.push(calcSumInnerArray);
    });

    resultSum = arrayMain.reduce((sum, currentItem) => sum + currentItem, 0);

    return resultSum;
}    

resultMain = calcNumbers(arrayNumbers);

console.log(resultMain);



console.log('HW4 ==================================================');
// HW4
// Написать функцию, которая устанавливает новые свойства в объект.
// Функция принимает в себя 3 аргумента - key, value, obj
// key - свойство, которое хотим добавить. Принимаем это от юзера.
// value - значение свойства. Принимаем это от юзера.
// obj - объект, в который хотим добавить новое свойство.
// Если юзер ввел ключ, который уже есть в объекте, то выводим сообщение - "Уже есть", если ключа нет, то устанавливаем его в объект.
let key;
let value;
let obj = {};
let result;


// Для бесконечной проверки :)
// while (key !== null) {
//     key = prompt('Enter name of your property, please:');
//     if (key === null) break;
//     value = prompt('Enter value of your property, please:');
//     if (value === null) break;
//     result = setNewProperties(key, value, obj);
//     console.log(result);
// }


// key = prompt('Enter name of your property, please:');
// value = prompt('Enter value of your property, please:');
key = 'name';
value = 'Andrew';

result = setNewProperties(key, value, obj);
console.log(result);

// key = prompt('Enter name of your property, please:');
// value = prompt('Enter value of your property, please:');
key = 'age';
value = '45';

result = setNewProperties(key, value, obj);
console.log(result);

// key = prompt('Enter name of your property, please:');
// value = prompt('Enter value of your property, please:');
key = 'name';
value = 'Elizev';

result = setNewProperties(key, value, obj);
console.log(result);


function setNewProperties (key, value, obj) {
    key in obj ? console.log('Already exist!') : obj[key] = value;

    return obj;
}