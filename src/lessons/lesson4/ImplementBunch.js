const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  extract() {
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();

    return max;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}

const heap = new MaxHeap();
let firstLine = true;

rl.on('line', (line) => {
  if (firstLine) {
    firstLine = false;
    return;
  }

  const [command, number] = line.split(' ').map(Number);

  if (command === 0) {
    heap.insert(number);
  } else if (command === 1) {
    console.log(heap.extract());
  }
});