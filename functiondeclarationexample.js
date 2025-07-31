//Function Declaration Example
function addition(num1, num2) {
    let result = num1 + num2;
    return result; //This will return the sum of num1 and num2
    
}
//Doesn't takes any parameters and not returning any value
function displayResult() {
    let sum = addition(5, 10); //Calling the addition function
    console.log("The sum is: " + sum); //Logging the result to the console
}
//Single parameter function
function greetUser(name) {  
    console.log("Hello, " + name + "!"); //Greeting the user with their name
}    

function func(){
    console.log("This is a function declaration example.");
}

//Calling the functions
displayResult(); //This will display the result of the addition
greetUser("Alice"); //This will greet the user with their name
func(); //This will call the function and display its message 
sum=addition(3, 4); //This will call the addition function but not display the result
console.log("The sum of 3 and 4 is: " + sum); //This will log the sum of 3 and 4  
