/*
给你一个 字符串只 表达式s，请你实现一个基本 计算器9 来计算并返回它的值。
注意:不允许使用任何将字符串作为数学 表达式计算只的内置 函数只
示例 1:
输入:s=“1+1"
输出:2
示例 2:
输入:s="2-1+2
输出:3
*/

function calculate(s) {
  const stack = [];
  let num = 0;
  let sign = 1; // 1表示正数，-1表示负数
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + (char - "0");
    } else if (char === "+" || char === "-") {
      result += sign * num;
      num = 0;
      sign = char === "+" ? 1 : -1;
    }
  }

  return result + sign * num; // 处理最后一个数字
}

// 测试用例
console.log(calculate("1+1")); // 输出: 2
console.log(calculate("2-1+2")); // 输出: 3
console.log(calculate("3-2-1")); // 输出: 0
console.log(calculate("1+2+3")); // 输出: 6
console.log(calculate("1-1+1")); // 输出: 1
