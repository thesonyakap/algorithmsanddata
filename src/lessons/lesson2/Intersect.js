function intersect(nums1, nums2) {
    let result = [];
    for (let num of nums2) {
        let index = nums1.indexOf(num);
        if (index !== -1) {
            result.push(num);
            nums1.splice(index, 1);
        }
    }
    return result;
}

console.log(intersect([1,2,2,1],[2,2]))
console.log(intersect([1,2,2,1],[2]))
console.log(intersect([1,2,2,1],[1,2]))
console.log(intersect([1,2,2,1],[2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))
