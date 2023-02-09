let arr = [-15, -10, 0, -13, 18, 5, -11, 10];

function countSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let freq = new Array(range).fill(0);

    // frequency
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i] - min]++;
    }

    // frequency sum
    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1];
    }

    // result evaluation
    let result = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let fI = arr[i] - min;
        let aI = freq[fI];

        result[aI - 1] = arr[i];

        freq[fI]--;
    }

    return result;
}

let output = countSort(arr);

console.log(output);
