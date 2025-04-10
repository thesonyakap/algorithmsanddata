const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const n = parseInt(input[0]);
  const matrix = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
  const [start, end] = input[n + 1].split(' ').map(num => parseInt(num) - 1); // переводим в 0-индексацию

  const visited = Array(n).fill(false);
  const prev = Array(n).fill(-1);
  const queue = [];

  visited[start] = true;
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (matrix[node][neighbor] === 1 && !visited[neighbor]) {
        visited[neighbor] = true;
        prev[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }

  if (!visited[end]) {
    console.log(-1); 
    return;
  }

  const path = [];
  for (let at = end; at !== -1; at = prev[at]) {
    path.push(at + 1); 
  }

  path.reverse();

  console.log(path.length - 1);
  if (path.length > 1) {
    console.log(path.join(' '));
  }
});
