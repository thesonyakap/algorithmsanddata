function SearchPosition(nums,target) {
  if (nums.indexOf(target) > 0) {
    return nums.indexOf(target)
  } else {
    nums.push(target)
    nums.sort(compareNumeric)
    return nums.indexOf(target)
    }
  }

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(SearchPosition([1,3,5,6], 2))
console.log(SearchPosition([1,3,5,6], 5))
console.log(SearchPosition([1,3,5,6], 7))