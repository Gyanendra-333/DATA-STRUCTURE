
// aggressive bulls

// stalls = 0 .... [1 2 4 8 9]
// [0,1,2,3,4]

// Logic 1
// alignment of the stalls
// ||
// ||___1___2______4____________8___9
// ||___0__________0____________0____
// [3]  [5]
// bulls = 3

// Logic 2
// 1___2______4____________8___9
// mid = 2 (index)
// 0, 1 >= 2, count = 0;
// 3 >= 2, count = 1;
// count = 2
// count = 3

// mid = 2

// mid = 3 (index)
// 0, 1 >= 3, count = 0;
// 3 >= 3, count = 1;
// count = 2
// count = 3

// mid = 3

// mid = 4 (index)
// 0, 1 >= 4, count = 0;
// 3 >= 4, count = 0;
// count = 1
// count = 2

let arr = [1, 10, 23];
let bulls = 2;
let result = 0;

function binarySearch(left, right, arr, bulls) {
    if (left > right) return;

    let mid = Math.floor((left + right) / 2);

    if (isValid(arr, mid, bulls)) {
        result = mid;

        binarySearch(mid + 1, right, arr, bulls);
    }
    else binarySearch(left, mid - 1, arr, bulls);
}
function isValid(arr, mid, bulls) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[0] >= mid) {
            count++;
        }
    }
    return count >= bulls;
}
binarySearch(0, 100, arr, bulls);
console.log(result);