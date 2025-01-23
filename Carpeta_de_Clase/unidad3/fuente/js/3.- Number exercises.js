//1. Creation and Conversion of Numbers

//Exercise 1: Create a variable num1 as a primitive number and a variable num2 as a Number object with the same value. Compare their values using == and ===. What do you observe?
let num1 = 12;
let num2 = new Number(12);

console.log(num1 == num2);
console.log(num1 === num2);
//son el mismo numero pero no tienen el mismo tipo por lo tanto si se realiza la comparación === da falso
//Exercise 2: Convert a string that represents a decimal number (e.g., "12.34") into a number. Print the result.
let prueba = "12.34";
console.log(prueba);
prueba = parseInt(prueba)
console.log(prueba);
//Exercise 3: Convert a string that contains a hexadecimal number (e.g., "0x1A") into a number. Print the result.
let prueba2 = "0x1A";
console.log(prueba2);
prueba2 = parseInt(prueba2);
console.log(prueba2);
//2. Value Verification

//Exercise 4: Check if several values are finite. Test with the following: Infinity, NaN, 100, -200, 0.
console.log(isFinite(Infinity),
    isFinite(NaN),
    isFinite(new Number(100).valueOf()),
    isFinite(-200),
    isFinite(0)
);
//Exercise 5: Check if several values are NaN. Test with the following: NaN, 0/0, undefined, Number("foo").
console.log(Number.isNaN(NaN),
    Number.isNaN(0 / 0),
    Number.isNaN(undefined),
    Number.isNaN(Number("foo")),
);
//Exercise 6: Convert several strings into integers. Test with the following: "42", "42.5", "0x1F", and "not a number".
console.log(Number.isInteger("42"),
    Number.isInteger("42.5"),
    Number.isInteger("0x1F"),
    Number.isInteger(NaN)
);
//Exercise 7: Convert several strings into floating-point numbers. Test with the following: "42.5", "0.1", and "3.14abc".
console.log(Number.parseFloat("42.5"),
    Number.parseFloat("0.1"),
    Number.parseFloat("3.14abc"),
);
//3. Comparison and Precision

//Exercise 8: Compare the results of 0.1 + 0.2 and 0.3 using a comparison with tolerance. Print true or false depending on the result.
let a = 0.1 + 0.2;
let b = 0.3;
//Exercise 9: Create a function called areNumbersEqual(a, b) that compares two numbers to determine if they are practically equal. Test the function with various pairs of numbers.
function areNumbersEqual(a,b){
    return (a===b);
  }
  
  console.log(areNumbersEqual(42,12),
             areNumbersEqual(21,334),
             areNumbersEqual(12,12),
            areNumbersEqual(54,32),
            areNumbersEqual(534,21)
             );
//4. Method Usage

//Exercise 10: Create a Number object and convert its value to a string in different bases (2, 8, 10, 16). Print the results.
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
//Exercise 11: Create a Number object and obtain its primitive value. Print the result.
let objnum2=new Number(50);
console.log(objnum2.valueOf());
//5. Floating Point Numbers and Representation

//Exercise 12: Print the maximum and minimum values that can be represented in the Number object. Explain what they represent.
let a1=Number.MAX_VALUE;
let b1=Number.MIN_VALUE;

console.log(Math.min(b1));
console.log(Math.max(a1));
//Exercise 13: Print the value of NaN and check if it is a number. What is the result?
console.log(NaN);
console.log(typeof NaN === "number");//el resultado es true
//6. Application Exercises

//Exercise 14: Write a function called convertToBinary(num) that receives a number and returns its binary representation as a string.

//Exercise 15: Write a function called sumNumbers(a, b) that takes two numbers, sums them, and returns the result. 
//Ensure to correctly handle cases where the numbers are decimal.
