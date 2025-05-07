const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let text = '';

rl.on('line', line => {
  text += line + ' ';
});

rl.on('close', () => {
  const words = text.trim().split(/\s+/); // разбиваем по пробелам
  const count = {};

  for (const word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  // ищем слово с максимальной частотой, при равенстве — минимальное по лексикографическому порядку
  let maxWord = '';
  let maxCount = 0;

  for (const word in count) {
    if (
      count[word] > maxCount ||
      (count[word] === maxCount && word < maxWord)
    ) {
      maxWord = word;
      maxCount = count[word];
    }
  }

  console.log(maxWord);
});