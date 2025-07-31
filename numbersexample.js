//Convert number to string
let num = 42;
let numString = num.toString();
console.log(numString); // This will log "42"
console.log(typeof numString); // This will log "string"
console.log(num+numString); // This will log "4242" (string concatenation)
//Convert string to number
let strNum = "100"; 
let convertedNum = Number(strNum);
console.log(convertedNum); // This will log 100
console.log(typeof convertedNum); // This will log "number"
console.log(convertedNum + 50); // This will log 150 (number addition)
console.log(strNum + 50); // This will log "10050" (string concatenation)
