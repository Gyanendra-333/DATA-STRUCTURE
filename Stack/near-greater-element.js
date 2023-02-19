// Next greater element

// arr = [11, 13, 21, 3]
// stack = [11]
// 11 => 13

// arr = [11, 13, 21, 3]
// stack = [13]
// 13 => 21

// arr = [11, 13, 21, 3]
// stack = [21]

// arr = [11, 13, 21, 3]
// stack = [21, 3]

// arr = [11, 13, 21, 3]
// stack = [3]
// 21 => -1
// 3 => -1

//let arr = [11, 13, 21, 3];
let arr = [2, 7, 3, 5, 4, 6, 8];

function NextGreaterElement(arr) {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push(arr[i]);
            continue;
        }
        while (stack[stack.length - 1] < arr[i]) {
            console.log(stack[stack.length - 1] + " ===> " + arr[i]);
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.length !== 0) {
        console.log(stack.pop() + " ===> -1");
    }
}

NextGreaterElement(arr);
