//Function Expression Example
var addition = function(num1, num2) {
    let result = num1 + num2;
    return result; // This will return the sum of num1 and num2
}
sum=addition(3, 4); //This will call the addition function but not display the result
console.log("The sum of 3 and 4 is: " + sum);

let difference = function(num1, num2) {
    console.log("The difference is: " + (num1 - num2)); // This will log the difference of num1 and num2
}
difference(10, 5); // This will log "The difference is: 5"
let greetUser = function(name) {  
    console.log("Hello, " + name + "!"); // Greeting the user with their name
}
greetUser("Bob"); // This will greet the user with their name
console.log(addition(5, 10)); // This will call the addition function but not display the result