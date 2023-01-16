function _isBrowser() {
  return typeof localStorage !== "undefined";
}
export interface IWebStorage {
  get (fieldName: string): string;
  set (fieldName: string, value: string, options: any): void;
  remove (fieldName: string): void;
}

interface IDictionary<TValue> {
  [id: string]: TValue;
}
const varStorage: IDictionary<string> = {};
export class WebLocalStorage implements IWebStorage {
  storage?: Storage | null;
  constructor(useSessionStorage: boolean = false) {
    this.storage = _isBrowser()
      ? useSessionStorage
        ? sessionStorage
        : localStorage
      : null;
  }
  get (fieldName: string): string {
    let v = null;
    if (this._haveLocalStorage()) {
      v = this.storage?.getItem(fieldName);
    }
    if(!v)
      v = varStorage[fieldName];
    return v;
  };
  set (fieldName: string, value: string, _: any = null): void {
    if (this._haveLocalStorage()) {
      this.storage?.setItem(fieldName, value);
    }
    varStorage[fieldName] = value;
  };
  remove (fieldName: string): void {
    if (this._haveLocalStorage()) {
      this.storage?.removeItem(fieldName);
    }
    varStorage[fieldName] = null;
  };
  _haveLocalStorage (): boolean {
    return (typeof this.storage !== "undefined") && this.storage != null;
  };
}

export default (useSessionStorage: boolean = false) => {
  return new WebLocalStorage(useSessionStorage);
}
