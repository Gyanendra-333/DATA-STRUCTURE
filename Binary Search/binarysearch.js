// Binary search

/*
left - leftmost element of the array/subarray
right - rightmost element of the array/subarray
mid - Randomly calculated middle element of the array/subarray
mid - Floor(r+1/2)

// Alogorithms Logic

find = 5
leftindex = 0
rightindex = 5
middleindex 3

*/

// 1.  if find = mid return

/*

2. if left part of the array
recurse function
leftIndex = 0 
rightIindex = prev(middleIndex) - 1 = 2
middleIndex = 1
call 1

3. if right part of the array
recurse function
leftIndex = prev(middleIndex)+1 =4
rightIndex = 5
middleIndex = 5
call 1

*/

let arr = [1, 2, 3, 4, 5, 5, 6, 7, 9];
let find = 5;

function binarySearch(left, right, arr, find) {

    //error peak condition
    if (right < left) {
        console.log(find, " is not present in the arr");
        return false;
    }
    //Success peak condition
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === find) {
        console.log("we got ", find, " at location", middle);
        return true;
    }
    //left condition
    if (find < arr[middle]) {
        return binarySearch(left, middle - 1, arr, find);
    }
    //right condition
    if (find > arr[middle]) {
        return binarySearch(middle + 1, right, arr, find);
    }
}
binarySearch(0, arr.length - 1, arr, find);

/*
while (right>=left){
    calc middle
    mid check
    left
        update right and left indexes
    right
        update right and left indexes
}
*/