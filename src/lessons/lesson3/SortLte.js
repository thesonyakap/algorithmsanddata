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
  const train = input[1].split(' ').map(Number);

  let stack = []; // Тупик (используем как стек)
  let expected = 1; // Какой вагон ожидаем на выходе в путь 2

  for (let i = 0; i < N; i++) {
    stack.push(train[i]); // Загоняем вагон в тупик

    // Пока в тупике верхний вагон — это тот, который ожидаем, выгружаем его
    while (stack.length > 0 && stack[stack.length - 1] === expected) {
      stack.pop();
      expected++;
    }
  }

  console.log(stack.length === 0 ? 'YES' : 'NO');
});
