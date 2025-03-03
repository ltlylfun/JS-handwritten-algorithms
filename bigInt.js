/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

 

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
示例 3：

输入：num1 = "0", num2 = "0"
输出："0"
*/

//https://leetcode.cn/problems/add-strings

function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0) {
    const x = i >= 0 ? parseInt(num1[i]) : 0;
    const y = j >= 0 ? parseInt(num2[j]) : 0;
    const sum = x + y + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}

// 测试用例
console.log(addStrings("11", "123")); // 输出: "134"
console.log(addStrings("456", "77")); // 输出: "533"
console.log(addStrings("0", "0")); // 输出: "0"
console.log(addStrings("999", "1")); // 输出: "1000"  测试进位
console.log(addStrings("9999", "9999")); // 输出: "19998" 测试多位进位
console.log(addStrings("1", "9999")); // 输出: "10000" 测试长度不等
console.log(addStrings("", "123")); // 输出: "123"   测试空字符串
console.log(addStrings("123", "")); // 输出: "123"   测试空字符串

// 大数测试用例
const largeNum1 = "9".repeat(1000); // 1000个9
const largeNum2 = "1";
console.log("测试两个大数相加：");
console.log("数字1：" + largeNum1);
console.log("数字2：" + largeNum2);
console.log("结果：" + addStrings(largeNum1, largeNum2)); // 应该输出1后面跟着1000个0

// 验证结果正确性
const result = addStrings(largeNum1, largeNum2);
console.log("结果长度：" + result.length); // 应该是1001
console.log("结果是否正确：" + (result === "1" + "0".repeat(1000))); // 应该输出true
