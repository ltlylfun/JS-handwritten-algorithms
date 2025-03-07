//给一个随机数组，用快速排序的方法进行排序

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   var left = [];
//   var right = [];
//   var mid = Math.floor(arr.length / 2);
//   var midValue = arr.splice(mid, 1)[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < midValue) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([midValue], quickSort(right));
// }
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var mid = partition(arr, left, right);
    quickSort(arr, left, mid - 1);
    quickSort(arr, mid + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

// test
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quickSort(arr)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
