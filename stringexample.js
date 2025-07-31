//Single Quote
let greeting = 'Hello, World!';
console.log(greeting);
//Double Quote
let farewell = "Goodbye, World!";
console.log(farewell);
//Template Literal
let name = "John";
let message = `Hello, ${name}! Welcome to the JavaScript world.`;
console.log(message);
console.log(typeof message); // This will log "string"

//String length
     //    0123456791011---- length-1
let str = "JavaScript is fun!";
console.log(str.length); // This will log the length of the string
console.log(str.charAt(7)); // This will log the first character of the string
console.log(str[7]);
//String concatenation
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);
fullName =  firstName.concat(" ", lastName); // Using concat method
console.log(fullName); // This will log "Jane Doe"
//String methods
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName); // This will log "JANE DOE"
//lowerCaseName
let lowerCaseName = fullName.toLowerCase();
console.log(lowerCaseName); // This will log "jane doe"
//String ends with
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.endsWith("dog.")); // This will log true
console.log(sentence.endsWith("fox")); // This will log false

//String includes
console.log(sentence.includes("quick")); // This will log true
//String indexOf
console.log(sentence.indexOf("fox")); // This will log the index of "fox" in the string
console.log(sentence.indexOf("cat")); // This will log -1 since "cat" is not found   
//String slice
let slicedString = sentence.slice(4, 9); // Extracts "quick"
console.log(slicedString);