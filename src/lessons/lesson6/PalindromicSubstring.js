function countSubstrings(s) {
    let count = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // нечётные палиндромы (один центр)
        expandAroundCenter(i, i + 1); // чётные палиндромы (двойной центр)
    }

    return count;
}