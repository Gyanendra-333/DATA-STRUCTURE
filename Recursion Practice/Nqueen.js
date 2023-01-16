
let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

let N = board.length;

function nQueens(board, col) {
    // peak condition
    if (col === N) {
        console.log(board);
        return true;
    }

    for (let i = 0; i < N; i++) {
        if (isValidPosition(board, col, i)) {
            // climb loop
            board[i][col] = 1;

            if (nQueens(board, col + 1)) return true;

            // slide loop
            board[i][col] = 0;
        }
    }

    return false;
}

function isValidPosition(board, col, row) {
    // left x axis
    for (i = col; i >= 0; i--) {
        if (board[row][i] !== 0) return false;
    }

    // diagonal upper left axis
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] !== 0) return false;
    }

    // diagonal lower left axis
    for (i = row, j = col; i < 0 && j >= 0; i++, j--) {
        if (board[i][j] !== 0) return false;
    }

    return true;
}

nQueens(board, 0);

/*
[ 
   [ 0, 0, 1, 0 ], 
   [ 1, 0, 0, 0 ], 
   [ 0, 0, 0, 1 ], 
   [ 0, 1, 0, 0 ]
]
*/
