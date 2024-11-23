
//1. What is the last value output by this code? Why?
let i = 3;
while (i) {
 console.log( i-- );
}
//El último valor devuelto por este código sera 1 debido a que se trata de un bucle while en el que 
//irá mostrando el valor de i hasta que i se convierta en un número con el valor "false" en este caso 
//0


//2.Rewrite the following code changing the for loop to while without altering its behavior
//(the output should stay same).
for (let i = 0; i < 3; i++) {
 console.log ( `number ${i}!` );
}

//resuelto
let i2=0;
while(i2<3){
	console.log(`number ${i2}!`);
  i2++;
}


//3. Write a loop which keeps prompting for a number until it is greater than 100 or enters an
//empty line.
let numero=100;
let pregunta;
do{
	pregunta= prompt("Dime el siguiente número");
  console.log(pregunta);
}while(pregunta!=null && pregunta<numero);

//4. Using while loop, create two arrays: one with even numbers and another one with odds
//numbers. Both of them from 1 to n, being n a number provided by user. Using a for loop,
//create a third array whose nth number is the sum of nth number of both arrays.
let n1=prompt("Dime un número");
n1=Number(n1);
let pares=[1,2,3];
let impares=[1,2,3];
let par=0;
let impar=0;
pares.lenght=n1;
impares.lenght=n1;
let n2=0;
while(n2!=n1){
	if(n2%2!=0){
  	impares[impar]=n2;
    //console.log(n2);
    //console.log(impares[impar]);
    impar++;
  }else{
    pares[par]=n2;
    //console.log(pares[par]);
    par++;
  }
    n2++;
}

console.log(pares);
console.log(impares);
let suma=[1,2,3];
suma.lenght=n1;
	for(let k=0;k<n1;k++){
		if(impares[k]!=null || pares[k]!=null){
			suma[k]=pares[k]+impares[k];
  		console.log(suma[k]);
		}	
	}



//5. Write code which outputs prime numbers from 1 to n, being the latter a numbrer
//provided by user.
let creacion=prompt("Dime un número");
creacion=Number(creacion);
let arrayim=[1,2,3,5];
let numeral=4;
arrayim.lenght=creacion;
for(let i=4;i<creacion;i++){
		if(i%2!=0){
    	if(i%3!=0){
      	if(i%5!=0){
        	arrayim[numeral]=i;
      		numeral++
      	}
      }
    }
}
console.log(arrayim);

//6. Take odd numbers array and remove the prime numbers from it. Tip: as we have not
//seen array methods yet, the only way is to create a new array without those numbers
let creacion2=prompt("Dime un número");
creacion2=Number(creacion2);
let arrayim=[1,3,5];
let numeral1=0;
arrayim.lenght=creacion2;
for(let i=0;i<creacion2;i++){
		if(i%2!=0){
    	if(i%3==0 || i%5==0){
        	arrayim[numeral1]=i;
      		numeral1++
      }
    }
}
console.log(arrayim);

//7. Ask the user for a number n. Create an array of n random numbers and print the highest
//one. Use the following code to generate a random number between 0 and 9999

Math.floor(Math.random() * 9999)

//resuelto
let pregunta1=prompt("Dime un numero");
pregunta1=Number(pregunta1);
let array=[1,2,3];
let j=0;
array.lenght=pregunta1;
do{
	array[j]=Math.floor(Math.random()*9999);
  console.log(array[j]);
  j++;
}while(j<array.lenght);

//8. Ask the user for a string and print it reversed

let reversal= prompt("Saludame");
let newArray="";
//console.log(reversal.length);
for (let i = reversal.length-1 ; i >= 0; i--) { 
        newArray += reversal[i];
        console.log(reversal[i]);
    }
console.log(newArray);

//9. Ask the user for a number. Print a isosceles triangle made of asterisks with as many
//levels as the number the user entered.
let usuario=prompt("Dime el número de asteriscos");
let num2=1;

console.log("*");
	while(num2<=usuario){
		let i=1;
		let asterisk="*";
  		while(i<=num2){
  				i++;
    			asterisk+="*";
  			}
  	console.log(asterisk);
		num2++;
}
//Utilizando dos while lo que consigo es que el primer bucle no pare hasta que se llegue al numero que me
//han pedido y con el segundo bucle consigo sumar cada vez mas asteriscos cuanto mas grande sea numero2 con cada
// iteracion del primer bucle

//10. Ask the user for a number between 3 and 25. Calculate its factorial.
let cuestionario=prompt("Dime un número entre 3 y 25");
cuestionario=Number(cuestionario);
let numeroF=cuestionario;

if(cuestionario>3 && cuestionario<25){
		do{
			cuestionario--;
			if(cuestionario>0){
					numeroF=numeroF*(cuestionario);
			}
		}while(cuestionario>0);
}

console.log(numeroF);


//11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled
//the same forward and backward).

let reversal2= prompt("Saludame");
let newArray2="";
//console.log(reversal.length);
for (let i = reversal2.length-1 ; i >= 0; i--) { 
        newArray2 += reversal2[i];
        //console.log(reversal[i]);
    }
    if(reversal2==newArray2){
   	 	console.log(newArray2);
    }else{
     	console.log("la palabra no es palindroma");
    }
//12. Use the following code to generate a random pin number of 4 digits. Write code to allow
//a user to try to guess the number in 4 attempts

let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
let consulta= prompt("Dime un número de por lo menos 4 digitos");
let intentos=3;

while(intentos>0){
	if(consulta>=1000){
		if(consulta==numeroAleatorio){
  			console.log("¡¡¡Enhorabuena, has acertado el número!!!");
  		}else{
    		intentos--;
        	consulta=prompt("Numero equivocado, intentalo de nuevo. Te quedan " + (intentos+1) + " intentos");
  		}
	}else if(consulta==null){
  		intentos=0;
  	}else{
		consulta=prompt("El numero no tiene 4 digitos, vuelve a intentarlo");
	}

}
	console.log("A la proxima seguro que aciertas");


