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
    // Проверка границ и условий
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

    // Рекурсивно идём во все 4 стороны
    dfs(row - 1, col); // вверх
    dfs(row + 1, col); // вниз
    dfs(row, col - 1); // влево
    dfs(row, col + 1); // вправо
  }

  // Запускаем DFS от стартовой клетки (приводим к индексам с 0)
  dfs(startRow - 1, startCol - 1);

  // Выводим площадь комнаты
  console.log(area);
});