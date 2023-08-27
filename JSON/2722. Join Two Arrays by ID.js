/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArr = [];
  let i = 0; let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id === arr2[j].id) {
      let mergedObj = {};
      for (let key in arr1[i]) {
        mergedObj[key] = arr1[i][key];
      }
      for (let key in arr2[j]) {
        mergedObj[key] = arr2[j][key];
      }
      joinedArr.push(mergedObj);
      i++; j++;
    } else if (arr1[i].id < arr2[j].id) {
      joinedArr.push(arr1[i]); i++;
    } else {
      joinedArr.push(arr2[j]); j++;
    }
  }
  while (i < arr1.length) { joinedArr.push(arr1[i]); i++; }
  while (j < arr2.length) { joinedArr.push(arr2[j]); j++; }

for (let i = 0; i < joinedArr.length - 1; i++) {
    if (joinedArr[i].id > joinedArr[i + 1].id) {
      joinedArr.sort((a, b) => a.id - b.id);
      break;
    }
  }

  return joinedArr;
};