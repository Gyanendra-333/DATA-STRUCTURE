let N = 9;
let grid = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

// valid number 1 - 9
// pre-conditions
// 1. entire row
// 2. entire column
// 3. 3 * 3 matrix
let rowPeak = N - 1;
let colPeak = N;

function isValidNumber(row, col, grid, n) {
    // entire row
    for (let i = 0; i < N; i++) {
        if (grid[i][col] === n) return false;
    }

    // entire col
    for (let i = 0; i < N; i++) {
        if (grid[row][i] === n) return false;
    }

    //  3 * 3 mat
    let matRow = row - (row % 3);
    let matCol = col - (col % 3);

    for (let i = matRow; i < matRow + 3; i++) {
        for (let j = matCol; j < matCol + 3; j++) {
            if (grid[i][j] === n) return false;
        }
    }

    return true;
}

function sudokuSolver(grid, row, col) {
    // peak condition
    if (row === rowPeak && col === colPeak) {
        console.log(grid);
        return true;
    }

    // post traversing through the column of a row, then
    // we start from the next row and first col
    if (col === colPeak) {
        row++;
        col = 0;
    }

    // if the value is not 0 then move to next number
    if (grid[row][col] !== 0) return sudokuSolver(grid, row, col + 1);

    for (let i = 1; i <= 9; i++) {
        if (isValidNumber(row, col, grid, i)) {
            grid[row][col] = i;

            if (sudokuSolver(grid, row, col + 1)) {
                return true;
            }

            // backtracking
            grid[row][col] = 0;
        }
    }
    return false;
}

sudokuSolver(grid, 0, 0);

/*
Output: 
[
  [3, 1, 6, 5, 7, 8, 4, 9, 2],
  [5, 2, 9, 1, 3, 4, 7, 6, 8],
  [4, 8, 7, 6, 2, 9, 5, 3, 1],
  [2, 6, 3, 4, 1, 5, 9, 8, 7],
  [9, 7, 4, 8, 6, 3, 1, 2, 5],
  [8, 5, 1, 7, 9, 2, 6, 4, 3],
  [1, 3, 8, 9, 4, 7, 2, 5, 6],
  [6, 9, 2, 3, 5, 1, 8, 7, 4],
  [7, 4, 5, 2, 8, 6, 3, 1, 9]
]

*/
