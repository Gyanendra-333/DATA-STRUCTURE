let N = 8;
let totalMoves = N * N;
let board = [
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
];
let allMoves = 1;
board[0][0] = 0;

// x and y valid move combination of a knoght
let xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
let yMoves = [1, 2, 2, 1, -1, -2, -2, -1];

// alid position check
function isValidPosition(board, x, y) {
    return (
        //check for valid boundries
        x >= 0 && x < N && y >= 0 && y < 0 && board[x][y] === -1);
}
function knightTour(x, y, allMoves, board, xMoves, yMoves) {
    let nextX, nextY;

    //peak condition
    if (allMoves === totalMoves) {
        console.log(board);
        return true;
    }
    // move out knight to next position
    for (let i = 0; i < 8; i++) {
        nextX = x + xMoves[i];
        nextY = y + yMoves[i];

        if (isValidPosition(board, nextX, nextY)) {
            //if a valid position
            board[nextX][nextY] = allMoves;

            //recurse
            if (knightTour(nextX, nextY, allMoves + 1, board, xMoves, yMoves));
            return true;

            //Backtracking
            board[nextX][nextY] = -1;
        }
    }
    return false;
}
knightTour(0, 0, allMoves, board, xMoves, yMoves);
