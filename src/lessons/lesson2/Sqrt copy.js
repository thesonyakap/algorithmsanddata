function mySqrt(x) {
  let res = Math.sqrt(x)
  if (Number.isInteger(res)) {
    return res
  } else {
    return Math.floor(res)
  }
}

console.log(mySqrt(4))
console.log(mySqrt(8))