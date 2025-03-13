//最长回文子串

/*
给你一个字符串 s，找到 s 中最长的 回文 子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
*/

// https://leetcode.cn/problems/longest-palindromic-substring

function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0,
    maxLength = 1;

  // 从中心向两边扩展
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }

  // 遍历每个中心点
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 奇数长度
    expandAroundCenter(i, i + 1); // 偶数长度
  }

  return s.substring(start, start + maxLength);
}

// 测试用例
console.log(longestPalindrome("babad")); // 输出 "bab" 或 "aba"
console.log(longestPalindrome("cbbd")); // 输出 "bb"
console.log(longestPalindrome("a")); // 输出 "a"
console.log(longestPalindrome("ac")); // 输出 "a"
console.log(longestPalindrome("abba")); // 输出 "abba"
