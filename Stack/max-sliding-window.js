let arr = [1, 3, -1, -3, 5, 3, 6, 7],
    K = 3;

// [1, 3, -1, -3, 5, 3, 6, 7]
// q = []

/* 
  Part - 1 = one time only 
  i = 2
  result = [];
  max = Math.max(curr, last val of Q) = 3
  q = [1, 3, -1] | q.length === K then stop 

  Part - 2
  Q = [1, 3, -1] result = [3]
  Q = [3, -1, -3] max = 3, i = 3, result = [3, 3]
  Q = [-1, -3, 5] max = 5, i = 4, result = [3, 3, 5]
  Q = [-3, 5, 3] max = 5, i = 5, result = [3, 3, 5, 5]
  Q = [5, 3, 6] max = 6, i = 6, result = [3, 3, 5, 5, 6]
  Q = [3, 6, 7] max = 7, i = 7, result = [3, 3, 5, 5, 6, 7]
  while until arr.length - 1 === i then stop 

  print result;
*/

function maxSlidingWindow(arr, K) {
    // part 1
    let i = 0;
    let q = [];
    let max = 0;
    let result = [];

    while (q.length !== K) {
        q.push(arr[i]);
        max = Math.max(arr[i], max);
        i++;
    }

    result.push(max);

    // part 2
    while (i !== arr.length) {
        // dequeue
        q.shift();

        // enqueue
        q.push(arr[i]);

        max = Math.max(arr[i], max);

        result.push(max);

        i++;
    }

    return result;
}

console.log(maxSlidingWindow(arr, K));
