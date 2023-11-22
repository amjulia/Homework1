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
    
    
 
        
                
