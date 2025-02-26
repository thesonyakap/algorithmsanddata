const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    const arr = line.split(' ').map(Number);
    arr.sort((a, b) => b - a);
    const n = arr.length;

    const option1 = arr[0] * arr[1] * arr[2];
    const option2 = arr[0] * arr[n - 1] * arr[n - 2];

    const result = option1 >= option2 ? [arr[0], arr[1], arr[2]] : [arr[0], arr[n - 1], arr[n - 2]];
    
    console.log(...result);
    rl.close();
});

