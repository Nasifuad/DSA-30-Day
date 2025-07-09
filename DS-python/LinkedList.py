class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, val):
        newNode = Node(val)
        if self.head is None:
            self.head = newNode
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = newNode

    def printList(self):
        if self.head is None:
            print("The Linked List is Empty")
            return
        current = self.head
        while current:
            print(current.data, end=" --> ")
            current = current.next
        print("None")

    def delete(self, val):
        current = self.head
        if current and current.data == val:
            self.head = current.next
            return
        prev = None
        while current and current.data != val:
            prev = current
            current = current.next
        if current is None:
            return
        prev.next = current.next

    def search(self, val):
        if self.head is None:
            return "The List is empty"
        current = self.head
        while current:
            if current.data == val:
                return "Found"
            current = current.next
        return "Not found"

# Test
llist = LinkedList()
llist.append(10)
llist.append(20)
llist.append(30)

llist.printList()
llist.delete(20)
llist.printList()

print(llist.search(10))
print(llist.search(40))
