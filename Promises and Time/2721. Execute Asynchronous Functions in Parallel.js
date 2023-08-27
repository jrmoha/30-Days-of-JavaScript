/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
    let res = [];
    let cnt = 0;
    for (let i = 0; i < functions.length; i++) {
      functions[i]().then(result => {
        res[i] = result;
        cnt++;
        if (cnt === functions.length) resolve(res);
      }).catch(err => {
        reject(err);
      });
    }
  }); 
};
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */