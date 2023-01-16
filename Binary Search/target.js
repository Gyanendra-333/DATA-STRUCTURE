
var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return -1;

}
let nums = (1, 2, 3, 4, 5, 6, 6, 7);
let target = 3;
console.log(search(nums, target));