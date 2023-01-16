function check(mid, array, n, K) {
    debugger;
    var count = 0;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        // If individual element is greater
        // maximum possible sum
        if (array[i] > mid) return false;

        // Increase sum of current sub - array
        sum += array[i];

        // If the sum is greater than
        // mid increase count
        if (sum > mid) {
            count++;
            sum = array[i];
        }
    }
    count++;

    // Check condition
    if (count <= K) return true;
    return false;
}

// Function to find maximum subarray sum
// which is minimum
function solve(array, n, K) {
    debugger;
    var max = array.reduce((a, b) => Math.max(a, b));
    var start = max; //Max subarray sum, considering subarray of length 1
    var end = 0;

    for (var i = 0; i < n; i++) {
        end += array[i]; //Max subarray sum, considering subarray of length n
    }

    // Answer stores possible
    // maximum sub array sum
    var answer = 0;
    while (start <= end) {
        var mid = parseInt((start + end) / 2);

        // If mid is possible solution
        // Put answer = mid;
        if (check(mid, array, n, K)) {
            answer = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return answer;
}

// Driver Code
var array = [1, 2, 3, 4];
var n = array.length;
var K = 3;

console.log(solve(array, n, K));
