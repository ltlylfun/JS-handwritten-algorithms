//给你一棵二叉树的根节点，返回该树的直径 。

/*
给你一棵二叉树的根节点，返回该树的直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。

示例 1：

输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
示例 2：

输入：root = [1,2]
输出：1
*/

function diameterOfBinaryTree(root) {
  let result = 0;
  function dfs(node) {
    if (node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    result = Math.max(result, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return result;
}

//test

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(diameterOfBinaryTree(root)); // 3
