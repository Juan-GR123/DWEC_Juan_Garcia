//1. Check if a number is odd or even
let num1=prompt("Dime un número");
let num2=2;
if(num1%num2==0){
    alert("El número es par");
}else{
    alert("El número es impar");
}

//2. Check if input variable is a number or not
let var1=prompt("Dime lo que quieras");
console.log(typeof(var1));
if(typeof(var1)=="number"){
    alert("Es un número");
}else{
    alert("No es un número");
}
//Da igual lo que le introduzcas en el prompt seguira siendo un string, tendremos que cambiarlo 
//manualmenta a number con var1=Number(var1);


//3. Find the largest of two number
let numero1=122;
let numero2=10;

if(numero1>numero2){
    console.log( numero1 + " es mas grande que " + numero2);
}else if (numero1<numero2){
    console.log(numero1 + " es menor que " + numero2);
}else{
    console.log("Los dos número son iguales");
}

//4. Find the largest of three number
let nume1=122;
let nume2=10;
let nume3=32;
if(nume1>nume2 && nume1>nume3){
		console.log( nume1 + " es mas grande que " + nume2 + " y " + nume3);
}else if (nume1<nume2 && nume3<nume2){
		console.log(nume2 + " es mayor que " + nume1 + " y " + nume3);
}else if (nume3>nume1 && nume3>nume2){
		console.log(nume3 + " es mayor que " + nume1 + " y " + nume2);
}else{
		console.log("Son iguales");
}

//5. Check if a triangle is equilateral (all side equal), scalene (all side unequal), or isosceles (2
//sides are equals)
let x=10;
let y=10;
let z=10;

if(x==y && x==z){
	console.log("El triangulo es equilatero");
}else if(x==y || x==z || y==z){
	console.log("El triangulo es Isosceles")
}else if(x != y || y!=z || x!=z){
	console.log("El triangulo es escaleno");
}

//6. Find the a number is present in given range (provide start, end and number to be found)
let rango1= 0;
let rango2= 100;
let preg= prompt("Dime un número");
if(preg>=rango1 && preg<=rango2){
	console.log("El número " + preg + " se encuentra dentro de nuestro rango");
}else{
	console.log("El número " + preg + " no se encuentra dentro de nuestro rango");
}

//7. Check if a year is leap year or not. A leap year is 1.- divisible by 400 OR 2.- divisible by 4
//and not by 100
let anyo=prompt("Dime un año");

if(anyo%400==0 || (anyo%4==0 && anyo%100!=0)){
	console.log("Este año es bisiesto");
}else{
	console.log("El año introducido no es bisiesto");
}

//8. Rewrite the former if by using the ternary operator
(anyo%400==0 || (anyo%4==0 && anyo%100!=0))
 ? console.log("Este año es bisiesto") : console.log("El año introducido no es bisiesto");

//9. Show the number of days in a given month
let mes= prompt("Dime un mes");
if(mes=="Enero"){
	console.log(31);
}else if(mes=="Febrero"){
		let anyo1=confirm("Dime si el año es bisiesto");
  	if(anyo1==true){
    	console.log(29);
    }else{
   		 console.log(28);
    }
}else if(mes=="Marzo"){
	console.log(31);
}else if(mes=="Abril"){
	console.log(30);
}else if(mes=="Mayo"){
	console.log(31);
}else if(mes=="Junio"){
	console.log(30);
}else if(mes=="Julio"){
	console.log(31);
}else if(mes=="Agosto"){
	console.log(31);
}else if(mes=="Septiembre"){
	console.log(30);
}else if(mes=="Octubre"){
	console.log(31);
}else if(mes=="Noviembre"){
	console.log(30);
}else if(mes=="Diciembre"){
	console.log(31);
}else{
 console.log("El mes introducido no existe");
}


//10. Rewrite the former if by using a switch statement
switch(mes){
	case "Enero":
  	console.log(31);
    break;
  case "Febrero":
  let anyo1=confirm("Dime si el año es bisiesto");
  	if(anyo1==true){
    console.log(29);
    break;
    }
  	console.log(28);
    break;
  case "Marzo":
  		console.log(31);
      break;
  case "Abril":
  		console.log(30);
      break;
  case "Mayo":
  		console.log(31);
      break;
  case "Junio":
  		console.log(30);
      break;
  case "Julio":
  	console.log(31);
    break;
  case "Agosto":
  	console.log(31);
    break;
  case "Septiembre":
  	console.log(30);
    break;
  case "Octubre":
  	console.log(31);
    break;
  case "Nomviembre":
  	console.log(30);
    break;
  case "Diciembre":
  	console.log(31);
    break;
    default:
    console.log("El mes no existe");
    break;
}




//11. Rewrite the former if by using && and || operators


if(mes=="Enero" || mes=="Marzo" || mes=="Mayo" || mes=="Julio" || mes=="Agosto" || mes=="Octubre" || mes=="Diciembre"){
	console.log(31);
}else if(mes=="Febrero"){
    let anyo1=confirm("Dime si el año es bisiesto");
    if(anyo1==true){
        console.log(29)
    }else{
        console.log(28);
    }
}else{
	console.log(30);
}

//12. Will alert be shown?
if ("0") {
    alert( 'Hello' );
   }

   //La alerta si se mostrara ya que el string que pone cero cuenta como un valor positivo por lo que si 
   //se mostrara el hello por pantalla.

//13. Rewrite the following code to optimize it (do not use switch). Rewrite again the following
//code by using a switch statement
let a = +prompt('a?', '');
if (a == 0) {
 alert( 0 );
}
if (a == 1) {
 alert( 1 );
}
if (a == 2 || a == 3) {
 alert( '2,3' );
} 

//Optimized code 
//1-
(a == 0) ? alert(0) : (a == 1) ? alert(1) : (a == 2 || a == 3) ?  alert('2,3') : alert("");
//2
if (a == 0) {
    alert( 0 );
   }else if (a == 1) {
    alert( 1 );
   }else if (a == 2 || a == 3) {
    alert( '2,3' );
   }
//Optimized code with switch

switch(a){
	case 0: 
 	 alert( 0 );
   break;
  case 1:
  	alert(1);
    break;
  case 2:
  case 3:
  	alert('2,3');
    break;
   default:
   	alert('');
   	break;	
}
