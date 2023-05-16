// 一次性数据
const FLUSH_STORAGE: AnyObject = {};

/**
 * get data from storage
 * @param {string} key
 * @returns {string}
 */
function getStorage(key: string) {
  const val = sessionStorage.getItem(key);
  if (FLUSH_STORAGE[key]) {
    removeStorage(key);
  }
  return val;
}

/**
 * store data
 * @param {string} key
 * @param {string} value
 */
function setStorage(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}

/**
 * remove storage item
 * @param {string} key
 */
function removeStorage(key: string) {
  return sessionStorage.removeItem(key);
}

/**
 * clear storage
 */
function clearStorage() {
  return sessionStorage.clear();
}

/**
 * flush storage
 * disposable data
 */
function flushStorage(key: string, value: string) {
  FLUSH_STORAGE[key] = true;
  return sessionStorage.setItem(key, value);
}


// Token
export {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
  flushStorage,
};
