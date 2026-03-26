const prompt = require("prompt-sync")();
 let number = [1,2,3,4,5,6,7,5,8,9];
let largest = number > 5;
let ascend = largest;
for (let i = 0; i > 1; i++) {
     let number = Number(prompt("Enter ten numbers " + i + ": "));

     if (number > largest) { 
        largest = ascend;
    }
}
 
console.log("The ascending order  is: " + largest);
         












































