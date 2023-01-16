let input = [
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
];

let result = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

let N = input.length;

function ratInMaze(input, result, x, y) {
    // peak condition
    if (x === N - 1 && y === N - 1 && input[x][y] === 0) {
        result[x][y] = 1;
        console.log(result);
        return true;
    }

    // climb condition
    if (isValidPosition(input, x, y)) {
        // position is valid
        // if my current valid location as per input has a 1 in my result; then
        // return false
        if (result[x][y] === 1) return false;

        result[x][y] = 1;

        // check right
        if (ratInMaze(input, result, x + 1, y)) return true;
        // check bottom
        if (ratInMaze(input, result, x, y + 1)) return true;

        // backtracking

        // check left
        if (ratInMaze(input, result, x - 1, y)) return true;
        // check top
        if (ratInMaze(input, result, x, y - 1)) return true;

        // if there is no valid position after all direction check
        result[x][y] = 0;
        return false;
    }

    // position is not valid
    return false;
}

function isValidPosition(input, x, y) {
    // check for valid boundary
    return (
        x >= 0 &&
        x < N &&
        y >= 0 &&
        y < N &&
        // valid input position
        input[x][y] === 0
    );
}

ratInMaze(input, result, 0, 0);

/**
 * 
 * expected output
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1],

* received output
[ 
    [ 1, 0, 0, 0 ], 
    [ 1, 1, 0, 0 ], 
    [ 0, 1, 0, 0 ], 
    [ 0, 1, 1, 1 ] 
]
 */
