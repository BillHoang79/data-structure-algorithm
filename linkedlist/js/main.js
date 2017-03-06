//Here is the definition for the constructor function:
function LList() {
    this.head = new Node("head")
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
}

//Here is the code for the find() function:
function find(item) {
    var currNode = this.head
    while (currNode.element != item) {
        currNode = currNode.next
    }
    return currNode
}

//insert() function:
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

//The LList class and a test program

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
An Object - Based Linked List Design | 77

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}
// main program
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()
