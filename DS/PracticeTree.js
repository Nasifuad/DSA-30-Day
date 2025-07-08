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
    let order = node.value + "-->";

    order += this.postOrder(node.right);
    order += this.postOrder(node.left);
    return order;
  }
  inOrder(node) {
    if (!node) return "";
    let order = "";
    order += this.inOrder(node.left) + "-->";
    order += node.value;
    order += this.inOrder(node.right);
    return order;
  }
}
/*
             1
            / \
           2   3
*/
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left = new TreeNode(4);

console.log(root.postOrder(root));
console.log(root.preOrder(root));
console.log(root.inOrder(root));
