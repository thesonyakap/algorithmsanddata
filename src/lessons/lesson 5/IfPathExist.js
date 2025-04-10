var validPath = function(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);
  const queue = [source];
  visited[source] = true;
  let head = 0; 

  while (head < queue.length) {
    const node = queue[head++]; 

    if (node === destination) return true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return false;
};