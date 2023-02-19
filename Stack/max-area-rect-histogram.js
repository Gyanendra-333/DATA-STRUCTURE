// Stock plan problem

let arr = [6, 2, 5, 4, 5, 1, 6];
// let arr = [2, 1, 5, 6, 2, 3];

/*

*/
function maxAreaHistogram(arr) {
    let result = 0;
    let minLeftIndex = -1;
    let minRightIndex = -1;
    let minLeftVal = null;
    let minRightVal = null;

    for (let i = 0; i < arr.length; i++) {
        let lenOfBar = arr[i];

        // logic to get the minimum left index
        /* let j = i;
        minLeftVal = lenOfBar;
        minLeftIndex = i;
        while (j >= 0) {
            if (minLeftVal > arr[j]) {
                minLeftVal = arr[j];
                minLeftIndex = j;
                break;
            }
            j--;
        }

        // logic to get the minimum right
        j = i;
        minRightVal = lenOfBar;
        minRightIndex = i;
        while (j <= arr.length - 1) {
            if (minRightVal > arr[j]) {
                minRightVal = arr[j];
                minRightIndex = j;
                break;
            }
            j++;
        }
*/

        minLeftIndex = NSE_Left(arr, i);
        minRightIndex = NSE_Right(arr, i);
        debugger;
        let widthOfBars = minRightIndex - minLeftIndex - 1;

        result = Math.max(widthOfBars * lenOfBar, result);
    }

    return result;
}

function NSE_Left(arr, start) {
    let stack = [];
    let result = new Array(arr.length).fill(0);

    for (let i = start; i >= 0; i--) {
        if (stack.length === 0) {
            stack.push({ data: arr[i], index: i });
        } else {
            // stack: [{ data: 85, index: 6 }]
            // LAST ELEMENT - stack[stack.length - 1]
            while (
                stack.length !== 0 &&
                arr[i] < stack[stack.length - 1].data
            ) {
                return i;
            }

            stack.push({ data: arr[i], index: i });
        }
    }

    while (stack.length !== 0) {
        result[stack.pop().index] = -1;
    }
    return result;
    // Output
    //return result.map((item, i) => i - item);
}

function NSE_Right(arr, start) {
    let stack = [];
    let result = new Array(arr.length).fill(0);

    for (let i = start; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push({ data: arr[i], index: i });
        } else {
            // stack: [{ data: 85, index: 6 }]
            // LAST ELEMENT - stack[stack.length - 1]
            while (
                stack.length !== 0 &&
                arr[i] < stack[stack.length - 1].data
            ) {
                return i;
            }

            stack.push({ data: arr[i], index: i });
        }
    }

    return result;
    // Output
    //return result.map((item, i) => i - item);
}

console.log(maxAreaHistogram(arr));

// console.log(NSE_Left(arr, 3));
// console.log(NSE_Right(arr, 3));
