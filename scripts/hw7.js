// Задание 1

const register = 'js';
console.log(register.toUpperCase());

// Задание 2

function searchStart(array, search) {
    let result = [];
array.forEach((elem) => {
       if (elem.toLowerCase().startsWith(search.toLowerCase())) {
        result.push(elem.toLowerCase());
       }
    
  });
   console.log(result);
} 

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Задание 3

console.log('Меньшее целое число: ' + Math.floor(32.58884));
console.log('Большее целое число: ' + Math.ceil(32.58884));
console.log('Ближайшее целое число: ' + Math.round(32.58884));

//Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание 5

function randomNum() {
    console.log(Math.round(Math.random()*10));
}
randomNum();

//Задание 6

function getRandomArrNumbers(num) {
    let arrayNumber = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
        arrayNumber.push(Math.floor(Math.random()*num));
     
    } return arrayNumber;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7

function getRandomNum(min, max) {
 return Math.round(Math.random() * (max - min)) + min;  
}
console.log(getRandomNum(5, 15));

//Задание 8

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let myDate = new Date();
let fullDate = myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ', ' + days[myDate.getDay()];
console.log(fullDate);

//Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10

const days10 = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months10 = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

function rusDate (date) {
    let res =  'Дата: ' + date.getDate() + ' ' + months10[date.getMonth()] + ' ' + date.getFullYear() + ' - это ' + days10[date.getDay()];
      console.log(res);
    let time = 'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
   console.log(time);
}
rusDate(new Date());




