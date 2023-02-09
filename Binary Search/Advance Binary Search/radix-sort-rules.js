// [129, 431, 234, 653, 232, 824, 2, 921, 54]

// Rule Node. 1
// max here is 921
// max string length is 3
// this means we need to sort the array 3 times

// Rule No. 2
// Sort them starting from the units first as 1 till the max-length
// [9, 1, 4, 3, 2, 4, 2, 1, 4]
// count sort
// frequency > frequency sum > create result array
// (placing the values in the resultant array, place the actual values instead of the units)

// Rule No. 3
// follow the Rule No. 2 until you are done with the max-length
// recursion and the peak condition will take place

let arr = [129, 431, 234, 653, 232, 824, 2, 921, 54];
let decimal = 1;
let max = Math.max(...arr);
let maxLength = max.toString().length;

console.log(max, maxLength);

function radixSort(arr, decimal) {
    // peak condition
    if (decimal === Math.pow(10, maxLength)) return;

    console.log("============", decimal, "=============");

    // frequency
    let frequency = new Array(10).fill(0);

    // examples
    // 129 => 129 % 10 => 9
    // 129 => 12.9 % 10 => 2.9 => 2
    // 129 => 1.29 % 10 => 1.2 => 1
    for (let i = 0; i < arr.length; i++) {
        let base = Math.floor((arr[i] / decimal) % 10);
        frequency[base] += 1;
    }

    console.log("frequency", frequency);

    for (let i = 1; i < frequency.length; i++) {
        frequency[i] += frequency[i - 1];
    }

    console.log("frequency sum", frequency);

    let result = new Array(arr.length).fill(0);

    for (let i = arr.length - 1; i >= 0; i--) {
        let base = Math.floor((arr[i] / decimal) % 10);
        let fI = frequency[base];

        result[fI - 1] = arr[i];

        frequency[base] -= 1;
    }

    console.log(result);

    radixSort(result, decimal * 10);
}

radixSort(arr, decimal);

// Output Radix Sort:
[2, 54, 129, 232, 234, 431, 653, 824, 921];
