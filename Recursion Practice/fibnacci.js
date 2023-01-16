

// fibanacci series 
// 0 1 1 2 5 8 (N) Current Value

// Formula
// N = (N - 1) + (n-2)
// (n + 1) = N + (N - 1)

let peak = 0;
let n = 5;

function fib(n) {

    // peak condition
    if (n === peak) {
        return [0, 1];
    }

    // Recursive call 
    let result = fib(n - 1);

    // Slide loop
    result[n + 1] = result[n] + result[n - 1];

    return result;
}
console.log(fib(n));

 // [0, 1, 1]
 // [n =1]
 // n+1