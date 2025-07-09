class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const l = new LinkedList();
l.append(2);
l.append(4);
l.append(3);
l.print();
console.log("---------------");

const j = new LinkedList();
j.append(5);
j.append(6);
j.append(4);
j.print();
const join = "";
