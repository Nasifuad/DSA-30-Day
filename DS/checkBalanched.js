class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  checkBalanced(root) {
    if (!root) return 0;

    const leftHeight = this.checkBalanced(root.left);
    if (leftHeight === -Infinity) return -Infinity;

    const rightHeight = this.checkBalanced(root.right);
    if (rightHeight === -Infinity) return -Infinity;

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -Infinity; // not balanced
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced() {
    return this.checkBalanced(this) !== -Infinity;
  }
}

// 🧪 Example:
const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

console.log(root.isBalanced()); // true ✅
