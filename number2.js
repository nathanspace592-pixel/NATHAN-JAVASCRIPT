const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a positive integer N: ', (input) => {
  const n = parseInt(input);
  
  if (n > 0 && Number.isInteger(n)) {
    console.log(`\nMultiplication table of ${n}:`);
    for (let i = 1; i <= 12; i++) {
      console.log(`${n} × ${i} = ${n * i}`);
    }
  } else {
    console.log('Please enter a positive integer.');
  }
  
  rl.close();
});