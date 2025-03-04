//实现一个简单的洗牌算法

function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * len);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// test
let arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr));
