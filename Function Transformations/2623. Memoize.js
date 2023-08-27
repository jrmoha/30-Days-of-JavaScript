/**
 * @param {Function} fn
 */
function memoize(fn) {
  let called = {};
  return function (...args) {
    if (called.hasOwnProperty(args)) return called[args];
    let res = fn(...args);
    called[args] = res;
    return res;
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */