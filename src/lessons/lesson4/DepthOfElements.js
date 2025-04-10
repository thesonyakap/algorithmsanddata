const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      console.log(1);
      return;
    }

    let current = this.root;
    let depth = 1;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new TreeNode(value);
          console.log(depth + 1);
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new TreeNode(value);
          console.log(depth + 1);
          return;
        }
        current = current.right;
      } else {
        return;
      }
      depth++;
    }
  }
}

const tree = new BST();

rl.on('line', (line) => {
  const values = line.split(' ').map(Number);
  for (let value of values) {
    if (value === 0) {
      rl.close();
      return;
    }
    tree.insert(value);
  }
});