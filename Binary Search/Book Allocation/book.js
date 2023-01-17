// [12, 34, 67, 90]
// [12] [34] [67] [90] [12 + 34] [34 + 67] [67 + 90] [12, 34, 67] [34, 67, 90]

// S1 = 12 = 12
// S2 = [34, 67, 90] = 191
// Diff = 189 = Total = 191 mins

// S1 = 90 = 90
// S2 = [12, 34, 67] = 113
// Diff = 23 = Total = 113 mins

// S1 = [67 + 90] = 157
// S2 = [12, 34] = 46
// Diff = 111; Total = 157 mins

// Min Diff 23.
// [90] [12, 34, 67]

// Method 2
// hashMap = { S1: 0, S2: 0 }
// { S1: 12, S2: 90 }
// { S1: 46, S2: 90 }
// { S1: 113, S2: 90 }


let arr = [12, 34, 67, 90];
let n = arr.length;
let students = 2;
let minSum = arr[n - 1];
let maxSum = arr.reduce((val, curr) => curr + val, 0);

// [90 ------- 203]

// BS
// mid = 146
// 203 < 146
// [90 ------- 146]

// mid = 118
// [113] [90]
// [90 ------- 146]

function binarySearch(left, right, arr, students) {
    debugger;
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
    for (let i = 0; i < n; i++) {
        if (arr[i] > mid) return;

        sum += arr[i];

        if (sum > mid) {
            count++;
            sum = arr[i];
        }
    }

    return count <= students;
}

binarySearch(minSum, maxSum, arr, students);
console.log(result);
