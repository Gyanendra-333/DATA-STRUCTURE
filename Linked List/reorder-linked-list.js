// constructor of Node / creating Node
function ListNode(data) {
    this.data = data;
    this.pointer = null;
}

// constructor of LinkList
function LinkedList() {
    this.head = null;
    this.length = 0;
}

// functionality to insert node at the start
LinkedList.prototype.insertAtStart = function (data) {
    let node = new ListNode(data);
    node.pointer = this.head;

    this.head = node;
    this.length++;
};

LinkedList.prototype.reOrder = function () {
    let currentNode = this.head;
    let secondLastNode = null;
    let lastNode = this.head;
    let result = Object.assign({}, currentNode);
    let lastNodeOfResult = result;
    let count = 1;

    while (count < this.length) {
        // traverse till the last node
        while (lastNode.pointer !== null) {
            secondLastNode = lastNode;
            lastNode = lastNode.pointer;
        }

        // adding the last node
        lastNodeOfResult.pointer = lastNode;
        // move the last index of result to the current one
        lastNodeOfResult = lastNodeOfResult.pointer;

        count++;
        secondLastNode.pointer = null;

        // move the current node to the next node
        currentNode = currentNode.pointer;

        lastNodeOfResult.pointer = Object.assign({}, currentNode);
        lastNodeOfResult = lastNodeOfResult.pointer;
        count++;

        // rearranging the values
        lastNode = currentNode;
        secondLastNode = currentNode;
    }

    this.head = result;
};

const linkedList = new LinkedList();
linkedList.insertAtStart(10);
linkedList.insertAtStart(50);
linkedList.insertAtStart(100);
linkedList.insertAtStart(200);
linkedList.insertAtStart(300);

linkedList.reOrder();

console.log(linkedList);
