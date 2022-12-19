import Cookies from 'js-cookie';
export interface IWebStorage {
    get(fieldName: string): string;
    set(fieldName: string, value: string, options: any): void;
    remove(fieldName: string): void;
}
export declare class WebLocalStorage implements IWebStorage {
    storage?: Storage | null;
    constructor(useSessionStorage?: boolean);
    get(fieldName: string): string;
    set(fieldName: string, value: string, _?: any): void;
    remove(fieldName: string): void;
    _haveLocalStorage(): boolean;
}
export default function getStorage(useCookies?: boolean, useSessionStorage?: boolean): (Cookies.CookiesStatic<string> & {
    noConflict?(): Cookies.CookiesStatic<string>;
}) | WebLocalStorage;
