var findAverage = function (nums) {
    return nums.reduce((acc, el) => acc+el) / nums.length
}