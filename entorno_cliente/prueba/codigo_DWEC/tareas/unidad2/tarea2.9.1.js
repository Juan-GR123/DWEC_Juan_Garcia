/*Since we have not talked yet about native JavaScript objects, like Math, usage of Math
methods, as sqrt or pow, is not allowed*/

//1. Take loop exercises from 4 until the last one and rewrite them by using functions
let n1=prompt("Dime un número");
n1=Number(n1);
let pares=[1];
let impares=[1];
let par=0;
let impar=0;
let n2=0;
pares.lenght=n1;
impares.lenght=n1;
while(n2!=n1){
	if(n2%2!=0){
 		impares2(n2);
  }else{
		pares2(n2);
  }
    n2++;
}

console.log(pares);
console.log(impares);
sumarr(pares,impares);


function sumarr(pares,impares){
let suma=[1,2,3];
suma.lenght=n1;
for(let k=0;k<n1;k++){
		if(impares[k]!=null || pares[k]!=null){
			suma[k]=pares[k]+impares[k];
  		console.log(suma[k]);
		}	
	}
}
	


function impares2(n2){
    impares[impar]=n2;
    impar++;
}
function pares2(n2){
    pares[par]=n2;
    par++;
}


//2. Write a function that returns the square of a number
function cuadrado(a){
    a=a*a;
    return a;
  }
  let numero1=10;
  console.log(cuadrado(numero1));
//3. Write a function min(a,b) which returns the least of two numbers a and b.
function minimo(a,b){
  if(a<b){
    return a;
  }else if(a>b){
    return b;
  }
}

console.log(minimo(10,100));
//4. Rewrite min function as an expression function
let numero_minimo=function(a,b){
  if(a<b){
    return a;
  }else if(a>b){
    return b;
  }
}

console.log(numero_minimo(1,100));
//5. Rewrite min function as an arrow function
let numero_minimo2=(a,b)=>{
  if(a<b){
    return a;
  }else if(a>b){
    return b;
  }
}

console.log(numero_minimo2(234,100));
//6. Write a function pow(x,n) that returns x in power n. Ask the user fot both numbers.
let numero=prompt("Dime un número que quieras");
let potencial= prompt("Dime el numero que quieres que sea al que se eleva del anterior número");

function potencia(x,n){
  x=x**n;
  return x;
}

let solucion= potencia(numero,potencial);
console.log(solucion);
//7. Rewrite pow function as an expression function
let numero2=prompt("Dime un número que quieras");
let potencial2= prompt("Dime el numero que quieres que sea al que se eleva del anterior número");

let expresion=function(x,n){
  x=x**n;
  return x;
}

let solucion2= expresion(numero2,potencial2);
console.log(solucion2);
//8. Rewrite pow function as an arrow function
let numero3=prompt("Dime un número que quieras");
let potencial3= prompt("Dime el numero que quieres que sea al que se eleva del anterior número");

let expresion3=(x,n)=>(x**n);

let solucion3= expresion3(numero3,potencial3);
console.log(solucion3);
//9. Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
   }
   ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
   )
  
   //solution
   let ask=(question,yes,no)=>(confirm(question)) ? yes() : no();
    let question="Do you agree?";
    let confirmar=()=>alert("you agreed");
    let denegar=()=>alert("You canceled the execution.");
    ask(question,confirmar,denegar);

//10. Write a function named calculateSupply that:
//a) takes 2 arguments: age, amount per day.
//b) calculates the amount consumed for rest of the life (based on a constant max age).
//c) outputs the result to the screen like so: "You will need NN to last you until the ripe old
//age of X"
//Express it as an arrow function, if possible
let pregunta1=prompt("Dime tu edad");
let pregunta2=prompt("Dime la cantidad que necesitas al dia");

function calculateSupply(age, amountPerDay) {
let edad_max = 100;
let dias = (edad_max*365) - (age*365);
let cantidad = dias * amountPerDay;
console.log("Necesitaras " + cantidad + " para que te duren hasta que llegues a la edad de " + edad_max);
}
calculateSupply(pregunta1,pregunta2);

//11. Create a function that greets the user by his name and with a message according to the
//moment of the day (morning, afternoon, night). It accepts two parameters: user name and a
//callback function.
let nombre=prompt("Dime tu nombre");
let momento="noche";
function saludo(momento){
      tiempo(momento,nombre);
}

function tiempo(m,n){
  if(momento=="mañana"){
    console.log("Buenos dias " + n);
  }else if(momento=="tarde"){
    console.log("Buenas Tardes " + n);
  }else{
    console.log("Buenas Noches " + n);
  }
}
saludo(momento);



//12. Create a function that accepts three parameters: two numbers and the mathematical
//operation to be performed with these numbers. The following mathematical operations must
//be supported: addition, subtraction, division and multiplication. Use callback functions.

let oper=prompt("Dime el tipo de operacion que deseas realizar");
let numero4= prompt("Dime el primer número");
let numero5= prompt("Dime el segundo número");
numero4=Number(numero4);
numero5=Number(numero5);
function operation(numero4,numero5, oper){
	mates(numero4,numero5,oper);
}
let solucionfinal=0;

function mates(num1,num2,tipo){
	switch(tipo){
  	case "suma":
    	solucionfinal=num1+num2;
    		console.log("La suma de " + num1 + " con " + num2 + " es " + solucionfinal);
        break;
    case "resta":
    		solucionfinal=num1-num2;
    		console.log("La resta de " + num1 + " con " + num2 + " es " + solucionfinal);
        break;
    case "multiplicación":
    		solucionfinal=num1*num2;
    		console.log("La multiplicación de " + num1 + " con " + num2 + " es " + solucionfinal);
        break;
    case "división":
    		solucionfinal=num1/num2;
    		console.log("La división de " + num1 + " con " + num2 + " es " + solucionfinal);
        break;    
     default: 
     		console.log("Esa tipo de operación no esta disponible");
  }
}

operation(numero4,numero5,oper);