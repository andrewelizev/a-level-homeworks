// Lesson 01

// 1 - Done :)

// 2

let myName = "Andrew";
typeof myName === "string" ? console.log("Hello", myName) : console.log("Ошибка, не тот тип данных");

myName = 123;
typeof myName === "string" ? console.log("Hello", myName) : console.log("Ошибка, не тот тип данных");

// 3. Вывести в консоль примеры всех типов данных

console.log("Тип данных 13 -", typeof 13);                              // number
console.log("Тип данных NaN -", typeof NaN);                            // number
console.log("Тип данных Andrew -", typeof 'Andrew');                    // string
console.log("Тип данных true -", typeof true);                          // boolean
console.log("Тип данных {name: 'George'} -", typeof {name: 'George'});  // object
console.log("Тип данных null -", typeof null);                          // object
console.log("Тип данных undefined -", typeof undefined);                // undefine