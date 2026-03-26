const prompt = require("prompt-sync")();

let largest = -Infinity;

for (let i = 1; i <= 10; i++) {
    let number = Number(prompt("Enter number " + i + ": "));

    if (number > largest) {
        largest = number;
    }
}

console.log("The biggest number is: " + largest);