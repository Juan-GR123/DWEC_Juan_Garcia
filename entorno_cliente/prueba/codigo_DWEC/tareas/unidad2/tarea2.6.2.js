//1. Explain each otuput of the following code

//La primera linea de código va ha mostrar el número 2 ya que el valor null cuenta como
//falso al igual que el undefined.
//Por lo tanto, el único valor 'verdadero' que queda es el del número 2.
console.log( null || 2 || undefined );
//(false || true || false);


/*La siguiente linea va a mostrar como salida "null"
Esto se debe a que se identifica a null como un valor negativo y debido a eso muestra
por pantalla el valor null en vez de los valores verdaderos debido al operador AND*/
console.log( 1 && null && 2 );
//(true && false && true)

/*La siguiente linea muestra como salida el número 3. 
Esto debe de ser ya que se utiliza el operador or y el primer valor verdadero que encuentra
es el segundo el cual da como resultado 3  ya que como todos los valores con el operador AND son verdaderos
se muestre el ultimo valor verdadero que es 3 
y por lo tanto muestra este valor por pantalla*/
console.log( null || 2 && 3 || 4 );
// (false || true && true || true);

let x = 3;

//La siguiente operación mostrara True ya que si x=3 entonces x es menor que cinco y mayor que 0
console.log((x < 5) && (x > 0));

//La siguiente operación mostrara False ya que x que es 3 será menor que 5 pero x no puede ser mayor que 6
console.log((x < 5) && (x > 6));

//La siguiente operación mostrara true ya que x que es 3 como es mayor que 2 esa operación se cuenta como
//true y como se utiliza el operador lógico OR, con que una sola operación sea true la salida ya sera true 
console.log((x > 2) || (x > 5));

//La siguiente operación mostrara false ya que x que es 3 no puede ser mayor que 3 ni ser menor que 0
//por lo tanto la salida de esta operación será false
console.log((x > 3) || (x < 0));

//La siguiente operación mostrara false ya que x que es 3 es igual que 3, pero como se pone antes el operador
//exclamación esta pidiendo que no sea igual a 3. Poe lo tanto la salida es false.
console.log(!(x == 3));

//La siguiente operación mostrara true ya que como x es 3, x no puede ser menor que 2, pero como se pone el 
//operador de exclamación esta pidiendo lo contrario y como x es mayor que 2 entonces la salida de la 
//operación es true
console.log(!(x < 2));


//2. Change the code inside console.log so output is true
const numOne = 5;
const numTwo = 6;
console.log(numOne == numTwo);

//Arreglado
console.log(numOne < numTwo);
//Lo único que había que hacer esta cambiar el signo de igual que compara si son iguales por el de mayor o menos.
//En este caso para que el resultado de "true" lo único que hay que hacer es poner que la variable numTwo 
//sea mas grande que la variable numOne.  

//3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two
//variants: the first one using NOT !, the second one – without it.

let age1= prompt("Dime tu edad");

//1 variante
if (!(age1 >= 14 && age1 <= 90)){
    console.log("Correcto, la edad no esta entre 14 y 90");
}else{
    console.log("La edad no esta permitida");
}

//2 variante

if (age1 < 14 || age1 > 90){
console.log("Correcto, la edad no esta entre 14 y 90");
}else{
    console.log("La edad no esta permitida");
}

//4. Explain what result will produce the following code
(-1 || 0) && ( 'first' );

//El resultado que se muestra es first ya que como -1 se cuenta como un valor verdadero
//y se utiliza el operador logico OR cuenta como verdadero y como el string también se cuenta como verdadero
//los dos son verdaderos, por lo tanto se cumplen las condiciones para que el operador AND muestre el string
//por lo tanto al cumplirse la condicion se muestra el string
//(true || false) && (true);

(-1 && 0) || ( 'second' );//
/* También se muestra el second ya que como es un operador OR al haber un único valor que cuente
como verdadero ya es posible que se muestre el string.
(true && false) || (true);
*/ 


(null || -1 && 1) && ( 'third' )//
/* Tambien se muestra en este caso el string debido a que en la primera operacion con que uno de los
valores sea true se cumplen las condiciones del OR y ya que el string cuenta como un valor true 
las condiciones para que se muestre por pantalla el string "third" también se cumplen.
(false || true && true) && (true);
*/