const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  console.log(evaluatePostfix(line.trim()));
  rl.close();
});

function evaluatePostfix(expression) {
  let stack = [];
  let tokens = expression.split(' ');

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      if (token === '+') stack.push(a + b);
      if (token === '-') stack.push(a - b);
      if (token === '*') stack.push(a * b);
    }
  }

  return stack.pop();
}
