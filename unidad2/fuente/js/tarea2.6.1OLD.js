//1. Will alert be shown?
if ("0") {
    alert( 'Hello' );
   }
//Yes, the alert will be shown because of the value of the string "0".

//2. The name of JavaScript.- Using the if..else construct, write the code which asks: ‘What
//is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t
//know? ECMAScript!”
let nombreof= prompt("¿Cual es el nombre oficial de JavaScript?");//Aqui se guardara la respuesta

if(nombreof==="ECMAScript"){//Si la respuesta es la misma que la correcta entonces mostrara la alerta diciend
                            //correcto
alert("¡Correcto!");
}else{//Si la respuesta es diferenta a la que se pide entonces te mostrara el otro aviso.
alert("¿No lo sabias? Era EXMAScript");
}

//3.3. Show the sign. Using if..else, write the code which gets a number via prompt and
//then shows in alert:
//◦ 1, if the value is greater than zero,
//◦ -1, if less than zero,
//◦ 0, if equals zero.
//In this task we assume that the input is always a number

let respuestaN=prompt("Dime un numero");//Aqui le digo que muestre un aviso pidiendo un número para que se
//guarde en esta variable

//Si el número recibido es mayor que 1 se mostrara el primer aviso, si es menor que -1 se mostrara el segundo
//aviso, si es igual a 0 se mostrara el tercer aviso y además he añadido un cuarto aviso en el caso que 
//el número introducido sea igual a -1 o a 1.
if(respuestaN>1){
	alert("El valor es mayor que 1");
}else if(respuestaN<-1){
	alert("El valor es menor que -1");
}else if(respuestaN==0){
 alert("El valor es igual a 0");
}else{
alert("El valor es 1 o -1");
}

//4. Rewrite 'if' into '?
let result;
if (a + b < 4) {
 result = 'Below';
} else {
 result = 'Over';
}

//let result;
let a=2;
let b=1;
(a + b < 4) ? result="Below" : result="Over"; 
//El resultado es que result sera igual a "Below" debido a que si la ? es el if y los : son el else
//como "a" que es igual a 2 y "b" que es igual a 1, se suman y dan 3, como 3 sigue siendo menor
//que 4 entonces la condición de que 4 sea mayor que a + b se cumple y por eso el resultado es "Below"


//5. Rewrite 'if..else' into '?'. For readability, it’s recommended to split the code into multiple
//lines.
let message;
if (login == 'Employee') {
 message = 'Hello';
} else if (login == 'Director') {
 message = 'Greetings';
} else if (login == '') {
 message = 'No login';
} else {
 message = '';
}

//Answer:

(login == "Employee") ? message= "Hello" : 
(login=="Director") ? message= "Greetings" : (login == "") ? message= "No login" : message="";

//6. Write the code using if..else which would correspond to the following switch:
switch (browser) {
    case 'Edge':
    alert( "You've got the Edge!" );
    break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
    default:
    alert( 'We hope that this page looks ok!' );
   }

//Answer
if(browser == "Edge"){
	alert("You've got the Edge!");
}else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
	alert( 'Okay we support these browsers too' );
}else{
	 alert( 'We hope that this page looks ok!' );
}

//7. Rewrite the code below using a single switch statement:
let a1 = +prompt('a?', '');
if (a1 == 0) {
 alert( 0 );
}
if (a1 == 1) {
 alert( 1 );
}
if (a1 == 2 || a1 == 3) {
 alert( '2,3' );
}

//Answer
//let a1=+prompt('a?', '');
switch(a1){
	case 0:
 	 	alert( 0 );
   	break;
  case 1:
  	 alert( 1 );
     break;
  case 2:
  case 3:
  	 alert( '2,3' );
     break;
}

