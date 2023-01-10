
let arr = [2, 4, 5, 6, 7, , 8, 3, 9, 10];
let find = 3;

function linearSearch(arr, find) {
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === find) {
            console.log("we found ", find, "at location  ", i);
            return;
        }
    }
}
linearSearch(arr, find);

function linearSearchRecurse(i, arr, find) {
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === find) {
            console.log("we found ", find, "at location  ", i);
            return;
        }
        if (i === arr.lenght - 1) {
            console.log("sorry we not found ", find, " at this given array");
            return;
        }
        console.log("climb ", i);
    }
    console.log("slide ", i)
}
linearSearchRecurse(0, arr, find);