// let arr = [2, 7, 3, 5, 4, 6, 8];
let arr = [2, 7, 3, 5, 4, 6, 8];
// let arr = [5, 4, 3, 2, 1];

// stack = [2]
//

// stack = [7]
// 2 => 7

// stack = [7, 3]
//

// stack = [7, 5]
// 3 => 5

// stack = [7, 6]
// 4 => 6
// 5 => 6

// stack = [8]
// 6 => 8
// 7 => 8

// 8 => -1

function greaterNearestElement(arr) {
    let stack = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        while (arr[i] > stack[stack.length - 1]) {
            console.log(stack.pop(), " ==> ", arr[i]);
        }
        stack.push(arr[i]);
    }

    while (stack.length !== 0) {
        console.log(stack.pop(), " ==> ", -1);
    }
}

greaterNearestElement(arr);
