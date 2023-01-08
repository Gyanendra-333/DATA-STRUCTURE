//Binary search

//pre-Condition : Array should be stored

let arr = [3, 5, 1, 8, 10];
let find = 9;

// log n

function linearSearch(arr, find) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            console.log("We found ", find, " at location ", i);
            return;
        }
    }
}

linearSearch(arr, find);

function linearSearchRecurse(i, arr, find) {
    // Peak Condition
    if (arr[i] === find) {
        console.log("We found ", find, " at location ", i);
        return;
    }

    // False check at the peak
    if (i === arr.length - 1) {
        console.log("So Sorry : We did not find ", find, " in the given Array");
        return;
    }
    console.log("Climb ", i);

    //Climb loop
    linearSearchRecurse(i + 1, arr, find);

    //Backtracking
    console.log("Slide ", i);
}
linearSearchRecurse(0, arr, find);