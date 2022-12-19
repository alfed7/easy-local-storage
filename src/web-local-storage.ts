import Cookies from 'js-cookie'

function _isBrowser() {
  return typeof localStorage !== "undefined";
}
export interface IWebStorage {
  get (fieldName: string): string;
  set (fieldName: string, value: string, options: any): void;
  remove (fieldName: string): void;
}
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
    if (this._haveLocalStorage()) {
      return this.storage?.getItem(fieldName);
    }
  };
  set (fieldName: string, value: string, _: any = null): void {
    if (this._haveLocalStorage()) {
      this.storage?.setItem(fieldName, value);
    }
  };
  remove (fieldName: string): void {
    if (this._haveLocalStorage()) {
      this.storage?.removeItem(fieldName);
    }
  };
  _haveLocalStorage (): boolean {
    return (typeof this.storage !== "undefined") && this.storage != null;
  };
}

export default function getStorage(useCookies: boolean = false, useSessionStorage: boolean = false) {
  return useCookies ? Cookies : new WebLocalStorage(useSessionStorage);
}
