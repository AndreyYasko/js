'use strict';
//lesson-4.1:
//Создаем объект
let number1 = {
    units: 0, //это единицы
    tens: 0, //это десятки
    hundreds: 0, //это сотни
}
//вводим число и проверяем корректность ввода
let numberXYZ = parseInt (prompt('enter number'));
if (numberXYZ<0 || numberXYZ > 999 || isNaN(numberXYZ) || !Number.isInteger(numberXYZ)) {
   console.log('error');
}
//преобразуем в строковый тип, чтобы обращаться к конкретным разрядам введенного числа
numberXYZ=numberXYZ.toString();
//присваиваем объекту number1 значения свойств единицы,десятки,сотни
number1.units=numberXYZ.charAt(0);
number1.tens=numberXYZ.charAt(1);
number1.hundreds=numberXYZ.charAt(2);
console.log("units: "+number1.units);
console.log("tens: "+number1.tens);
console.log("hundreds: "+number1.hundreds);
    


