//括号有效匹配

/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"

输出：true

示例 2：

输入：s = "()[]{}"

输出：true

示例 3：

输入：s = "(]"

输出：false

示例 4：

输入：s = "([])"

输出：true
*/

//https://leetcode.cn/problems/valid-parentheses?envType=study-plan-v2&envId=top-100-liked

function isValid(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (s[i] !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// var isValid = function(s) {
//     if (s.length % 2 !== 0) return false;
//     // 保存替换后的新字符串
//     let str = s;
//     // 当还能找到配对的括号时，继续替换
//     let prevLen;
//     do {
//         prevLen = str.length;
//         str = str.replaceAll('()','').replaceAll('{}','').replaceAll('[]','');
//     } while (str.length !== prevLen);

//     return str.length === 0;
// };
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
