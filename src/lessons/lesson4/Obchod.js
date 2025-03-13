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

class BinarySearchTree {
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
        return; // Числа не повторяются в дереве
      }
    }
  }

  inOrderTraversal(node, result) {
    if (!node) return;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
  }

  printInOrder() {
    const result = [];
    this.inOrderTraversal(this.root, result);
    console.log(result.join('\n'));
  }
}

const bst = new BinarySearchTree();

rl.on('line', (line) => {
  const numbers = line.split(' ').map(Number);
  for (const num of numbers) {
    if (num === 0) {
      bst.printInOrder();
      rl.close();
      return;
    }
    bst.insert(num);
  }
});