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
  const maze = input.slice(1, n + 1).map(line => line.split(''));
  const [startRow, startCol] = input[n + 1].split(' ').map(Number);

  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let area = 0;

  function dfs(row, col) {
    if (
      row < 0 || row >= n ||
      col < 0 || col >= n ||
      maze[row][col] !== '.' ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = true;
    area++;

    dfs(row - 1, col); 
    dfs(row + 1, col); 
    dfs(row, col - 1); 
    dfs(row, col + 1); 
  }

  dfs(startRow - 1, startCol - 1);

  console.log(area);
});