//Problem 1: Create a regular expression to validate if a string is a valid email address, ensuring it ends with .com, .net, or .org.
let algo="algo@gmail.com";
const comprobar=/.(com|net|org)/;
console.log(comprobar.test(algo));
//Problem 2: Design a regular expression that finds all words that begin with an uppercase letter in a text, using word boundaries.
let definir="Hola me llamo Pepe";
const comprobar1=/[A-Z][a-zA-Z]*/g;

let resultado;
while ((resultado=comprobar1.exec(definir))!==null) {
   console.log(comprobar1.lastIndex,resultado[0]);
}
//Problem 3: Find all occurrences of the syllable "ex" that are not at the start of a word.
let definir2="explotar ponerex tiranosaurus-rex";
let comprobar2=/\Bex/g;
//\B se asegura que ex no este al principio de la palabra

let resultado2;
while ((resultado2=comprobar2.exec(definir2))!==null) {
   console.log(comprobar2.lastIndex,resultado2[0]);
}
//Problem 4: Use a regular expression with the metacharacter . to find any sequence of three characters that starts with "a" and ends with "b".
let definir3="abc dsab axxxb axb axxxxxxb";
let comprobar3=/a.b/g;

let resultado3;
while ((resultado3=comprobar3.exec(definir3))!==null) {
   console.log(comprobar3.lastIndex,resultado3[0]);
}
//Problem 5: Create a regular expression to capture numbers in currency format (e.g., $50, €30.99), using capture groups.
let definir4="$50, €30.99";
let comprobar4=/([$€£])(\d+(?:\.\d{2})?)/g;// \d sirve para encontrar digitos
//?: sirve para capturar el grupo

let resultado4;
while ((resultado4=comprobar4.exec(definir4))!==null) {
   console.log(comprobar4.lastIndex,resultado4[0]);
}
//Problem 6: Design a regular expression that validates an IPv4 address, ensuring the entire string is a valid IP address.

//Problem 7: Create a regular expression that finds words that repeat consecutively in a text, such as "hello hello" or "goodbye goodbye".

//Problem 8: Use a regular expression that finds strings with at least 2 consecutive "a" letters.

//Problem 9: Find all occurrences of the word "JavaScript" (case-insensitive) in a paragraph, showing each match's index.

//Problem 10: Validate if a string contains exactly two words separated by a space.

//Problem 11: Design a regular expression to validate passwords that have at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a special symbol.

//Problem 12: Find all sentences that end with an exclamation mark ! or a question mark ?.