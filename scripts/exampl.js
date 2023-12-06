let mult = (a, b) => (a * b);
console.log(mult(4,6));

function user(name, surname, age) {
return `Привет ${name} ${surname} с возрастом ${age} лет`;
}
console.log(user('Иван', 'Петров', 17));

function sex() {
    let result = prompt("Введите ваш пол M/F");
    if (result === 'M') {
console.log('Ваш пол мужской');        
    } else if (result === 'F') {
        console.log('Ваш пол женский');  
    } else {
        console.log('Ваш пол не определен');
    }
}
sex();


let dayWeek = prompt("Введите число 1-7");
switch (dayWeek) {
    case '1': console.log('понедельник');
        
        break;
    case '2':  console.log('вторник');
         break;
    case '2':  console.log('вторник');    
         break;
    case '3':  console.log('среда'); 
        break;
    case '4':  console.log('четверг'); 
        break;
    case '5':  console.log('пятница'); 
        break;
    case '6':  console.log('суббота'); 
        break;
    case '7':  console.log('воскресенье'); 
        break;
    default:
        console.log('ввели неправильное число');
        break;
}


let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere amet nam corrupti. Tenetur eum maiores assumenda eligendi quo quaerat omnis ratione blanditiis obcaecati. Libero distinctio cumque ipsam quae consequatur earum molestias perspiciatis pariatur aperiam! Reiciendis ipsum architecto fugit et quas pariatur possimus minima omnis inventore, sint totam suscipit dolorem asperiores!'
let firstWords = (s) => s.split('.').filter(s => s != '').map(s => s.trim().split(' ')[0]).join(', ');
console.log(firstWords(str));


/////*********** */
const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
const search = 'молоко';

products.forEach((product) => {
	if (product.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(product);
	}
});

// для начала создадим массив, в который занесем все дни недели на русском
// помним, что отсчет в JS начинается с воскресенья - 0
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // здесь мы получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
" " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
" " + myDate.getFullYear() + // getFullYear возвращает год
", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

console.log(fullDate);
///************************* 
let welcome; // переменная, в которой будем хранить наше приветствие
let myDate = new Date(); // получаем текущую дату
let hour = myDate.getHours(); // получаем час из нашей даты
let minute = myDate.getMinutes(); // получаем минуты
let second = myDate.getSeconds(); // получаем секунды

// если минуты и секунды у нас будут меньше 10, то в результате формат времени
// будет не очень красивым — 12:1:34 или 3:1:6
// намного приятнее следующие записи: 12:01:34 или 3:01:06
// чтобы добиться формата, как в последних примерах, будем осуществлять
// проверку на < 10
if (minute < 10) { // если минут будет меньше 10,
	minute = "0" + minute; // то перед ними поставим 0
}
if (second < 10) { // если секунд будет меньше 10,
	second = "0" + second; // то перед ними поставим 0
}

// здесь мы проверяем, который час, и в зависимости от этого в переменную welcom
// сохраняем приветствие, зависящее от времени суток
if (hour < 12) {
	welcome = "Доброе утро";
} else if (hour < 17) {
	welcome = "Добрый день";
} else {
	welcome = "Добрый вечер";
}

console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);



let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);