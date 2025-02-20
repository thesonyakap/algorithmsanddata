const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', line => {
    lines.push(line);
    if (lines.length === 4) {
        const n = Number(lines[0]);
        const limits = lines[1].split(' ').map(Number);
        const k = Number(lines[2]);
        const presses = lines[3].split(' ').map(Number);

        const counts = Array(n).fill(0);
        presses.forEach(p => counts[p - 1]++);

        counts.forEach((count, i) => console.log(count > limits[i] ? 'YES' : 'NO'));

        rl.close();
    }
});