
var arr = [1, 23, 4, 5, 6, 34, , 56, 4, 5, 5];
var find = 3;

function globalLinearSearch(arr, find) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            result.push(i);
        }
    }
    // if result array is empty ,return -1
    if (!result) {
        return -1;
    }
    return -1;
}
console.log(globalLinearSearch(arr, find));