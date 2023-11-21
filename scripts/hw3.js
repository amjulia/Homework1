//Задание 1 - 1 способ

let password = 'пароль';
let check = prompt("Введите пароль");
password === check ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

//Задание 1 - 2 способ

if (password === check) {
    console.log('Пароль введен верно');
    
} else {
    console.log('Пароль введен неправильно');
}

//Задание 2
let c = prompt("Введите любое число");
if (c>0 && c<10) {
    console.log("верно");
} else {
    console.log("неверно");
}

//Задание 3
let d = prompt("Введите первое число");
let e = prompt("Введите второе число");
d>100 || c>100 ? console.log("Верно") : console.log("Неверно");

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = prompt("Введите номер месяца");
switch (monthNumber ) {
    case '1':
    case '2':
    case '12':
        console.log("зима");
    
        break;
    
    case '3':
    case '4':
    case '5':
        console.log("весна");

        break;
    
    case '6':
    case '7':
    case '8':
        console.log("лето");
            
        break;
    case '9':
    case '10':
    case '11':
        console.log("осень");
            
        break;
    
        
    default: console.log("Неверно ввели число");
        break;
}

//Задание 7
let evenNumber = Number(prompt("Пожалуйста, введите любое число!!!"));
if (!isNaN(evenNumber)) {
    if  (evenNumber % 2 == 0) {
        console.log('число четное');
        
    } else {
        console.log('число нечетное');
    }
} else {"Nan"}

//Задание 8
let clientOS = prompt('Введите 0 или 1');
if (clientOS == 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else {
    console.log("Установите версию приложения для Android по ссылке");
}

//Задание 9
let clientSystem = prompt('Введите 0 или 1');
let clientDeviceYear = prompt('Введите год выпуска вашего телефона');
if (clientDeviceYear<2015) {
    if (clientSystem == 0) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');   
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');   
    } 
 } else if(clientSystem == 0){
console.log("Установите версию приложения для iOs по ссылке");
    }
    else{
        console.log("Установите версию приложения для Android по ссылке"); 
    }

