/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

function arr_sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) sum += arr[i];
    else sum += arr_sum(arr[i]);
  }
  return sum;
}
ArrayWrapper.prototype.valueOf = function () {
  return arr_sum(this.nums);
}

ArrayWrapper.prototype.toString = function() {
  return "[" + this.nums.toString() + "]";
    
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */