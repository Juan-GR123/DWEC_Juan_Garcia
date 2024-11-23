//1.-JavaScript Precision
/* Exercise 1.- In JavaScript, 0.1 + 0.2 does not result in exactly 0.3 due to floating-point precision issues. Compare the results of 0.1 + 0.2 and 0.3 using a comparison with tolerance. Print true or false depending on the result.
*/
let obj1=0.1+0.2;
let obj2=0.3;

let tolerance = 1e-10;

let isEqual = Math.abs(obj1-obj2) < tolerance;

console.log(isEqual); 
//2.-Creating a Number Object
/* Exercise 2.- Create a Number object from the following values:
    - An integer.
    - A decimal number.
    - A string containing a valid number.*/

let num=new Number(12);
let num2=new Number(12.4);
let num3=new Number("12");

console.log(
  num,num2,num3
);
//Exercise 3: Create a Number object and obtain its primitive value. Print the result.
let numobj=new Number(12);
console.log(numobj.valueOf());
//Exercise 4.- Use the Number constructor to attempt creating an object with invalid values, such as "Hello", undefined, and null.
let numobj2=new Number("Hello");
console.log(numobj2);
let numobj3=new Number(null);
console.log(numobj3);
let numobj4=new Number(undefined);
console.log(numobj4);
//3.-Getting the Value of a Number Object
// Exercise 5.- Create a Number object with the value 42. Use the appropriate method to get its primitive value and verify its type.
let numobj5=new Number(42);

console.log(numobj5.valueOf(),typeof numobj5);
// 4.- Comparison
//Exercise 6: Create a variable num1 as a primitive number and a variable num2 as a Number object with the same value. Compare their values using == and ===. What do you observe?
let num1=12;

let num22=new Number(12);


console.log(num1 == num22);
console.log(num1 === num22);
//son el mismo numero pero no tienen el mismo tipo por lo tanto si se realiza la comparación === da falso


//5.- Checking if a Number is Finite
/* Exercise 7.- Write a function that takes a number as a parameter and checks if it is finite or infinite. Test the function with the following values:
    - 42
    - Infinity
    - -Infinity
    - NaN*/

    function probar(numero){
        return Number.isFinite(numero);
      }
      console.log(probar(42),
          probar(NaN),
          probar(Infinity),
          probar(-Infinity)
      );

//6.- Checking for NaN
/* Exercise 8.- Create a function that determines if a value is NaN. Test it with:
    - The result of 0 / 0.
    - The result of 42 / "Hello".
    - A valid number.*/
    function probarN(numero){
        return Number.isNaN(numero);
      }
      
      console.log(probarN(NaN),
          probarN(0/0),
          probarN((42/"Hello")),
          probarN(100)
      );

//7.- Checking if a Number is an Integer
/* Exercise 9.- Write a function that takes a number and returns true if it is an integer or false otherwise. Test it with the following values:
    - 3
    - 3.14
    - -42
    - NaN*/
    function probarI(numero){
        return Number.isInteger(numero);
      }
      console.log(probarI(-42),
                  probarI(3),
                  probarI(3.14),
                  probarI(NaN)
      );
// 8. Conversion to String
/* Exercise 10.- Convert the following numbers to strings using different methods and analyze the results:
    - 42
    - 3.14159
    - Infinity
    - NaN
    */
   
function probarS(numero){
    return numero.toString();
  }
     console.log(probarS(42),
            probarS(3.14159),
            probarS(Infinity),
            probarS(NaN)
        );
  
  console.log((42).toString());
  console.log((3.12159).toString());
  console.log((Infinity).toString());
  console.log((NaN).toString());
  
  console.log(String(Infinity),
             String(42),
             String(NaN),
            String(3.12159)
  
  );
//Exercise 11: Create a Number object and convert its value to a string in different bases (2, 8, 10, 16).
let objnum=new Number(12);
let binario = objnum.toString(2);  // Base 2 (binario)
let octal = objnum.toString(8);   // Base 8 (octal)
let decimal = objnum.toString(10); // Base 10 (decimal)
let hexadecimal = objnum.toString(16); 
console.log(
  binario,
  octal,
  decimal,
  hexadecimal
);

