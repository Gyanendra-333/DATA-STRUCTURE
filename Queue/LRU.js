// Part - 1 - Simple
// map = { 1: 1, 2: 1, 3: 1 }
// [1, 2, 3]
// [2, 3, 4] = push(4)
// [3, 4, 5] = push(5)
// [4, 5, 1] = push(1)

// Part 2 - Existing but last
// [5, 1, 4] = push(4)

// Part 3 - Existing but first
// [5, 1, 4] = push(4)

// Part 4 - Existing but middle
// [5, 4, 1] = push(1), elpushedOut = 5
let map = new Map([]);

function Item(data) {
    this.data = data;
}
function Queue() {
    this.data = [];
    this.cacheSize = 3;
}
Queue.prototype.push = function (data) {
    // Algorithm for LRU
    let poppedEl = null;
    let item = new Item(data);

    if (this.data.length < this.cacheSize) {
        this.data.push(item);
        map.set(data, map.has(data) ? map.get(data) + 1 : 1);
    } else {
        // first and the last element
        if (this.data[this.data.length - 1].data !== data) {
            // adding
            this.data.push(item);
            map.set(data, map.has(data) ? map.get(data) + 1 : 1);

            // removing
            poppedEl = this.pop();
            map.delete(poppedEl.data);
        }

        // middle element
        // check for the duplicate
        if (map.get(item.data) === 2) {
            for (let i = 0; i < this.data.length - 1; i++) {
                if (this.data[i].data === item.data) {
                    this.data[i] = poppedEl;
                }
            }
        }
    }
};

Queue.prototype.pop = function () {
    return this.data.shift();
};

let queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

// normal
queue.push(4);
queue.push(5);
queue.push(1);

// last
queue.push(4);

// first
queue.push(4);

// middle 
queue.push(1);


console.log(queue);
