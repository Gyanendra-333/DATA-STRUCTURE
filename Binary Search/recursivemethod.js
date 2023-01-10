var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let key = 5;

function binarysearch(sortedArray, key) {
    return binarysearchHelper(sortedArray, key, 0, sortedArray.length - 1);
}
function binarysearchHelper(sortedArray, key, start, end) {
    if (start > end) return -1;
    let middle = math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {

        // found the key
        return middle;
    } else if (sortedArray[middle] < key) {
        //continue the searching to thr right
        console.log(binarysearchHelper(sortedArray, key, mid + 1, end))
    }
    else {
        //searching to thr left
        console.log(binarysearchHelper(sortedArray, key, start, end - 1));
    }
}