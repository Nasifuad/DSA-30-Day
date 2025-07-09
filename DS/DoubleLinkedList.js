class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
    newNode.prev = last;
  }
  prepend(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = new Node(val);
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  printForward() {
    let current = this.head;
    if (!current) return "EMPTY";
    let output = "";
    while (current) {
      //   console.log(current.data + "-->");
      output += current.data + "-->";
      current = current.next;
    }
    console.log(output);
  }
  printBackword() {
    let current = this.head;
    if (current == null) return;

    while (current.next) {
      current = current.next;
    }
    let output = "";
    while (current) {
      //   console.log(current.data + "-->");
      output += current.data + "-->";
      current = current.prev;
    }
    console.log("Output in BackWord");

    console.log(output);
  }

  deleteItem(val) {z
    let current = this.head;
    if (current.data == val) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      return;
    }

      while (current && current.data !== val) {
      current = current.next;
    }

    if (!current) return;
    if (current.prev) current.prev.next = current.next;
    if (current.next) current.next.prev = current.prev;
  }
}
const ll = new DoubleLinkedList();

ll.append(10);
ll.append(20);
ll.append(30);
ll.printForward();
ll.printBackword();
ll.prepend(9);
ll.prepend(8);
ll.printForward();
