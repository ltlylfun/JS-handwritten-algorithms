//判断字符串能否交字符变成回文串（面过）

/*
给定一个字符串，判断此字符串能否通过交换某些字符使之变成一个回文串
样例
样例 1：
输入：s = “abc"
输出：
false
样例 2：
输入：s = “aab"
输出：
true
*/

//https://leetcode-cn.com/problems/palindrome-permutation

function canPermutePalindrome(s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let oddCount = 0;
  for (const count of map.values()) {
    if (count % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}

// 测试用例
console.log(canPermutePalindrome("abc")); // 输出：false
console.log(canPermutePalindrome("aab")); // 输出：true
console.log(canPermutePalindrome("carerac")); // 输出：true
