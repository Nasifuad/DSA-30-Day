// Define the ListNode class
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to merge two sorted linked lists
function mergeSortedLists(l1, l2) {
  const dummy = new ListNode(0); // dummy node to simplify handling head
  let current = dummy;

  // Loop through both lists while they have nodes
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1; // point to l1 node
      l1 = l1.next; // move l1 forward
    } else {
      current.next = l2; // point to l2 node
      l2 = l2.next; // move l2 forward
    }
    current = current.next; // move current forward
  }

  // Attach any remaining nodes
  current.next = l1 || l2;

  // Return the merged list starting from the next of dummy
  return dummy.next;
}

// Create List 1: 1 -> 3 -> 5
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));

// Create List 2: 2 -> 4 -> 6
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
console.log(list1, list2);

// Merge the lists
const merged = mergeSortedLists(list1, list2);

// Function to print the linked list
function printList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// Print the merged list
printList(merged);
