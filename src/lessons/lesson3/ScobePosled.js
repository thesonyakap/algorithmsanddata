const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  console.log(isValid(line) ? 'yes' : 'no');
  rl.close();
});

function isValid(s) {
  let stack = [];
  let map = { ')': '(', ']': '[', '}': '{' };

  for (let char of s) {
    if (char in map) {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}