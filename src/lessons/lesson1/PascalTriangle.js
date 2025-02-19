function generate(numRows) {
    let res = [[1]]; // Первая строка всегда [1]
    
    for (let i = 1; i < numRows; i++) {
        let prevRow = res[i - 1];
        let newRow = [1]; // Первая цифра всегда 1
        
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]); // Суммируем две верхние цифры
        }
        
        newRow.push(1); // Последняя цифра всегда 1
        res.push(newRow);
    }
    
    return res;
}

// Тесты
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
console.log(generate(3)); // [[1],[1,1],[1,2,1]]
