//Задание 1
let i = 0;
while (i<2) {
    console.log('Привет');
    i++;
}

//Задание 2
let a = 1;
while (a<=5){
    console.log(a);
    a++;
}

//Задание 3
for (let num = 7; num <= 22; num++){
   console.log(num);  
}

//Задание 4
const obj = {
    'Коля' : 200,
    'Вася' : 300,
    'Петя' : 400
};
for (let name in obj) {
       console.log(`${name} - зарплата ${obj[name]} долларов.`);
  
}
//Задание 5
let n = 1000;
num = 0;
   
 while (n>50) {
    n=n/2;
    num++
    
}
console.log(`итого ${n}`);
console.log(`количество итераций ${num}`);

//Задание 6
for(let dayNumber = 4; dayNumber <= 31; dayNumber+=7){
    console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
}
