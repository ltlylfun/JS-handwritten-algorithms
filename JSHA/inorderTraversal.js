//二叉树的中序遍历

/*
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

示例 1：

输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
*/

//https://leetcode.cn/problems/binary-tree-inorder-traversal?envType=study-plan-v2&envId=top-100-liked

function inorderTraversal(root) {
  let result = [];
  function inorder(node) {
    if (node === null) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return result;
}

//test
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root)); // [1,3,2]
