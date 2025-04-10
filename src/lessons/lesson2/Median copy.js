const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', line => {
    lines.push(line);
}).on('close', () => {
    const [N, L] = lines[0].split(' ').map(Number);
    const sequences = lines.slice(1, N + 1).map(line => line.split(' ').map(Number));

    let result = [];
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            let merged = mergeSortedArrays(sequences[i], sequences[j]);
            result.push(merged[L - 1]);
        }
    }
    
    console.log(result.join('\n'));
});


function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}


