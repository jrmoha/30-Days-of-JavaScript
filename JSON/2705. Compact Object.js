/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    let res = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i]) {
        if (typeof obj[i] === 'object') res.push(compactObject(obj[i]));
        else res.push(obj[i]);
      }
    }
   return res;
  } else {
    let res = {};
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        res[key] = compactObject(obj[key]);
      }
      else if (obj[key]) {
        if (typeof obj[key] === 'object') res[key] = compactObject(obj[key]);
        else res[key] = obj[key];
      }
    }
    return res;
  }
};