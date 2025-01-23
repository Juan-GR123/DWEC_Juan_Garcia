//Exercise 1: Area Calculation: Write a function that calculates the area of a circle given its radius. Use π to perform the calculation.
function calcular(radio) {
    if (radio <= 0) {
      return "El radio debe ser mayor que 0.";
    }
    return Math.PI * Math.pow(radio, 2); // Formula: π * r²
  }
  
  const radio1 = 5;
  const radio2 = -3;
  
  console.log(`Area del ciruclo con el radio ${radio1}: ${calcular(radio1)}`); 
  console.log(`Area del ciruclo con el radio ${radio2}: ${calcular(radio2)}`); 
//Exercise 2: Price Rounding: You have a product price with decimals. Create one function that rounds the price up and another that rounds it down.
function redondearA(producto){
    if(typeof producto!= "number"){
      return console.log("El numero debe ser decimal");
    }else{
       return console.log("El numero redondeado hacia arriba es " + Math.ceil(producto));
    }
   
  }
  function redondearB(producto){
    if(typeof producto!="number"){
      return console.log("El numero debe ser decimal");
    }else{
       return console.log("El numero redondeado hacia arriba es " + Math.floor(producto));
    }
   
  }
  const pro1= 3.12;
  console.log(typeof pro1);
  console.log(redondearA(pro1));
  console.log(redondearB(pro1));
//Exercise 3: Random Number: Create a function that returns a random number between 1 and 100.
function aleatorio(){
  return  (Math.random()*Math.abs(100)-Math.abs(1)) + Math.abs(1);
}

console.log(aleatorio());
//Exercise 4: Logarithms: Write a function that takes a positive number and returns its natural logarithm. Make sure to handle cases where the number is less than or equal to 0.
function logaritmo(num){
  let log=Math.log(num);
  return log;
}

console.log(logaritmo(10));
//Exercise 5: Powers: Write a function that calculates the power of a number. The function should take the base and the exponent as parameters.
function potencia(base,exp){
  return Math.pow(base,exp);
}

console.log(potencia(10,2));
//Exercise 6: Square Root: Create a function that calculates the square root of a number. If the number is negative, it should return a message indicating that the square root cannot be calculated.
function raiz(num){
  if(num<0){
      return "La raiz de este número no puede ser calculado";
  }else{
      return Math.sqrt(num);
  }
}

console.log(raiz(-100));
//Exercise 7: Absolute Value: Write a function that takes a number and returns its absolute value.
function absoluto(num){
  return Math.abs(num);
}

console.log(absoluto(-299));
//Exercise 8: Maximum and Minimum Numbers: Write a function that takes a set of numbers and returns the largest and smallest among them.
function valores(...num){
  if(num.length==0){
    return "Los valores no existen";
  }
  const max=Math.max(...num);
  const min=Math.min(...num);
  
  return "El número mas grande es " + max + " y el mas pequeño es " + min;
}

console.log(valores(1,2,3,4,5,6,7,19));
//Exercise 9: Distance in a Straight Line: Given the position of two points on a Cartesian plane (x1, y1) and (x2, y2), create a function that calculates the distance between them using the Euclidean distance formula.
function distancia(x1,y1,x2,y2){
  const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // Formula: √((x2 - x1)² + (y2 - y1)²)
 return distancia;
}

console.log(distancia(3,4,12,2));
//Exercise 10: Cube Roots Calculation: Write a function that calculates the cube root of a number. If the number is negative, it should return a message indicating that the cube root cannot be calculated.
function raizC(num){
  if(num<0){
      return "La raiz cubica de este número no puede ser calculado";
  }else{
      return Math.cbrt(num);//cbrt sirve para calcular la raiz cubica del parametro introducido
  }
}

console.log(raizC(100));
console.log(raizC(0));
console.log(raizC(-32));
//Exercise 11: Sine of an Angle: Write a function that receives an angle in degrees and returns its sine. Be sure to convert the angle to radians before calculating the sine.
function angulo(num){
  let radianes= num*(Math.PI/180);
  return Math.sin(radianes);
}

