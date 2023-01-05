// Simple recursive function

let n = 3;
let peak = 0;

function recursive(n = 3) {

    // peak Condition
    if (n === peak) return true;

    // Climb loop
    console.log("climb ", n);

    // Recursive call 
    recursive(n - 1);

    // Slide loop
    console.log("Slide ", n);
}

recursive(n);