let str = "unacademy";

function countSort(str) {
    let strArr = str.split("");
    let freq = new Array(26).fill(0);

    // frequency
    for (let i = 0; i < strArr.length; i++) {
        freq[strArr[i].charCodeAt() - 97]++;
    }

    console.log("frequency", freq);

    // frequency sum
    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1];
    }

    console.log("frequency sum", freq);

    let result = new Array(strArr.length).fill(0);

    // evaluation of the result
    for (let i = 0; i < strArr.length; i++) {
        let placement = strArr[i].charCodeAt() - 97;
        let alphabetIndex = freq[placement];

        result[alphabetIndex - 1] = strArr[i];

        freq[placement]--;
    }

    console.log("result", result.join(""));
}

countSort(str);
