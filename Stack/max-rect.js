let mat = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
];
let maxArea = 0;

// [0, 1, 1, 0]
function maxRect(mat) {
    for (let i = 1; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] != 0) mat[i][j] += mat[i - 1][j];
        }
        maxArea = 0;
        let arr = mat[i];
        let stack = [];
        for (let k = 0; k < arr.length; k++) {
            if (stack.length === 0) {
                stack.push(arr[k]);
                maxArea += arr[k];
            } else {
                if (arr[k] !== 0 && stack[stack.length - 1] > arr[k]) {
                    stack.pop();
                    stack.push(arr[k]);
                    maxArea += arr[k];
                } else if (stack[stack.length - 1] < arr[k]) {
                    stack.push(stack[stack.length - 1]);
                    maxArea += stack[stack.length - 1];
                } else if (stack[stack.length - 1] == arr[k]) {
                    stack.push(arr[k]);
                    maxArea += arr[k];
                }
            }
        }

        console.log(maxArea);
    }
    console.log(mat);
}

maxRect(mat);
