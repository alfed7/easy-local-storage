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
declare const _default: (useSessionStorage?: boolean) => WebLocalStorage;
export default _default;
