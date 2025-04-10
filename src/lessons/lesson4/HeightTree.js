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
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new TreeNode(value);
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new TreeNode(value);
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
}

const tree = new BST();

rl.on('line', (line) => {
  const values = line.split(' ').map(Number);
  for (let value of values) {
    if (value === 0) {
      console.log(tree.getHeight(tree.root));
      rl.close();
      return;
    }
    tree.insert(value);
  }
});