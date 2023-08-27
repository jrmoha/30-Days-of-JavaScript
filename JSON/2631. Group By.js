/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
     let obj = {};
  this.forEach(item => {
    if (obj.hasOwnProperty(fn(item))) {
      obj[fn(item)].push(item)
    } else {
      obj[fn(item)] = [item];
    }
  });
  return obj;  
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */