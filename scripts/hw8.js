// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

 // Задание 2
 function isPositive(num) {
    return num > 0;   
    
    }
    function isMale(names) {
      return names.gender === 'male'
    } 
   
    function filter(arr, ruleFunction) {
   const output = [];
   for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
         output.push(arr[i]);
      }
  }  return output;
}

    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people2, isMale));

// Задание 3

const timer = (deadline) => {
	const interval = setInterval(() => {
		console.log(new Date());
	}, 3000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 1000)
};

timer(30);    

// Задание 4

function delayForSecond1(callback) {
   
   setTimeout(callback, 1000);
  
}

delayForSecond1(function () {
  console.log('Привет, Глеб!');
})

// Задание 5

function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
           if(cb) { 	cb(); }

   }, 1000)
}

function sayHi (name) {
   console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
