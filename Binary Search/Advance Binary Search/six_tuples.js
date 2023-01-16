
// six-tuplets

// ((a * b + c) / d) - e = f
// (a * b + c) / d = f + e
// a * b + c = (f + e) * d

// LHS = a * b + c
// RHS = (f + e) * d
// create RHS
// sort RHS
//

let arr = [2, 3];
let n = arr.length;
let RHS = [];
let LHS = [];
let count = 0;
let val = 0;

// RHS = (f + e) * d
for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                RHS[count++] = arr[i] * (arr[j] + arr[k]);
            }
        }
    }
}

count = 0;
let result = 0;
// LHS = a * b + c
for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                val = arr[i] * arr[j] + arr[k];
                result += RHS.filter((x) => x === val).length;
            }
        }
    }
}

console.log(result);

// function upperBound(left, right, arr, find) {
//     if (left >= right) return left;

//     let mid = Math.floor((left + right) / 2);

//     if (find >= arr[mid]) return upperBound(mid + 1, right, arr, find);
//     else return upperBound(left, mid, arr, find);
// }

// function lowerBound(left, right, arr, find) {
//     if (left >= right) return left;

//     let mid = Math.floor((left + right) / 2);

//     if (find <= arr[mid]) return lowerBound(left, mid, arr, find);
//     else return lowerBound(mid + 1, right, arr, find);
// }

// // console.log(RHS);
// // console.log(LHS);
// // console.log(result);
// let temp = [8, 10, 10, 12, 12, 15, 15, 18];
// console.log("upperBound", upperBound(0, temp.length - 1, temp, 15));
// console.log("lowerBound", lowerBound(0, temp.length - 1, temp, 15));
