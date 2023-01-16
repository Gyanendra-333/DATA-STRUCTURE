
// square root

let num = 10;
let precision = 4;

// divide and search
// 0 ----- 50
// ----25----
// 25 * 25 <= 50
// 0 ---- 25
// 12.5
// 156.25 > 50
// 6.25
// 6.25 ----- 12.5

let val = 0;
function binarySearch(left, right, find) {
    if (left >= right) return;

    let mid = (left + right) / 2;
    let sqr_mid = mid * mid;

    if (sqr_mid === mid) {
        return;
    }

    if (sqr_mid >= find) {
        val = mid;
        binarySearch(left, mid - 1, find);
    } else {
        binarySearch(mid + 1, right, find);
    }
}
binarySearch(0, num, num);

let result = Math.floor(val);
let decimal = 0.1;
for (let i = 0; i < precision; i++) {
    while (result * result <= num) {
        result += decimal;
    }
    // correction
    result -= decimal;
    decimal = decimal / 10;
}

console.log(result.toFixed(precision));

// prec 1
// 7.1 * 7.1 <== 50
//
// 7.125
