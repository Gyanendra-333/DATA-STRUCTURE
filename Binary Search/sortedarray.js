
let sortedArr = [1, 2, 2, 4, 5, 6, 7, 8, 9];
let find = 6;

function binarySearch(sortedArr, find) {
    let start = 0;
    let end = sortedArr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArr[middle] === find) {
            //found the value
            return middle;
        } else if (sortedArr[middle] < find) {
            //continue searching to the right
            start = middle + 1;
        } else {
            //searching to the left
            enf = middle - 1;
        }
    }
    //key was not found
    return -1;
}
console.log(binarySearch(sortedArr, find));