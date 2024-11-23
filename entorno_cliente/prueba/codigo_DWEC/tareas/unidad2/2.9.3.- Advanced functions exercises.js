//1. Write the recursive version of the function square
let numero=prompt("Dime un numero del que quieras saber su cuadrado");
let contador=2;

function numeroC(numero, contador){
	if(contador==1){
  	return numero;
  }else{
    return (numero*numeroC(numero,contador-1));
  }
}

console.log(numeroC(numero,contador));

//2. Write the autoexecutable version of the previous version
let numero2=prompt("Dime un numero del que quieras saber su cuadrado");

(function(numero2){
console.log(numero2*numero2);
})(numero2);

//3. Write the recursive version of the function pow
let numeroP=prompt("Dime un número del que quieras saber su potencia");
let contadorP=prompt("Dime el número que sera la potencia del anterior");

function numeropow(numeroP, contadorP){
	if(contadorP==1){
  	return numeroP;
  }else{
    return (numeroP*numeropow(numeroP,contadorP-1));
  }
}

console.log(numeropow(numeroP,contadorP));

//4. Write an iterative and recursive function to add the nth first prime numbers. 


//sin recursividad
/*let numero4=prompt("Dime el número de números primos que quieras que se muestren");
let contador4=Number(numero4)-3;
let arrayprim=[2,3,5];
let numf=4;
let num2f=3;

function numeroprimo(numf,num2f,contador4,arrayprim){
	do{
  if(numf % 2 != 0 && numf%3!=0 && numf%5!=0){
        arrayprim[num2f]=numf;
        num2f++;
        numf++;
        contador4--;
   }else{
      	numf++;
      }
  }while(contador4>0);
  return arrayprim;
}

console.log(numeroprimo(numf,num2f,contador4,arrayprim));*/

//recursivo
let numero4 = prompt("Dime el número de números primos que quieras que se muestren");
let contador4 = Number(numero4) - 3;  // Ya tienes 3 primos en el array
let arrayprim = [2, 3, 5];
let numf = 6; // Comenzamos desde 6 porque ya consideramos 2, 3, 5
let num2f = 3; // Ya hay 3 primos en el array

function numeroprimo(numf, num2f, contador4, arrayprim) {
  // Condición base: si ya hemos añadido suficientes primos, detenemos la recursión
  if (contador4 === 0) {
    return arrayprim;
  }
  
  // Verificamos si el número actual es primo
  if (esPrimo(numf)) {
    arrayprim[num2f] = numf;
    num2f++;
    contador4--;
  }
  
  // Llamada recursiva incrementando numf para seguir buscando más números primos
  return numeroprimo(numf + 1, num2f, contador4, arrayprim);
}

// Función para comprobar si un número es primo
function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(numeroprimo(numf, num2f, contador4, arrayprim));


//5. Write an iterative and recursive function to calculate factorial of a given number
let numero3=prompt("Dime un numero del que quieras saber su factorial");
let contador3=Number(numero3);

function numeroFac(contador3){
let final=0;
	if(contador3==1){
  	return contador3;
  }else{
    final=(contador3*numeroFac(contador3-1));
     return final;
  }
}

console.log(numeroFac(contador3));
//6. Write a recursive function to check if a number is prime
//con recursividad
let num=prompt("Dime un número");
num=Number(num);

function primo(num, div = 3){//el divisor inicial se inicia en 3 porque ya se excluyen los casos divisibles por 2.
      if(num == 2){
      	return true;
      }else if(num==3){
      	return true;
      } else if(num < 2 || num % 2 == 0) {
      	return false;
      } else if(num % div != 0){
      	return true;
      } else if(num % div === 0){
      return false;
      } 
      return primo(num, div + 2);//Este proceso continúa probando divisores impares (5, 7, 9, etc.) hasta que encuentre un divisor o llegue al caso donde num % div !=0.
}

console.log(primo(num));

//7. Rewrite the previous function to be autoexecutable
let primo=prompt("Dime un numero");
primo=Number(primo);

(function(primo){
	let respuesta=false;
  if(primo==2 || primo==3  || primo==5){
     	 respuesta=true;
 			console.log(respuesta);
	}else{
   if(primo%2!=0 && primo%3!=0 && primo%5!=0){
        respuesta=true;
       console.log(respuesta);
		}else{
    	console.log(respuesta);
    }
  }
})(primo);

//8. Create a function that accepts an undetermined number of words and returns a string with all these words concatenated.
let caracter=["Me", "gustan", "las", "fresas"];
function concatenacion(caracter) {
   let frase = "";
   for (let i = 0; i < caracter.length; i++) {
      frase += " " + caracter[i]; 
   }
   return frase;
}

console.log(concatenacion(caracter));
//9. Create a function that accepts three parameters: two numbers and a function that indicates the operation to be applied to the numbers: division or pow.
let num1= prompt("Dime un número");
let num2=prompt("Dime otro número");
let aleatorio=prompt("Dime el tipo de operacion: ¿div o pow?");
let pregunta= function (aleatorio){
  let operacion="";
  if(aleatorio=="div"){
  	operacion="division";
   return operacion;
  }else if(aleatorio=="pow"){
  operacion="potencia";
  return operacion;
  }
}

function respuesta(pregunta,num1,num2){
		let resultado=0;
		if(pregunta=="division"){
    	resultado=num1/num2;
      return resultado;
    }else if(pregunta=="potencia"){
    	resultado=num1**num2;
      return resultado;
    }
}
console.log(pregunta(aleatorio));
console.log(respuesta(pregunta(aleatorio),num1,num2));
//10. Check the following code and explain the output
let a=b=5;
function calcula() {
  console.log(a*b);
}
a=b=10;
calcula();
//La salida dara como resultado 100 debido a que aunque inicalmente las variables a y b tienen asignado
//el valor de 5, como estan inicializados fuera de la función, al cambiar el valor de las variables se 
//cambia también el valor que se introduce en la funcion calcula a la que sellama despues del cambio de
//valor

//11. Check the following code and explain the output
function crearCoche() {
    let marca= "Tesla";
  
    return function() {
      return nombre;
    };
  }
  
  let marca = "MG";
  let coche = crearCoche();
  coche();

//La salida del siguiente código dará un error debido a que en la función no se ha definido la variable
//nombre y por lo tanto no se devolvera nada.

//12. Check the following code and explain the output
function coche(aux){
    let nombre=aux;
    return function(){
      return nombre;
    }
  }
  
  let coche1=coche("tesla");
  let coche2=coche("mg");
  console.log(coche1());
  console.log(coche2());

//La salida del siguiente código mostrara los nombre instroducidos debido a que la variable que se introduce
//en la función se pasa a una variable que despues se devuelve dentro de otra función.
//Además, para asegurar que el resultado se ve en pantalla, se pone la declaración de la función 
//dentro de un console.log.


//13. Check the following code and explain the output
let animal = "gato";

if (1) {
  let animal = "conejo";
  function habla() {
     if (animal1=="conejo"){
	console.log("Los conejos no hacen ruido");
    }else{
	console.log ("Los gatos maúllan");
    }
  }
}

habla();

/*La salida del siguiente código dara un error, para que funcione habrá que cambiar el nombre "animal1" por 
"animal" para que asi el código muestre por pantalla la frase "los conejos no hacen ruido" esto se debe a
que aunque al principio se define la variable animal como gato esa variable animal es distinta que la que
se define dentro del operado if, por lo tanto el codigo contará la variable animal como se haya definido
dentro del if e ignorara a la variable animal de fuera del if.
*/