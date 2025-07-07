class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  preOrder(node) {
    if (!node) return "";
    let order = node.value + "-->";
    order += this.preOrder(node.left);
    order += this.preOrder(node.right);
    return order;
  }

  postOrder(node) {
    if (!node) return "";
    let order = "";
    order += this.postOrder(node.left);
    order += this.postOrder(node.right);
    order += node.value + "-->";
    return order;
  }

  inOrder(node) {
    if (!node) return "";
    let order = "";
    order += this.inOrder(node.left);
    order += node.value + "-->";
    order += this.inOrder(node.right);
    return order;
  }
}

// Build the tree:
//         1
//       /   \
//      2     3
//     / \     \
//    4   5     6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Output the traversals
console.log("Pre-order:  ", root.preOrder(root)); // 1-->2-->4-->5-->3-->6-->
console.log("In-order:   ", root.inOrder(root)); // 4-->2-->5-->1-->3-->6-->
console.log("Post-order: ", root.postOrder(root)); // 4-->5-->2-->6-->3-->1-->
