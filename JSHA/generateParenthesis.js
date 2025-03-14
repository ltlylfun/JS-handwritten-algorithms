//生成有效括号组合

/*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
*/

//https://leetcode.cn/problems/generate-parentheses?envType=study-plan-v2&envId=top-100-liked

function generateParenthesis(n) {
  let res = [];
  function dfs(l, r, str) {
    if (l === n && r === n) {
      res.push(str);
      return;
    }
    if (l < n) {
      dfs(l + 1, r, str + "(");
    }
    if (r < l) {
      dfs(l, r + 1, str + ")");
    }
  }
  dfs(0, 0, "");
  return res;
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
