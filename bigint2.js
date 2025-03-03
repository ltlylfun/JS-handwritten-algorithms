/*
给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的差并以字符串形式返回。
你不能使用任何内建的大数处理库。
要求：num1 和 num2 都是有效的数字字符串

示例 1：
输入：num1 = "123", num2 = "11"
输出："112"

示例 2：
输入：num1 = "1000", num2 = "1"
输出："999"

示例 3：
输入：num1 = "0", num2 = "0"
输出："0"
*/

function subtractStrings(num1, num2) {
  // 如果num1小于num2，交换位置并添加负号
  if (compareNumbers(num1, num2) < 0) {
    return "-" + subtractStrings(num2, num1);
  }

  let i = num1.length - 1;
  let j = num2.length - 1;
  let borrow = 0;
  let result = "";

  while (i >= 0 || j >= 0) {
    const x = i >= 0 ? parseInt(num1[i]) : 0;
    const y = j >= 0 ? parseInt(num2[j]) : 0;
    let diff = x - y - borrow;

    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    result = diff + result;
    i--;
    j--;
  }

  // 去除前导零
  result = result.replace(/^0+(?=\d)/, "");
  return result || "0";
}

// 比较两个数字字符串的大小
function compareNumbers(num1, num2) {
  if (num1.length !== num2.length) {
    return num1.length - num2.length;
  }
  return num1.localeCompare(num2);
}
// 测试用例console.log(subtractStrings("123", "11"));      // 输出: "112"
console.log(subtractStrings("1000", "1")); // 输出: "999"
console.log(subtractStrings("0", "0")); // 输出: "0"
console.log(subtractStrings("100", "200")); // 输出: "-100"
console.log(subtractStrings("999", "999")); // 输出: "0"
console.log(subtractStrings("1000", "999")); // 输出: "1"
console.log(subtractStrings("999", "1000")); // 输出: "-1"

// 大数测试用例
const largeNum1 = "1" + "0".repeat(1000); // 1后面1000个0
const largeNum2 = "1" + "0".repeat(999); // 1后面999个0
console.log("测试大数相减：");
const result = subtractStrings(largeNum1, largeNum2);
console.log("结果长度：" + result.length); // 应该是1000
console.log("结果是否正确：" + (result === "9" + "0".repeat(999))); // 应该输出true

// 另一个大数测试
const bigNum1 = "9".repeat(100); // 100个9
const bigNum2 = "1";
console.log("测试连续借位：");
console.log("数字1：" + bigNum1);
console.log("数字2：" + bigNum2);
console.log(subtractStrings(bigNum1, bigNum2)); // 应该输出99个9和一个8
