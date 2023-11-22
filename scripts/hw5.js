//Задание 1

function less(a, b) {
    return Math.min(a, b);
}

let result = less(10, 8);
console.log(`Меньшее число ${result}`);

//Задание 2

function evenNumber(n) {
    if (n % 2 === 0) {
        return `Число четное`;
    }
    else {
        return `Число нечетное`;
    }
}

console.log(evenNumber(4));
console.log(evenNumber(45));

//Задание 3.1

function getnumberSquare(d) {
    console.log(Math.pow(d,2));
    return Math.pow(d, 2);
}
getnumberSquare(5);
 
//Задание 3.2

let numberSquare = (num) => Math.pow(num, 2);
 
console.log(numberSquare(7));
 
 
//Задание 4

function userAge() {
    let age = prompt('Сколько вам лет?');
        if (age <= 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age < 12) {
        console.log('Привет, друг!');
    }
    else 
    console.log('Добро пожаловать!');
    
}

userAge();

// Задание 5

function addedNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return ("Одно или оба значения не являются числом");
        
    } else {
        return num1*num2;
    }
    
}

console.log(addedNumber(5, 3));
console.log(addedNumber('gh', 3));

//Задание 6

function userNum() {
    let enterNum = prompt('Введите число');
    if (isNaN(enterNum) ) {
        return console.log("Переданный параметр не является числом");
    } else {
        return console.log(`${enterNum} в кубе равняется ${enterNum**3}`);
        
        
    }
}
userNum();

//Задание 7

function getArea() {
    return `Площадь = ${(this.radius ** 2) * 3.14 }`;  
}

function getPerimeter() {
    return `Периметр = ${this.radius * 2 * 3.14 }`;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2  = {
    radius: 9,
    getArea: getArea,
    getPerimeter: getPerimeter
    }

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

