function _isBrowser() {
  return typeof this.storage !== "undefined";
}
export class WebLocalStorage {
  storage?: Storage | null;
  constructor(useSessionStorage: boolean) {
    this.storage = _isBrowser()
      ? useSessionStorage
        ? sessionStorage
        : localStorage
      : null;
  }
  get (fieldName: string) {
    if (this._haveLocalStorage()) {
      return this.storage?.getItem(fieldName);
    }
  };
  set (fieldName: string, value: string, _: any = null) {
    if (this._haveLocalStorage()) {
      this.storage?.setItem(fieldName, value);
    }
  };
  remove (fieldName: string) {
    if (this._haveLocalStorage()) {
      this.storage?.removeItem(fieldName);
    }
  };
  _haveLocalStorage () {
    return typeof this.storage !== "undefined" && this.storage;
  };
}

export default (useSessionStorage: boolean) => new WebLocalStorage(useSessionStorage);
