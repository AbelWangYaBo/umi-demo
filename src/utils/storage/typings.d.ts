
export namespace Storage {

  type StoreType = 'localStorage' | 'sessionStorage'

  type StorageConfig = {
    instance?: StorageInstance;
    type?: StoreType;
    flush?: boolean;
    value?: string;
  }

  type StorageInstance = {
    getItem: Function;
    setItem: Function;
    removeItem: Function;
    clear: Function;
  }
  // type StorageInstance = {
  //   getStorage: Function;
  //   setStorage: Function;
  //   removeStorage: Function;
  //   clearStorage: Function;
  //   flushStorage: Function;
  // }
}
