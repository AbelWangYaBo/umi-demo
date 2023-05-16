// import * as l from './local-storage'
// import * as s from './session-storage'
import type { Storage } from './typings'

class StorageManager {
  KEY: string;
  INSTANCE: Storage.StorageInstance;
  IS_FLUSH: boolean;
  constructor(key: string, config?: Storage.StorageConfig) {
    this.KEY = key;
    this.INSTANCE = localStorage;
    this.IS_FLUSH = false;
    this.setConfig(config);
  }

  get key() {
    return this.KEY;
  }

  get value() {
    return this.get() || '';
  }

  set value(value: string) {
    this.set(value);
  }

  get() {
    const val = this.INSTANCE.getItem(this.key);
    if (this.IS_FLUSH) {
      this.remove();
    }
    return val;
  }

  set(value: string) {
    // if (this.IS_FLUSH) {
    //   return this.INSTANCE.flushItem(this.key, value)
    // }
    return this.INSTANCE.setItem(this.key, value);
  }

  remove() {
    return this.INSTANCE.removeItem(this.key);
  }

  setConfig(config?: Storage.StorageConfig) {
    const defaultConfig: Storage.StorageConfig = {
      // type: 'localStorage',
      flush: false,
      ...config
    }
    if (defaultConfig.instance) {
      this.INSTANCE = defaultConfig.instance;
    }
    this.IS_FLUSH = !!defaultConfig.flush;
    if (defaultConfig.value !== undefined) {
      this.value = defaultConfig.value
    }
  }

  getStoreInstance() {
    return this.INSTANCE;
  }

  clearAll() {
    return this.INSTANCE.clear();
  }

}

//
// class StorageManager extends StorageMgr {
//   constructor(key: string, value?: string) {
//     super(key, value, {
//       instance: localStorage
//     });
//   }
// }

const userToken = new StorageManager('USER_TOKEN');
const userInfo = new StorageManager('USER_INFO');
const previousUrl = new StorageManager('PREVIOUS_URL');
const langType = new StorageManager('LANG');
export {
  userToken,
  userInfo,
  previousUrl,
  langType
};
