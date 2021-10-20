// GitHub https://github.com/andrewelizev/a-level-homeworks

// Lesson 07



console.log('HW1 ==================================================');
// HW1
// makeProfileTimer
// Напишите функцию makeProfileTimer, которая служит для замера времени выполнения другого кода и работает следующим образом:
//    var timer = makeProfileTimer()
//    alert('Замеряем время работы этого alert');  //некий код, время выполнения которого мы хотим измерить с высокой точностью
//    alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(),
//                    // т. е. измерить время выполнения alert
// Используйте performance.now()

function makeProfileTimer(funcForTimer) {
    let timeStart = performance.now();

    funcForTimer();

    let timeEnd = performance.now();
    let result = timeEnd - timeStart;

    console.log(result);
    return result;
}

function testAlert() {
    alert('Замеряем время работы этого alert');
}

makeProfileTimer(testAlert);


console.log('HW2 ==================================================');
// HW2
// makeSaver
// Напишите функцию makeSaver, которая:
//     var saver = makeSaver(Math.random) //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random
//                                       // в примере). На этом этапе Math.random НЕ вызывается
//     var value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
//     var value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную
//                                       //в makeSaver функцию;
//     value1 === value2                 // всегда true

//     var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
//     var value3 = saver2()
//     var value4 = saver2()

//     value3 === value4 // тоже должно быть true
// Таким образом makeSaver решает две задачи:
// Навсегда сохраняет результат функции. Это актуально, например, для Math.random.
// Действует лениво, то есть вызывает Math.random только тогда, когда результат действительно нужен. Если же по каким-то причинам
// значение не понадобится, то Math.random даже не будет вызван

function makeSaver(func) {
    let num;
    let save = false;

    return function() {
        if (save === true) {
            return num;
        }
        save = true;
        return num = func();
    };
}

let saver = makeSaver(Math.random);

let value1 = saver();
console.log(value1);

let value2 = saver();
console.log(value2);

console.log(value1 === value2);

let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)]);

let value3 = saver2();
console.log(value3);

let value4 = saver2();
console.log(value4);

console.log(value3 === value4);



console.log('HW3 ==================================================');
// HW3
// Final Countdown
// Напишите код, который будет делать обратный ежесекундный отсчёт в консоли, используя console.log. Используйте Self Invoked Function для создания замыкания и setTimeout для задержки вывода. Результатом должно быть:
//    5 //пауза 1 секунда
//    4 //пауза 1 секунда
//    3 //пауза 1 секунда
//    2 //пауза 1 секунда
//    1 //пауза 1 секунда
//    "поехали!

let num = 5;

setTimeout(function tick () {
    if (num > 0) {
        console.log(num);
        num--;
        setTimeout(tick, 1000);
    } else {
        console.log('поехали!');
    }
}, 1000);



console.log('HW4 ==================================================');
// HW4
// myBind
// Изучите встроенную функцию bind, и сделайте свою версию, которая позволит определить "значение по умолчанию" не только для первых параметров,
// но для любых других, например для степени в Math.pow:
// Массив, который идет третьим параметром определяет, какие поля должны подменяться значением по умолчанию, а какие - задаваться в последствии (undefined).

function myBind(func, context, argMask) {

    return function (...arg) {

        let newArgs = argMask.map(function(item) {

            if (item === undefined) {
                return arg.shift();
            } else {
                return item;
            }

        });

    return func.call(context, ...newArgs);
    };
}

let pow5 = myBind(Math.pow, Math, [undefined, 5]);
console.log(pow5(2));

let cube = myBind(Math.pow, Math, [undefined, 3]);
console.log(cube(3));

let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5,undefined, 8,undefined, 9]);
console.log(chessMin(-1,-5,3,15));

let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
let someNumber = zeroPrompt("Введите число");
console.log(someNumber);