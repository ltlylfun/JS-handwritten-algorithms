/*
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
*/

//https://leetcode.cn/problems/reverse-linked-list?envType=study-plan-v2&envId=top-100-liked

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// 辅助函数：将数组转换为链表
function arrayToList(arr) {
  if (!arr || arr.length === 0) return null;

  const dummy = new ListNode(0);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

// 辅助函数：将链表转换为数组（用于展示结果）
function listToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// 测试用例
console.log("测试用例 1:");
const list1 = arrayToList([1, 2, 3, 4, 5]);
const reversed1 = reverseList(list1);
console.log(listToArray(reversed1)); // 输出: [5, 4, 3, 2, 1]

console.log("测试用例 2:");
const list2 = arrayToList([1, 2]);
const reversed2 = reverseList(list2);
console.log(listToArray(reversed2)); // 输出: [2, 1]

console.log("测试用例 3:");
const list3 = arrayToList([]);
const reversed3 = reverseList(list3);
console.log(listToArray(reversed3)); // 输出: []

console.log("测试用例 4:");
const list4 = arrayToList([1]);
const reversed4 = reverseList(list4);
console.log(listToArray(reversed4)); // 输出: [1]
