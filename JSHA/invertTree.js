/*
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
示例 2：

输入：root = [2,1,3]
输出：[2,3,1]
示例 3：

输入：root = []
输出：[]
*/

//https://leetcode.cn/problems/invert-binary-tree?envType=study-plan-v2&envId=top-100-liked

function invertTree(root) {
  if (root === null) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

//test
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
console.log(invertTree(root));
// TreeNode {
//   val: 4,
//   left: TreeNode {
//     val: 7,
//     left: TreeNode { val: 9, left: null, right: null },
//     right: TreeNode { val: 6, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 1, left: null, right: null }
//   }
// }