console.log(angulo(90));
//radianes=grados×(π/180​)

//Exercise 12: Cosine of an Angle: Create a function that receives an angle in degrees and returns its cosine. Remember to convert the angle to radians.
function angulo(num){
  let coseno= num* (Math.PI/180);
  return Math.cos(coseno);
}

console.log(angulo(0));
//Exercise 13: Tangent of an Angle: Write a function that takes an angle in degrees and returns its tangent. Perform the conversion to radians before the calculation.
function angulo2(num){
  let tangente = num*(Math.PI/180);
  return Math.tan(tangente);
}

console.log(angulo2(30));
//Exercise 14: Arcsine: Create a function that receives a value between -1 and 1 and returns the arcsine of that value in degrees.
function angulo3(num){
  if(num>1 || num<-1){
    return "El valor debe estar entre 1 y -1";
  }else{
      let arco =Math.asin(num);//devuelve el arcoseno en radianes
      let arcsen=arco*(180 / Math.PI);//hace falta convertir el resultado de radianes a grados
  return arcsen;
  }

}

console.log(angulo3(1));
//Exercise 15: Arccosine: Write a function that takes a value between -1 and 1 and returns the arccosine of that value in degrees.
function angulo4(num){
  if(num>1 || num<-1){
    return "El valor debe estar entre 1 y -1";
  }else{
      let arco =Math.acos(num);//devuelve el arcocoseno en radianes
      let arccos=arco*(180 / Math.PI);//hace falta convertir el resultado de radianes a grados
  return arccos;
  }

}

console.log(angulo4(-1));
//Exercise 16: Arctangent: Create a function that receives a number and returns its arctangent in degrees.
function angulo4(num){
  let arco =Math.atan(num);//devuelve el arcotangente en radianes
  let arctan=arco*(180 / Math.PI);//hace falta convertir el resultado de radianes a grados
return arctan;
}

console.log(angulo4(1));
//Exercise 17: Tangent and Angle: Write a function that receives an angle in degrees and returns its tangent and the arctangent of that angle in degrees.
function angulo5(num){
  let radianes = num*(Math.PI/180);//convertimos a radianes
let tangenteF=Math.tan(radianes);//hacemos la tangente
let arco=Math.atan(radianes);//hacemos el arcotangente de la tangente 
let arctan=arco*(180 / Math.PI);//devolvemos los radianes a grados.
return "La tangente es " + tangenteF + " y el arcotangente es " + arctan;
}

console.log(angulo5(30));
//Exercise 18: Euclidean Distance: Given the position of two points on a Cartesian plane (x1, y1) and (x2, y2), create a function that calculates the distance between them using the Euclidean distance formula, and also returns the angle in degrees that the line between those points makes with respect to the x-axis.
function calcular(x1,y1,x2,y2){
  const dx = x2 - x1;
  const dy = y2 - y1;

  const distancia = Math.sqrt(dx * dx + dy * dy);

  const radianes = Math.atan2(dy, dx); //La función Math.atan2() retorna la arcotangente del cociente de los argumentos.
  const grados = radianes * (180 / Math.PI); // convertimos a grados


  return "La distancia es " + distancia + " y el angulo en grados es " + grados;
}

console.log(calcular(10,21,13,34));
//Exercise 19: Area of a Triangle: Write a function that calculates the area of a triangle based on the lengths of its sides and the angle between them using the formula A=12absin⁡(C)A=21​absin(C), where aa and bb are the lengths of the sides and CC is the angle in degrees.
function area(a,b,angulo){
  const radianes = angulo * (Math.PI / 180);

  const area1 = 0.5 * a * b * Math.sin(radianes);// formula: A=12absin⁡(C)A=21absin(C)

  return area1;
}

console.log(area(10,12,30));
//Exercise 20: Conversion from Degrees to Radians: Create a function that receives an angle in degrees and returns its equivalent in radians.
function anguloFinal(num){
  let radianes = num*(Math.PI/180);//convertimos grados a radianes
  return radianes;
}

console.log(anguloFinal(90));