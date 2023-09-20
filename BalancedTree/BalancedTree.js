class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBalanced(root) {
    // Subtree Calculation
    function getHeight(node) { 
      if (node === null) {
        return 0;
      }
      const leftHeight = getHeight(node.left);
      if (leftHeight === -1) {
        return -1; // Left subtree is unbalanced, -1 up the tree
      }
      const rightHeight = getHeight(node.right);
      if (rightHeight === -1) {
        return -1; // Right subtree is unbalanced, -1 up the tree
      }
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // Subtree is unbalanced, -1 up the tree
      }
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    // Start checking balance from the root
    return getHeight(root) !== -1;
  }
  
  // Example usage:
  
  // Balanced binary tree:
  //        1
  //       / \
  //      2   3
  //     / \
  //    4   5
  const balancedTree = new TreeNode(1);
  balancedTree.left = new TreeNode(2);
  balancedTree.right = new TreeNode(3);
  balancedTree.left.left = new TreeNode(4);
  balancedTree.left.right = new TreeNode(5);
  
  console.log(isBalanced(balancedTree)); // true
  
  // Unbalanced binary tree:
  //        1
  //       /
  //      2
  //     /
  //    3
  const unbalancedTree = new TreeNode(1);
  unbalancedTree.left = new TreeNode(2);
  unbalancedTree.left.left = new TreeNode(3);
  
  console.log(isBalanced(unbalancedTree)); // false
  