
let arr = [2, 4, 5, 6, 7, , 8, 3, 9, 10];
let find = 3;

function linearSearch(arr, find) {
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === find) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(arr, find));