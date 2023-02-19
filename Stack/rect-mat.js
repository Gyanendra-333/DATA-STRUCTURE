let mat = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
];
let maxArea = 0;
let result = 0;

/*
    [0, 0, 0, 0] => non existing
    -------------
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],

    // Addition of matrix prev rows
    [0, 1, 1, 0],
    [1, 2, 2, 1],
    [2, 3, 3, 2],
    [3, 4, 0, 0], => do not add zero if its is at the bottom

    // Addition of Minimums you can fit in the array of rows = stack
    [0, 1, 1, 0], => 2
    [1, 2, 2, 1], => 4
    [2, 3, 3, 2], => 8
    [3, 4, 0, 0], => 6

    Find the max of the addition of minimums => 8
*/

/*
    [1, 2, 2, 1]
    [1]
    1 <==> 2
    arr[i] > stack[stack.length - 1] => stack[stack.length - 1]
    [1, 1]
    arr[i] === stack[stack.length - 1] => stack[stack.length - 1]
    [1]
    arr[i] < stack[stack.length - 1] => replacement

    [0, 1, 1, 0]
    [0]
*/

function maxRect(mat) {
    for (let i = 0; i < mat.length; i++) {
        if (i > 0) {
            for (let j = 0; j < mat[0].length; j++) {
                mat[i][j] !== 0 && (mat[i][j] += mat[i - 1][j]);
            }
        }
        maxArea = 0;
        let row = mat[i];
        let stack = [];

        for (let k = 0; k < row.length; k++) {
            if (stack.length === 0) {
                stack.push(row[k]);
                maxArea += row[k];
            } else if (stack[stack.length - 1] === 0) {
                stack.pop();
                stack.push(row[k]);
                maxArea += row[k];
            } else if (row[k] !== 0 && row[k] < stack[stack.length - 1]) {
                stack.pop();
                stack.push(row[k]);
                maxArea += row[k];
            } else if (row[k] !== 0 && row[k] >= stack[stack.length - 1]) {
                stack.push(stack[stack.length - 1]);
                maxArea += stack[stack.length - 1];
            }
        }

        result = Math.max(result, maxArea);
    }
}
maxRect(mat);

console.log(result);
