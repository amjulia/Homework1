function gameSeasons() {
    let monthNumber = Number(prompt("Введите номер месяца"));
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        return console.log('Зима'); 
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return console.log('Весна');
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return console.log('Лето');
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
        return console.log('Осень');
    }
        else {
            return console.log('Неверно ввели значение');
        }
         
    }
    
    
 
        
                
