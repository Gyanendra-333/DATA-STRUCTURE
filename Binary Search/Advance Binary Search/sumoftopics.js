// sum of topics

/*
Formula

A[i] + A[j] > B[i] + B[j]
 A[i] - B[i] + A[j] - B[j] > 0
 ------
 (A[i] - B[i]) > -(A[j] - B[j])
 (A[i] - B[i]) where i 0 => N = D
 (A[j] - B[j]) where j 0 => N = D

*/

let A = [4, 8, 2, 6, 2];
let B = [4, 5, 4, 1, 3];
let n = 5;
let D = [];

// resultant left array; D[]
for (let i = 0; i < n; i++) {
    D[i] = A[i] - B[i];
}
/*
// (A[i] - B[i]) > -(A[j] - B[j]) i,j - 0 => N
// D[i] > -D[j]
// D[i] + D[j] > 0
// 3 > -3
// Infinity > -Infinity
*/
// sorted array because we are using Binary Search
// as a solution for algo for this problem
D.sort((a, b) => a - b);

console.log(D);

/*
// [ -2, -1, 0, 3, 5 ]
// -2  = -(-2) = 2 = 3
// [ 3, 3, 3, 3, 5 ]
// [  3,  3, 3, 3, 5 ] = Binary Search
// N = 5, N-1 = 4
// [  2,  2, 2, 1, 0 ]
// 7
//  [ 3, 3, 3, 3, 5 ]
// [3, 3, 3, 3] [5]
// 
*/

let result = 0;
for (let i = 0; i < n; i++) {
    if (D[i] < 0) {
        let val = binarySearch(0, D.length - 1, D, -D[i]);
        result += n - val;
    } else {
        result += n - 1 - i;
    }
}

let arr = [-2, -1, 0, 3, 5],
    find = 1;
function binarySearch(left, right, arr, find) {
    // base / peak condition
    if (left > right) return left;

    let mid = Math.floor((left + right) / 2);

    if (find <= arr[mid]) {
        return binarySearch(left, mid - 1, arr, find);
    } else {
        return binarySearch(mid + 1, right, arr, find);
    }
}
console.log(binarySearch(0, arr.length - 1, arr, find));



// [ -2, -1, 0, 3, 5 ]
// [ 3, 3, 3, 3, 5 ]
// [ 2, 2, 2, 1, 0]
// 7