function findSubstringInWraproundString(s) {
  const maxLen = new Array(26).fill(0); // длина максимальной цепочки на каждую букву
  let currLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      i > 0 &&
      (s.charCodeAt(i) - s.charCodeAt(i - 1) + 26) % 26 === 1
    ) {
      currLen += 1;
    } else {
      currLen = 1;
    }

    const index = s.charCodeAt(i) - 97;
    maxLen[index] = Math.max(maxLen[index], currLen);
  }

  // Суммируем все уникальные подстроки
  return maxLen.reduce((sum, len) => sum + len, 0);
}