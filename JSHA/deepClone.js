//手撕深拷贝

// 1. 递归实现
function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  let newObj = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

// test
let obj = {
  a: 1,
  b: {
    c: 2,
  },
};
let obj2 = deepClone(obj);
obj2.b.c = 3;
console.log(obj.b.c); // 2
console.log(obj2.b.c); // 3

// // 2. JSON.parse(JSON.stringify(obj))实现
// function deepClone(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
