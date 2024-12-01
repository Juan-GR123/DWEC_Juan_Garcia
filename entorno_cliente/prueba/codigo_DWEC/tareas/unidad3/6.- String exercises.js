//Exercise 1: Count the number of characters: Given the string "JavaScript is awesome", display how many characters it has.

let string="JavaScript is awesome";

console.log(string.length);
//Exercise 2: Convert to uppercase: Given the string "javascript", convert it to uppercase and display it.
let string2="javascript";
console.log(string2.toUpperCase());
//Exercise 3: Convert to lowercase: Given the string "THIS TEXT IS IN UPPERCASE", convert it to lowercase.
let string3="THIS TEXT IS IN UPPERCASE";
console.log(string3.toLowerCase());
//Exercise 4: Find the position: Find the position of the first occurrence of the letter "e" in the string "Welcome to the JavaScript class".
let string4="Welcome to the JavaScript class";
console.log(string4.indexOf("e"));
//Exercise 5: Find the last position: Find the position of the last occurrence of the letter "o" in the string "Hello, how are you today".
let string5="Hello, how are you today";
console.log(string4.lastIndexOf("o"));
//Exercise 6: Check if it contains a substring: Check if the string "The weather is sunny" contains the word "sunny".
let string6="The weather is sunny";

console.log(string6.includes("sunny"));//true
//Exercise 7: Starts with: Check if the string "Programming in JavaScript" starts with "Programming".
let string7="Programming in JavaScript";

console.log(string7.startsWith("Programming"));//true
//Exercise 8: Ends with: Check if the string "Learning is fun!" ends with "fun!".
let string8="Learning is fun!";

console.log(string8.endsWith("fun!"));
//Exercise 9: Extract part of a string: Extract the word "JavaScript" from the string "Learning JavaScript is fun".
let string9="Learning JavaScript is fun";
string9.match(/javascript/ig).forEach(elemento=> {
  console.log(elemento);
});
//Exercise 10: Slice from the end: Extract the last 5 characters from the string "Hello, cruel world".
let string10="Hello, cruel world";
console.log(string10.slice(-10));
//Exercise 11: Replace a word: In the string "I like coffee", replace the word "coffee" with "tea".
let string11="I like coffee";
console.log(string11.replace("coffee","tea"));
//Exercise 12: Replace all words: Given the string "Hello hello hello", replace all occurrences of the word "hello" with "goodbye".
let string12="Hello hello hello";
console.log(string12.replaceAll("hello","goodbye"));
//Exercise 13: Remove spaces: Remove the spaces from the beginning and the end of the string " JavaScript ".
let string13=" JavaScript ";
console.log(string13.trim());
//Exercise 14: Remove leading spaces: Remove only the leading spaces from the string " Welcome to JavaScript".
let string14=" Welcome to JavaScript";
console.log(string14.trim());
//Exercise 15: Remove trailing spaces: Remove only the trailing spaces from the string "JavaScript class ".
let string15="JavaScript class ";
console.log(string15.trim());
//Exercise 16: Split the string into words: Split the string "JavaScript is fun" into an array of words.
let string16="JavaScript is fun";
console.log(string16.split(" "));
//Exercise 17: Get the Unicode value: Get the Unicode value of the first character in the string "Hello".

//Exercise 18: Iterate over a string: Given the string "string", display each letter on a new line.
let string18="string";
for(let caracter of string18.valueOf()){
  console.log(caracter);
}
//Exercise 19: Given the string " JavaScript, Python, Ruby, PHP, C++ ", remove the whitespace at the beginning and end, and convert the rest of the string into an array with the names of the programming languages.
let string19=" JavaScript, Python, Ruby, PHP, C++ ";
console.log(string19.trim().split(" "));
//Exercise 20: Given the string "123456789", split the numbers into pairs of two digits and then reverse the order of each pair, returning the result as "21436587".
let string20="123456789";
function algo(string) {
  
    const pares = string.match(/.{1,2}/g);
    

    const reverso = pares.map(pares => pares.split('').reverse().join(''));

    return reverso.join('');
}

const stringg = "123456789";
const resultado = algo(stringg);
console.log(resultado);
//Exercise 21: Write a function that takes a string like "El lenguaje JavaScript es popular" and replaces all the vowels with their accented equivalents: a -> á, e -> é, i -> í, o -> ó, u -> ú. The resulting string should be "Él lénguáje Jávascrípt és pópulár".

//Exercise 22: Given the string "Hola-mundo-bonito", replace all the hyphens with spaces and then capitalize the first letter of each word, resulting in "Hola Mundo Bonito".

//Exercise 23: Create a function that takes a number as a string, such as "987654321", and inserts a comma every three digits from the right. The result for "987654321" should be "987,654,321".

//Exercise 24: Given the string " A very long text with spaces, commas, and periods. ", remove all extra spaces (from the beginning, end, and double spaces in the middle), and replace punctuation marks with ellipses "...". The result should be "A very long text with spaces...and commas...and periods...".

//Exercise 25: Create a function that takes a sentence and returns the words in reverse order. For example, the input "I love the JavaScript language" should return "language JavaScript the love I".

//Exercise 26: Write a function that checks if a string is a palindrome, ignoring case and spaces. For example, "A man a plan a canal Panama" should return true.

//Exercise 27: Given the string "abc123def456ghi789", extract all sequences of numbers and create a new string with them, leaving a space between each group of numbers. The result should be "123 456 789".

//Exercise 28: Given the sentence "Programming in JavaScript is amazing", replace all the vowels in the first half of the sentence with their uppercase equivalents. The result should be "PrOgrAmmIng in JavaScript is amazing".

//Exercise 30: Find Numbers in a String. Write a function extractNumbers(string) that takes a string and returns an array containing all the numbers it contains. Use a regular expression to find the numbers.

//Exercise 31: Replace Spaces with Hyphens. Create a function replaceSpaces(string) that takes a string and replaces all whitespace with hyphens (-). Use a regular expression to perform the replacement.

//Exercise 32: Count Words. Write a function countWords(string) that takes a string and returns the total number of words it contains. Use a regular expression to identify the words.

//Exercise 33: Validate Phone Numbers. Create a function validatePhone(phone) that takes a phone number in a format of 10 digits (e.g., 1234567890) and returns true if it is valid and false otherwise. Consider that the number should contain only digits.

//Exercise 34: Extract Hashtags. Write a function extractHashtags(string) that takes a string and returns an array containing all the hashtags it contains. A hashtag is a word that begins with the # symbol.

//Exercise 35: Validate Passwords. Create a function validatePassword(password) that takes a string and returns true if the password is valid. A valid password must have at least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one number.