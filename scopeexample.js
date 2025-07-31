//Global Scope Example
var globalVar = "I am a global variable";

function displayGlobalVar() {
    console.log("Inside displayGlobalVar func :  "+ globalVar); // This will log the global variable
}

displayGlobalVar();
//Local Scope Example
function localScopeExample() {  
    let localVar = "I am a local variable";
    console.log("Inside localScopeExample func :  " + localVar); // This will log the local variable
    console.log("Inside localScopeExample func value of globalVar :  " + globalVar); // This will log the global variable
}   
localScopeExample(); // This will call the localScopeExample function
console.log("*****At the end*********" + globalVar);
//console.log("*****At the end localVar *********" + localVar); // This will cause an error because localVar is not defined in this scope