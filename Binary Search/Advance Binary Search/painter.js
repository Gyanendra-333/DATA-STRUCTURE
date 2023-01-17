
// 1 sqft = 1 bd
// 1 bd = 1 min
// 1 pt = 1 bd = 1 min

// 10 bd
// 20 bd
// 30 bd
// 40 bd
// total = 100 bd

// ---------- T = 40, bd = 20
// P1 = 10 + 20 = 30 + 30 = 60
// P2 = 40

let arr = [10, 20, 30, 40];
let students = 2;
let n = arr.length;
let result = 0;
let minSum = arr[n - 1]; // 90
let maxSum = arr.reduce((val, curr) => curr + val, 0); // 203

function binarySearch(left, right, arr, students) {
    if (left > right) return;

    let mid = Math.floor((left + right) / 2);

    if (isValid(arr, mid, students)) {
        result = mid;
        binarySearch(left, mid - 1, arr, students);
    } else binarySearch(mid + 1, right, arr, students);
}

function isValid(arr, mid, students) {
    let sum = 0;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mid) return false;

        sum += arr[i];

        if (sum > mid) {
            sum = arr[i];
            count++;
        }
    }
    return count <= students;
}

binarySearch(minSum, maxSum, arr, students);

console.log(result);
