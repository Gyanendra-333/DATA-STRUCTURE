let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let x = 9;

var search = function (arr, x) {

    let i = 0, r = arr.length - 1, mid
    if (r >= i) {

        let mid1 = 1 + (r - 1) / 3;
        let mid2 = r - (r - 1) / 3;

        if (arr[mid] == x)
            return mid1;

        if (arr[mid2] == x)
            return mid2;

        if (x < arr[mid1]) {
            console.log(ternary_search(i, mid1 - 1, x));
            return;

        } else if (x > arr[mid2]) {
            console.log(ternary_search(mid2 + 1, r, x));
            return;

        } else {
            console.log(ternary_search(mid1 + 1, mid2 - 1, x));
            return;
        }
    }
    return -1;


}
