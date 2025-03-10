//给一个随机数组，用冒泡排序的方法进行排序

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// test
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(bubbleSort(arr)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
