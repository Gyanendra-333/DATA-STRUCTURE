
function Item(val) {
    this.value = val;
    this.rear = null;
    this.front = null;
}

function Queue() {
    this.data = [];
}

Queue.prototype.enqueue = function (val) {
    let item = new Item(val);

    // this is to link the Items in the queue
    if (this.data.length > 0) {
        this.data[this.data.length - 1].rear = item;
    }

    // array functionalities
    this.data.push(item);
};

Queue.prototype.dequeue = function () {
    // array functionality
    //this.data.shift();

    // shift() with swap
    let i = 0;
    let j = i + 1;
    while (j !== this.data.length) {
        let temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
        i++;
        j++;
    }

    // remove the last element;
    this.data.pop();
};

let queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

queue.dequeue();

console.log(queue);

/*
    Method 1: 
    IN --> [40, 30, 20, 10] --> OUT
    Enqueue = Array.unshift(data)
    Dequeue = Array.pop();
 
    Method 2: 
    OUT <-- [10, 20, 30, 40] <-- IN 
    Enqueue = Array.push(data)
    Dequeue = Array.shift();
*/

/**
 * [10, 20, 30, 40]
 * [20, 10, 30, 40]
 * [20, 30, 10, 40]
 * [20, 30, 40, 10]
 *
 * // remove my last element
 * [20, 30, 40]
 */