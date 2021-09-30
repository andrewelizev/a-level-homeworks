// GitHub https://github.com/andrewelizev/a-level-homeworks

// Lesson 05



console.log('HW1 ==================================================');
// HW1
// Дан объект с городами и странами.
// Написать функцию getCity. Эта функция (getCity) должна вернуть новый массив, элементы которого 
// будут преобразованы в данный формат: <Столица> - это <Страна>.
// Доступ к объекту может быть любым (через контекст, напрямую и т.д.)
// Можно использовать Object.entries метод )
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

function getCity (obj) {
    let arrCitiesAndCountries = [];
    
    Object.entries(obj).forEach(([key, value]) => {
        arrCitiesAndCountries.push(`${key} – это ${value}`); 
    });
    
    return arrCitiesAndCountries;
}

const result = getCity(citiesAndCountries);

console.log(result);



console.log('HW2 ==================================================');
// HW2
// Cоздать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства 
// ru будет массив с названиями дней недели на русском, а en - на английском.
// После написать функцию которая будет выводить в консоль название дня недели пользуясь выше 
// созданным объектом (доступ к объекту можно получить напрямую).
// Все дни недели начинаются с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье).
// Функция принимает в аргументы 2 параметра:
// lang - название языка дня недели
// day - число дня недели
// Можно вспомнить про метод indexOf(). А может можно и без него :)
// ------------------------------------------------
// // Пример 1
// getNameOfDay('en', 7) // 'Sunday'
// ------------------------------------------------
// // Пример 2
// getNameOfDay('ru', 3) // 'Среда'
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
let nameOfDay;

function getNameOfDay (lang, datNumber) {
    let arrOfDays = this[lang];
    let dayName = arrOfDays[--datNumber];

    return dayName;
    // return namesOfDays[lang][--datNumber];
}

nameOfDay = getNameOfDay.call(namesOfDays, 'en', 7);
console.log(nameOfDay);

nameOfDay = getNameOfDay.call(namesOfDays, 'ru', 3);
console.log(nameOfDay);



console.log('HW3 ==================================================');
// HW3
// Написать универсальную функцию setProto, которая принимает в себя 2 аргумента (currentObj, protoObj). 
// Функция должна устанавливать прототип (protoObj) для currentObj. То есть после вызова функции мы должны получить результат:
// const person = {
//     name: 'Vlad'
// };
// const person1 = {
//     age: 1
// };
// function setProto (currentObj, protoObj) {
//     code
// }
// setProto(person1, person);
// Теперь прототипом для объекта person1 выступает объект person
const person = {
    name: 'Vlad'
};

const person1 = {
    age: 1
};

function setProto (currentObj, protoObj) {
    currentObj.__proto__ = protoObj;
}

setProto(person1, person);

console.log(person1);
console.log(person1.name);



console.log('HW4 ==================================================');
// HW4
// Создать базовый объек person. Этот объект должен выступать в роли прототипа для объекта person1.
// В объекте person должны быть такие методы:
// метод для установки имени и возвраста (setName, setAge)
// метод для получения имени и возвраста (getName, getAge)
// метод для валидации возраста (ageValidation)
// person1.setName(...); // установили новое имя
// person1.getName(); // имя
// person1.setAge(...); // установили возраст
// person1.getAge(); // получили возраст
// Метод ageValidation вызывается при вывозе метода setAge (то есть внутри метода setAge). Метод ageValidation 
// должен как-то проверить возраст, который мы вводим в setAge. Если возраст, который мы ввели, меньше 18, 
// то записываем в age слово 'Validation Error', а есть введенный возраст больше 18, то вписываем в age это значение.
// ageValidation только проверяет данные, он ничего не записывает (в ageValidation не должно быть this.age = age)
// person1.setAge(1); // передать возраст можно как угодно
// person1.getAge(); // 'Validation Error'
// person1.setAge(20); // передать возраст можно как угодно
// person1.getAge(); // Новое значение - 20
let personOne = {};
const personBase = {
    setName(value) {
        this.name = value;
    },
    getName() {
        return this.name;
    },
    setAge(value) {
        this.age = this.ageValidation(value);
    },
    getAge() {
        return this.age;
    },
    ageValidation(value) {
        return ((value < 18) || (value > 120) || (value === undefined)) ? 'Validation Error' : value;
    }
};


personOne.__proto__ = personBase;

personOne.setName('Vasya');
console.log(personOne);

personOne.setAge(1);
console.log(personOne);

personOne.getAge();
console.log(personOne);

personOne.setAge(20);
console.log(personOne);

personOne.getAge();
console.log(personOne);