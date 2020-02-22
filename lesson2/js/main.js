//lesson-2.1.1:
let a=1,b=1,c,d;
c=++a;
alert(c);
/*переменная c имело значение undefined, значение переменной а было присвоено 1.
 потом значение переменной  "a" с помощью операции пре-инкремента было увеличено на 1 и стало 2.
потом операция присваивания согласно таблице приоритетов операторов , 
согласно ассоциативности слева направо в операнду слева, 
т.е. в коробку "с" было помещено значение операнда справа, т.е.переменной "а", т.е. 2
*/
//lesson-2.1.2:
d=b++;
alert(d);
/*значение переменной "d" было undefined, 
потом произошла операция присваивания согласно таблице приоритетов операторов,
в коробку "d" поместилось значение перменной "b",т.е.1 
потом произошла операция пост-инкремента и значение переменной "b" увеличилось на 1 и стало 2
*/
//lesson-2.1.3:
c=2+ ++a;
alert(c);
/*
сначало значение переменной а было 2 , 
потом увеличилось на 1 и стало 3, 
потом операция сложения 2+3=5 
и это значение было положено в коробку с с помощью оператора присваивания.

*/
//lesson-2.1.4:
d=2+b++;
alert(d);
/*сначало значение переменной b было 2 , 
потом операция сложения стало 2+2 \
и операция присваивания,
 с помощью которой в коробку d положили значение 4.
потом b стало 3
*/
alert(a);
//значение а стало 3
alert(b);
//значение b стало 3

//lesson-2.2.
a=2;
let x=1+(a*=2);
alert(a);
alert(x);
/*сначало значение а стало 2, 
потом а стало 2*2, т.е. 4, 
потом x стало 1+4, т.е. 5
*/

//lesson-2.3.
a=+prompt("a= ");
b=+prompt("b= ");
if (a>=0 && b>=0) alert("разность:"+(a-b));
else if(a<0 && b<0) alert("произведение:"+(a*b));
else if(Math.sign(a)!=Math.sign(b)) alert("сумма:"+(a+b));

//lesson-2.4.
a=+prompt("введите а:");
b=+prompt("введите b:");
alert("a+b="+sum(a,b));
alert("a-b="+difference(a,b));
alert("a/b="+division(a,b));
alert("a*b="+multiply(a,b));
function sum(a,b){return (a+b);}
function difference(a,b){return (a-b);}
function division(a,b){return (a/b);}
function multiply(a,b){return (a*b);}

//lesson-2.5.
let arg1=+prompt("введите аrg1:");
let arg2=+prompt("введите arg2:");
let operation=prompt("введите operation:");
alert("результат:"+arg1+" "+operation+" "+arg2+ " = "+ mathOperation(arg1,arg2,operation));
function mathOperation(arg1,arg2,operation){
    let result;
    switch(operation)    {
    case '+':
        result=sum(arg1,arg2); break;
    case '-':
        result=difference(arg1,arg2); break;
    case '/':
        result=division(arg1,arg2); break;
    case '*':
        result=multiply(arg1,arg2); break;
    default:
        alert("error.io");
    }
    return result;
}