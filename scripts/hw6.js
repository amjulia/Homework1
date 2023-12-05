//Задание 1

let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
   if (arr[i] === 10) break;
  
}

// Задание 2

let arrNum = [1, 5, 4, 10, 0, 3];
 console.log(arrNum.indexOf(4));

 //Задание 3

 let nums = [1, 3, 5, 10, 20];
 nums = nums.join(' ');
 console.log(nums);

 // Задание 4

 let arrs = [[],[],[]];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arrs[i][j]=1; 
 }
    
}
console.log(arrs);

//Задание 5

let arrMy = [1, 1, 1];
arrMy.push(2, 2, 2);
console.log(arrMy);

//Задание 6

let lineNum = [9, 8, 7, 'a', 6, 5];
lineNum.sort((a, b) => a - b).pop();
console.log(lineNum);

//Задание 7

let arr7 = [9, 8, 7, 6, 5];
let question = Number(prompt('Введите число'));
if (arr7.includes(question)) {
    alert('Угадал');
    
} else {
   alert('Не угадал') 
}


//Задание 8

let arr8 = 'abcdef';
arr8 = arr8.split('').reverse().join('')
console.log(arr8);

// 
let arr9 = [
    [1, 2, 3],
    [4, 5, 6]
];

arr9 = arr9.flat()
console.log(arr9);

//Задание 10

let arr10 = [2, 5, 1, 7, 3, 2, 9];
for (let i = 0; (i < arr10.length - 1); i++) {
    
   let sum = arr10[i]+arr10[i+1];
    console.log(sum);
    
}

//Задание 11

const arr11 = [2, 5, 8, 3, 6];
function getnumberSquare (arr11){
  return arr11.map((num) => Math.pow(num, 2))
}
console.log(getnumberSquare(arr11));


//Задание 12
/*

function arrSum(num) {
  let arrNew = [];
    for (let i = 0; i < num.length; i++) {
    arrNew.push(num[i].length);
    } 
    return arrNew;
} 
arrSum(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(arrNew); 
*/

function getLengthWords(words) {
return words.map(word => word.length)  
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Задание 13
/* let fil =[];
function filterPositive(array) {
    const even = array.filter(el => el < 0);   
    fil.push(even);
    
  }

  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2])
  console.log(fil);*/

  function filterPositive(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        result.push(array[i])
      }
    }
    return result;
  }
  
  console.log(filterPositive([-25, 25, 0, -1000, -2]));
  console.log(filterPositive([-1, 0, 5, -10, 56]));
  
  //Задание 14

  let array14 = [];
  let newArray = [];
  const max = 10;
  const min = 0;
  for (let i = 0; i < 10; i++) {
    array14.push(Math.floor(Math.random() * (max - min)) + min);
  }
    const item = array14.filter(el => el % 2 === 0);
    newArray.push(item);
    
  
  console.log(array14);
  console.log(newArray);

  // Задание 15
  let array15 = [];
  let sum = 0;
  for (let i = 0; i < 6; i++) {
    array15.push(Math.floor(Math.random() * 10));
     sum += array15[i];
    
 }
 let result = sum / array15.length;
 
console.log(array15);
console.log(`сумма чисел = ${sum}`);
console.log(`среднее арифметическое = ${result}`);
