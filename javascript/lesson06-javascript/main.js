// GitHub https://github.com/andrewelizev/a-level-homeworks

// Lesson 06



console.log('HW1 ==================================================');
// HW1
// Таблица умножения
// Сделать таблицу умножения, используя DOM createElement и innerText. Создайте таблицу, вложенные
// строки и ячейки в циклах.

function tableMultiplication (rows, cols) {
    let mainTable = document.getElementById("tableMulti");
    let tr;
    let td;

    for (let i = 1; i <= rows; i++) {
        tr = document.createElement('tr');
        mainTable.append(tr);
        for (let j = 1; j <= cols; j++) {
            td = document.createElement('td');
            td.innerHTML = (i * j);
            tr.append(td);
        }
    }
}

tableMultiplication(20, 30);



console.log('HW2 + HW3 ============================================');
// HW2
// Подсветить ячейку над которой находится курсор мыши. Используйте события mouseover и mouseout,
// и style.backgroundColor для подсветки.
// Читкоды: в обработчик события в качестве this передается элемент, на котором событие произошло;
// td.onmouseover = function(event){
//     console.log(this, event) //event -   это объект с информацией о событии,
//                              //передается первым параметром в обработчик события.
// }
//
// HW3
// Подсветить строку и столбец, в которой находится подсвеченная ячейка. Используйте parentElement
// (родительский элемент элемента DOM), и список его детей: children.
// Читкоды:
// в обработчик события в качестве this передается элемент, на котором событие произошло;
// у td есть свойство cellIndex, в котором лежит номер ячейки;
// у tr, аналогично есть свойство rowIndex - номер строки;

let mainTable = document.getElementById("tableMulti");

mainTable.onmouseover = function(event) {
    let td = event.target;
    let tr = td.parentNode;
    let cellCurrentIndex = td.cellIndex;

    if (td.tagName !== 'TD') return;

    for (let i = 0; i < tr.childNodes.length; i++) {
        tr.childNodes[i].style.backgroundColor = 'lightgrey';
    }

    for (let tdIndex of mainTable.getElementsByTagName('td')) {
        if (tdIndex.cellIndex === cellCurrentIndex) {
            tdIndex.style.backgroundColor = 'lightgrey';
        }
    }

    td.style.backgroundColor = 'grey';
    td.style.color = 'white';
};

mainTable.onmouseout = function(event) {
    let td = event.target;
    let tr = td.parentNode;
    let cellCurrentIndex = td.cellIndex;

    if (td.tagName != 'TD') return;

    for (let i = 0; i < tr.childNodes.length; i++) {
        tr.childNodes[i].style.backgroundColor = 'white';
    }

    for (let tdIndex of mainTable.getElementsByTagName('td')) {
        if (tdIndex.cellIndex === cellCurrentIndex) {
            tdIndex.style.backgroundColor = 'white';
        }
    }

    td.style.backgroundColor = 'white';
    td.style.color = 'black';
};



console.log('HW4 + HW5 ============================================');
// HW4
// Сделайте ваш калькулятор из первых занятий используя DOM и элементы input (в т. ч. type="number" для чисел)
// Каждому полю ввода присвойте тот или иной id для обращения в обрабочтике события.
// Для запуска раcчета используйте, например <button id="calc">
// и calc.onclick = function(){alert((+someIdOfInput1.value) + (+someIdOfInput2.value))
// просуммировали два поля ввода с id someIdOfInput1 и someIdOfInput2
// }
// Также можете создать поле ввода для результата и записывать результат в value этого поля.
//
// HW5
// Calc Live. Сделайте расчет живым, т.е. обновляющимся по событию oninput каждого поля ввода, влияющего на результат.
// Нет смысла копировать одну и ту же калькуляцию, поэтому вначале задекларируйте функцию расчета, а потом присвойте
// её в качестве обработчика события в каждом поле ввода:
// function calc() {
//     result.value = (+input1.value) + (+input2.value)
// }
// input1.oninput = calc
// input2.oninput = calc

function makeCalc (num) {
    let mainForm1 = document.getElementById(`formCalc${num}`);
    let input1;
    let input2;
    let inputResult;
    let sumButton;

    input1 = document.createElement('input');
    input1.type = 'number';
    input1.id = `inputNum1${num}`;
    mainForm1.append(input1);

    mainForm1.append(document.createElement('span').innerHTML = ' + ');

    input2 = document.createElement('input');
    input2.type = 'number';
    input2.id = `inputNum2${num}`;
    mainForm1.append(input2);

    mainForm1.append(document.createElement('span').innerHTML = ' = ');

    inputResult = document.createElement('input');
    inputResult.id = `inputNumResult${num}`;
    inputResult.disabled = 'true';
    mainForm1.append(inputResult);

    if (num == 2) {
        return;
    } else {
        sumButton = document.createElement('button');
        sumButton.id = `calcSumButton${num}`;
        sumButton.innerHTML = 'Calculate';
        mainForm1.append(sumButton);
    }
}

makeCalc(1);

let but = document.getElementById('calcSumButton1');

but.onclick = function() {
    let result = document.getElementById('inputNumResult1');
    let num1 = +document.getElementById('inputNum11').value;
    let num2 = +document.getElementById('inputNum21').value;

    return result.value = num1 + num2;
};

// Калькулятор для HW5 - Live Calc
makeCalc(2);

let inputNum1Live = document.getElementById('inputNum12');
let inputNum2Live = document.getElementById('inputNum22');

function calcSum() {
    let result = document.getElementById('inputNumResult2');
    let num1 = +inputNum1Live.value;
    let num2 = +inputNum2Live.value;

    return result.value = num1 + num2;
}

inputNum1Live.oninput = calcSum;
inputNum2Live.oninput = calcSum;