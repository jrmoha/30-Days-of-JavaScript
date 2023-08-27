/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    let tmp = [];
    let cnt = 0;
    while (cnt < size && i < arr.length) {
      tmp.push(arr[i]);
      cnt++;
      i++;
    }
    res.push(tmp);
  }
  return res;
};