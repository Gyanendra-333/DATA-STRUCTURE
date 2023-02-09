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

LinkedList.prototype.isCyclic = function () {
    let currentNode = this.head;
    let map = new Map();

    while (currentNode.pointer !== null) {
        if (map.has(currentNode.data)) {
            return true;
        }
        map.set(currentNode.data, 1);

        currentNode = currentNode.pointer;
    }
    return false;
};

LinkedList.prototype.startOfCycle = function () {
    let currentNode = this.head;
    let map = new Map();

    while (currentNode.pointer !== null) {
        if (map.has(currentNode.data)) {
            return currentNode.data;
        }
        map.set(currentNode.data, 1);

        currentNode = currentNode.pointer;
    }
    return false;
};

const linkedList = new LinkedList();
linkedList.insertAtStart(10);
linkedList.insertAtStart(50);
linkedList.insertAtStart(100);
linkedList.insertAtStart(200);
linkedList.insertAtStart(300);
linkedList.insertAtStart(100);

//linkedList.isCyclic();

console.log(linkedList.isCyclic());
console.log(linkedList.startOfCycle());
