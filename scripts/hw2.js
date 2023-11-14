// Задание 1
let a = 10;
a = alert(a);
a = 20;
a = alert(a);

//Задание 2
let year = 2007;
year = alert(`Год выпуска первого iPhone ${year}`);

//Задание 3
let nam = "Brendan Eich";
nam = alert(`Имя создателя языка JavaScript ${nam}`);

//Задание 4
let b = 10;
let c = 2;
alert([(b+c),(b-c),(b*c),(b/c)]);

//Задание 5
let result = 2**5;
alert(`2 в 5 степени равно ${result}`);

//Задание 6
let d = 9;
let e = 2;
alert(`Остаток от деления 9 на 2 равен ${d%e}`);

//Задание 7
let num = 1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9.0
let user = {
    name:'Ivan',
    age: 25,
    isAdmin: true
}


//Задание 9.1

user['city of residence'] = 'Omsk';
console.log(user['city of residence']);

//Задание 9.2
user.age = 30;
console.log(user);

//Задание 9.3
delete user['city of redidence'];
console.log(user);

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);

//Задание 10
let nameUser = prompt('Введите ваше имя');
alert(`Привет, ${nameUser}!`);







