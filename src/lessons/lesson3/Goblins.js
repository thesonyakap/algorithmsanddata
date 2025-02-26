const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = parseInt(input[0], 10);
  const leftQueue = [];
  const rightQueue = [];

  let result = [];
  
  for (let i = 1; i <= N; i++) {
    const command = input[i].split(' ');

    if (command[0] === '+') {
      rightQueue.push(parseInt(command[1]));
    } else if (command[0] === '*') {
      rightQueue.unshift(parseInt(command[1]));
    } else if (command[0] === '-') {
      result.push(leftQueue.shift());
    }

    if (leftQueue.length < rightQueue.length) {
      leftQueue.push(rightQueue.shift());
    }
  }

  console.log(result.join('\n'));
});