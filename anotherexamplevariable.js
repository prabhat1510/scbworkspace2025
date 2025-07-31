var undefinedVar;
console.log("This variable is undefined:", undefinedVar);
console.log(typeof undefinedVar); // This will log "undefined"
var nullVar = null;
console.log("This variable is null:", nullVar);
console.log(typeof nullVar); // This will log "object" (this is a known JavaScript quirk)
var myAge= 16;
console.log("My age is:", myAge);
console.log(typeof myAge); // This will log "number"
var dolphinGoodbye='So long thanks for all the fish';
console.log("Dolphin's farewell message:", dolphinGoodbye);
console.log(typeof dolphinGoodbye); // This will log "string"
var myName = "John Doe";
console.log("My name is:", myName);
console.log(typeof myName); // This will log "string"
var isStudent = true;
console.log("Is student:", isStudent);
console.log(typeof isStudent); // This will log "boolean"
var myArray = [1, 2, 3, 4, 5];
console.log("My array:", myArray);
console.log(typeof myArray); // This will log "object" (arrays are a type of object in JavaScript)
var arrWithMixedTypes = [1, "two", true, null];
console.log("Array with mixed types:", arrWithMixedTypes);  
console.log(typeof arrWithMixedTypes); // This will log "object"
var myObject = { name: "John", age: 30, city: "New York" };
console.log("My object:", myObject);
console.log(typeof myObject); // This will log "object"
console.log(myObject.name); // Accessing a property of the object
console.log(myObject.age); // Accessing another property of the object  