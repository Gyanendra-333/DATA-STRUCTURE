
let arr = [90, 36, 17, 25, 26, 7, 1, 2, 3, 19];
let k = 3;
function heapSort(arr) {
  let mid = Math.floor(arr.length / 2) - 1;
  for (let i = mid; i >= 0; i--) {
    heapify(i, arr.length);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(0, i);
  }

  console.log(arr);
}

function heapify(mid, limit) {
  let left = mid * 2 + 1;
  let right = mid * 2 + 2;
  let max = mid;
  // assuming that the mid is the largest value index

  if (left < limit && arr[max] < arr[left]) {
    max = left;
  }

  if (right < limit && arr[max] < arr[right]) {
    max = right;
  }

  if (max !== mid) {
    // swap
    let temp = arr[max];
    arr[max] = arr[mid];
    arr[mid] = temp;

    heapify(max, limit);
  }
}

heapSort(arr);

console.log(arr[arr.length - k]);