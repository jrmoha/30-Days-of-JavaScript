
var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let bool = this.cache.has(key) ? true : false;
    if (bool) clearTimeout(this.cache.get(key).time_out);
    this.cache.set(key, {
        "value": value, "time_out": setTimeout(() => {
            this.cache.delete(key);
        }, duration)
    });
    return bool;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};
