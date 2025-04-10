const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const [n, m] = input[0].split(' ').map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = new Array(n + 1).fill(false);
  const components = [];

 
  for (let i = 1; i <= m; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  function dfs(start) {
    const stack = [start];
    const component = [];

    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited[node]) {
        visited[node] = true;
        component.push(node);
        for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }

    return component;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      const comp = dfs(i);
      components.push(comp);
    }
  }

  console.log(components.length);
  for (const comp of components) {
    console.log(comp.length);
    console.log(comp.join(' '));
  }
});