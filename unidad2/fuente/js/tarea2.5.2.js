//1. What is the code below going to output?

//La primera linea de código va ha mostrar el número 2 ya que el valor null cuenta como
//falso al igual que el undefined.
//Por lo tanto, el único valor 'verdadero' que queda es el del número 2.
alert( null || 2 || undefined );


/*La siguiente linea de código va a mostrar un mensaje del numero 1 ya que dentro de la alerta
hay otra alerta mas con el número 1 dentro y después mostrara el numero 2 que es el valor
que cuenta como verdadero ya que no es una alerta.
Despues de eso la operacion se detendra ya que ya tiene un valor como verdadero y al utilizarse
los operadores OR solo es necesario un valor que cuente como verdadero.*/
alert( alert(1) || 2 || alert(3) );

/*La siguiente linea va a mostrar un aviso en el que salga "null"
Esto se debe a que la alerta identifica a null como un valor vacio y debido a eso muestra
por pantalla el valor null en vez de los valores verdaderos*/
alert( 1 && null && 2 );

/*La siguiente linea muestra dos avisos. Uno en el que se muestra el 1 debido a 
que es una alerta dentro de una alerta y otro aviso en el que se mostrara
el valor undefined debido a que no puede saber que valor corresponde a cada una de las 
alertas dentro de la primera alerta*/
alert( alert(1) && alert(2) );

/*La siguiente linea muestra un aviso en el que aparece por pantalla el número 3 
Esto debe de ser ya que se utiliza el operador or y el primer valor verdadero que encuentra
es el segundo el cual da como resultado 3 y por lo tanto muestra este valor por pantalla*/
alert( null || 2 && 3 || 4 )


//2.Check the range between. Write an if condition to check that age is between 14 and 90
//inclusively. “Inclusively” means that age can reach the edges 14 or 90.

//The result is the following code:
let age=16;//age puede contener cualquier número
if (age >= 14 && age <= 90){
console.log("La edad esta entre 14 y 90");
}else{
console.log("La edad no esta entre 14 y 90");
}

//3.Check the range outside. Write an if condition to check that age is NOT between 14 and 90
//inclusively. Create two variants: the first one using NOT !, the second one – without it.

//Según como lo pedia el ejercicio he hecho dos variantes del mismo codigo de diferente forma
//mi codigo es el siguiente

//1 variante
let age1=20;//cualquier numero
if (!(age1 >= 14 && age1 <= 90)){
    console.log("La edad no esta entre 14 y 90");
}

//2 variante
let age2=10;
if (age2 < 14 || age2 > 90){
console.log("La edad no esta entre 14 y 90");
}



//4. Which of these alerts are going to execute?

//La primera alerta si se ejecutará ya que el -1 cuenta como un valor verdadero, 
//por lo tanto si saltara esta alerta
if (-1 || 0) alert( 'first' );

//La segunda alerta no se ejecutará ya que aunque -1 es un valor verdadero, 0 es un valor nulo y como
//se pide con el operador lógico AND que los dos tienen que ser verdaderos, las condiciones para
//que se ejecute la alerta no se cumplen.
if (-1 && 0) alert( 'second' );

//La tercera alerta si se ejecutara ya que tanto -1 y 1 cuentan como valores positivos y como los dos son
//verdaderos se cuenta todo ese lado del OR verdadero y por lo tanto las condiciones para que la
//alerta se ejecute se cumplen.
if (null || -1 && 1) alert( 'third' );

//5.Check the login. Write the code which asks for a login with prompt. If the visitor enters
//"Admin", then prompt for a password, if the input is an empty line or Esc – show
//“Canceled”, if it’s another string – then show “I don’t know you”. The password is checked
//as follows:
//1. If it equals “TheMaster”, then show “Welcome!”,
//2. Another string – show “Wrong password”,
//3. For an empty string or cancelled input, show “Canceled”

//El codigo resultante es la solucion a la que he llegado

let pregunta= prompt("¿Quien es?"); //Creo una variable en la que guardar el usuario

	if(pregunta==="Admin"){ //si el nombre de usuario es Admin entonces continuo preguntando
    let contraseña= prompt("Introduce la contraseña:");
    if(contraseña=="TheMaster"){//Ahora guardo en la variable contraseña,
                                // la contraseña que se le pide al usuario y dependiendo de la respuesta
                                //se muestran diferentes respuestas.
      alert("Bienvenido");
    }else if(contraseña===null || contraseña=== " "){
    		alert("Cancelado");
    }else{
    		alert("Contraseña equivocada");
    }

	}else if(pregunta===null || pregunta=== " "){//Si se ha cancelado la ventana o no se ha escrito nada
                                                 //entonces se muestran el mensaje de que se ha cancelado la identificación   
			alert("Cancelado");
	}else{ //por el contrario, si se ha introducido un nombre de usuario no valido, manda un mensaje de
        //no conocer al usuario.
			alert("No te conozco");
	}