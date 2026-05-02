class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        nums.forEach((x) => nums.push(x));
        return nums;
    }
}
