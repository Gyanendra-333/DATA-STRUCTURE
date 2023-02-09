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

// LinkedList.prototype.reverse = function () {
//     let currentNode = this.head;
//     let index = this.length;
//     let reverseNode = null;

//     while (index !== 0) {
//         let node = new ListNode(currentNode.data);
//         node.pointer = reverseNode;
//         reverseNode = node;
//         currentNode = currentNode.pointer;
//         index--;
//     }

//     this.head = reverseNode;
// };

LinkedList.prototype.reverse = function () {
    let currentNode = this.head;
    let previousNode = null;
    let index = this.length;

    while (index !== 1) {
        previousNode = currentNode;
        currentNode = currentNode.pointer;

        //swapping of the data values
        let temp = previousNode.data;
        previousNode.data = currentNode.data;
        currentNode.data = temp;

        index--;
    }

    this.head = reverseNode;
};

const linkedList = new LinkedList();
linkedList.insertAtStart(10);
linkedList.insertAtStart(50);
linkedList.insertAtStart(100);
linkedList.insertAtStart(200);
linkedList.insertAtStart(300);

linkedList.reverse();

console.log(linkedList);
