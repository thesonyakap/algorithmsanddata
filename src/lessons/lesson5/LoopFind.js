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
  const graph = input.slice(1, n + 1).map(row => row.split(' ').map(Number));
  
  const visited = Array(n).fill(false);
  const parent = Array(n).fill(-1);
  let cycle = [];

  function dfs(v, p) {
    visited[v] = true;

    for (let u = 0; u < n; u++) {
      if (graph[v][u] === 1) {
        if (!visited[u]) {
          parent[u] = v;
          if (dfs(u, v)) return true;
        } else if (u !== p) {
          // Найден цикл
          let cur = v;
          const temp = [u + 1];
          while (cur !== u) {
            temp.push(cur + 1);
            cur = parent[cur];
          }
          cycle = temp;
          return true;
        }
      }
    }
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (dfs(i, -1)) break;
    }
  }

  if (cycle.length === 0) {
    console.log("NO");
  } else {
    console.log("YES");
    console.log(cycle.length);
    console.log(cycle.reverse().join(' '));
  }
});