let stack = [];
// push(1), [1]
// push(2), [1, 2]
// pop(), [1]

let queue = [];
// push(1), [1]
// push(2), [1, 2]
// pop(), [2]

// Consider creating a stack with a queue

let q_stack = [];
let helping_queue = [];

// for stack push
q_stack.push(1);

// for stack pop
// q_s = [1, 2, 3, 4], pop()
// q_s = []
// t_q = [1, 2, 3]

// q_s = [1, 2, 3]
// t_q = []

function Item(data) {
    this.data = data;
}
function Stack() {
    this.data = [];
    this.length = 0;
}
Stack.prototype.push = function (data) {
    let item = new Item(data);
    this.data.push(item);
};

Stack.prototype.pop = function () {
    let tempQueue = [];

    while (this.data.length !== 1) {
        tempQueue.push(this.data.shift());
    }
    this.data.shift();
    while (tempQueue.length !== 0) {
        this.data.push(tempQueue.shift());
    }
};

let qStack = new Stack();

qStack.push(10);
qStack.push(20);
qStack.push(30);
qStack.push(40);

qStack.pop();

console.log(qStack);
