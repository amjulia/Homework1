function gameSeasons() {
    let monthNumber = Number(prompt("Введите номер месяца"));
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        return alert('Зима'); 
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return alert('Весна');
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return alert('Лето');
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
        return alert('Осень');
    }
        else {
            return alert('Неверно ввели значение');
        }
         
    }
   
function gameWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
     words = words.sort(() => Math.random() - 0.5);
     alert(words);
     userQuestion1 = prompt("Введите первое слово массива");
     userQuestion2 = prompt("Введите последнее слово массива");
if (words[0].toLowerCase() === userQuestion1.toLowerCase() && words[words.length-1].toLowerCase() === userQuestion2.toLowerCase()) {
    alert("Поздравляю, Вы угадали!")
} else if (words[0].toLowerCase() === userQuestion1.toLowerCase() || words[words.length-1].toLowerCase() === userQuestion2.toLowerCase()) { 
    alert("Вы были близки к победе!");
}
else {
    alert("Вы ответили неверно");
}
 }
    
 
        
                
