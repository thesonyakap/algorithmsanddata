const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let numbers = line.trim().split(/\s+/).map(Number).filter(n => n !== 0);

  let uniqueNumbers = [...new Set(numbers)]; 
  uniqueNumbers.sort((a, b) => a - b);

  console.log(uniqueNumbers[uniqueNumbers.length - 2]);

  rl.close();
});