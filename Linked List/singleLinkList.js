
//Linked List efficient way to storage of data in Data structure.

function ListNode(data) {
    this.data = data;
    this.pointer = null;
}
// let node = new ListNode(100);
// console.log(node);

// constructor of linked list

function LinkedList() {
    this.head = null;
    this.length = 0;
}
// functionality to start node at the start

LinkedList.prototype.insertAtStart = function (data) {
    let node = new ListNode(data);
    node.pointer = this.head;
    this.head = node;
    this.length++;
};

LinkedList.prototype.insertAtLast = function (data) {
    let node = new ListNode(data);
    let lastNode = this.head;

    while (lastNode.pointer != null) {
        lastNode = lastNode.pointer;
    }
    lastNode.pointer = node;
    this.length++;
}
// To insert a perticular element
LinkedList.prototype.insertAt = function (data, loc) {
    let node = new ListNode(data);
    let currentNode = this.head;
    let previousNode = null;
    let index = this.length;

    while (loc !== index) {
        previousNode = currentNode;
        currentNode = currentNode.pointer;
        index--;
    }
    node.pointer = currentNode;
    previousNode.pointer = node;
    this.length++;
};
// To delete element

LinkedList.prototype.delete = function (data) {
    let currentNode = this.head;
    let previousNode = null;

    while (data !== currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.pointer;

    }
    previousNode.pointer = currentNode.pointer;
    this.length--;

}

const linkedList = new LinkedList();
linkedList.insertAtStart(100);
linkedList.insertAtStart(200);

linkedList.insertAtLast(300);
linkedList.insertAtLast(400);

linkedList.insertAt(150, 3);

linkedList.delete(200);

console.log(linkedList);