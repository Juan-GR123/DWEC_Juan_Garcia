//1. What are the final values of all variables a, b, c and d after the code below?
let a1 = 1, b = 1;
let c = ++a; 
let d = b++;  

//The final values of all of these variables are:
/*
a1=2
b=2
c=2
d=1
*/
//2. What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);
//results:
//a=4
//x=5

//3.What will be the result for these expressions?
5 > 4  //true ya que 5 es mayor que 4
"apple" > "pineapple" //false ya que la letra "a" va antes que la "p" y por eso es mas pequeña
"2" > "12" // true, ya que el 2 es mayor que el 1
undefined == null// true, ya que un valor indefinido al igual que un valor nulo, esta vacio
undefined === null// false, ya que aunque tengan el mismo valor, son variables de distinto tipo
null == "\n0\n"// false, ya que un valor nulo no es igual a 0. Ademas el cero esta en un string por lo tanto tiene un valor
null === +"\n0\n"//false, ya que el 0 al estar en un string no es un valor nulo
"" + 1 + 0// El resultado da 10 ya que se suma el string con los numero haciendo que estos se contatenen
"" - 1 + 0// El resultado es -1 ya que aunque empiece por string al realizar una resta la operacion se realiza como una operacion numerica
true + false// El resultado es 1 ya que true vale 1 y false sale 0
6 / "3"// El resultado es 2 ya que como se utiliza un número y una operación matemática 
//el string se convierte automaticamente en un numero por el tipo de operación que se pide
"2" * "3"// El resultado es 6 ya que al igual que en la operación anterior por las circunstancias los
//String se convierten en números
4 + 5 + "px"//El resultado da "9px" ya que se realiza la operación matemática que luego se concatena con el px 
"$" + 4 + 5//El resultado da "$45" ya que el string se concatena con los números haciendo que estos se conviertan en string y que tambien se concatenen
"4" - 2// El resultado es 2 ya que el string se convierte en un number para poder realizar la operación
"4px" - 2// En este caso el resultado es NaN ya que es imposible que un string con caracteres pueda restarse con un numero
" -9 " + 5// El resultado es "-9 5" ya que al empezar por un string en vez de realizarse una operación se concatenan como caracteres
" -9 " - 5// El resultado es -14 ya que aunque empiece por string si se restan la única opción que queda es restar como si se trataran de números
null + 1//El resultado es 1 porque a un valor nulo se le suma un 1
undefined + 1// El resultado es NaN ya que no es posibele sumar 1 a un valor que no ha sido definido
" \t \n" - 2//El resultado es -2 ya que aunque se empiece por un string se esta realizando una operacion matematica lo que ocasiona que el resultado sea un número



//4. Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly. 
//The output in the example below is 12 (for default prompt values). Why? Fix it. The result
//should be 3.
let c1=1
let d1=2
let a2 = prompt("First number?", c);
let b2 = prompt("Second number?", d);
alert(c1+d1); // 3

/*La razón por la que daba 12 al sumar los números era porque se sumaban las variables que contenian
los prompt y eso ocasionaba que se sumasen también los string lo que liaba la operación.
La manera que se me ha ocurrido para arreglar la operación es guardar los numeros en variables
independientes para despues sumarlas entre si y que de el numero adecuado.


*/