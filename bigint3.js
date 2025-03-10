//大数相乘

/*
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

 

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
*/

//https://leetcode.cn/problems/multiply-strings

function multiplyStrings(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  const m = num1.length;
  const n = num2.length;
  const result = Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    const x = parseInt(num1[i]);

    for (let j = n - 1; j >= 0; j--) {
      const y = parseInt(num2[j]);
      const sum = result[i + j + 1] + x * y;

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // 去除前导零
  while (result[0] === 0) {
    result.shift();
  }

  return result.join("");
}

// 测试用例 - 小数乘法
console.log(multiplyStrings("2", "3")); // 输出: "6"
console.log(multiplyStrings("123", "456")); // 输出: "56088"
console.log(multiplyStrings("0", "1234")); // 输出: "0"
console.log(multiplyStrings("999", "999")); // 输出: "998001"

// 测试用例 - 大数乘法
// 使用较小的大数以便完整显示
console.log("\n===== 大数乘法测试 =====");

// 测试1：两个10位数相乘
const num1 = "9876543210";
const num2 = "1234567890";
console.log("数字1：" + num1);
console.log("数字2：" + num2);
console.log("结果： " + multiplyStrings(num1, num2)); // 应输出: "12193263111263526900"

// 测试2：两个相同的数相乘
const num3 = "12345";
const num4 = "12345";
console.log("\n数字1：" + num3);
console.log("数字2：" + num4);
console.log("结果： " + multiplyStrings(num3, num4)); // 应输出: "152399025" (12345^2)

// 测试3：大数与小数相乘
const num5 = "9".repeat(10); // 10个9
const num6 = "9";
console.log("\n数字1：" + num5);
console.log("数字2：" + num6);
console.log("结果： " + multiplyStrings(num5, num6)); // 应输出: "8999999999" (9 * 10^9)

// 测试4：较大的两个数相乘
const num7 = "1" + "0".repeat(10); // 10^10
const num8 = "1" + "0".repeat(10); // 10^10
console.log("\n数字1：" + num7);
console.log("数字2：" + num8);
console.log("结果： " + multiplyStrings(num7, num8)); // 应输出: "1" + "0".repeat(20) (10^20)
