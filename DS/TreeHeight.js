class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  checkHeight(node) {
    if (!node) return -1;

    const leftHeight = this.checkHeight(node.left);
    const rightHeight = this.checkHeight(node.right);
    console.log(leftHeight, "===", rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.left.left = new TreeNode(5);

const height = tree.checkHeight(tree);
console.log(height);
