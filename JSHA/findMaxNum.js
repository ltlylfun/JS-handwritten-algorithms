/*
给定一个数字和字母组成的字符串，找出其中最大的数字。

输入：asdfghhjjk2345fhf676bbnxcx56554hf
*/

function findMaxNum(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      let j = i;
      while (!isNaN(str[j])) {
        j++;
      }
      max = Math.max(max, str.slice(i, j));
      i = j;
    }
  }
  return max;
}

// 方法二：使用正则表达式
function findMaxNumRegex(str) {
  const numbers = str.match(/\d+/g);
  return Math.max(...numbers.map(Number));
}

// 测试用例
console.log("方法一结果:", findMaxNum("asdfghhjjk2345fhf676bbnxcx56554hf")); // 56554
console.log(
  "方法二结果:",
  findMaxNumRegex("asdfghhjjk2345fhf676bbnxcx56554hf")
); // 56554
