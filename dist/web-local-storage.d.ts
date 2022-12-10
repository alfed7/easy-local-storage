export declare class WebLocalStorage {
    storage?: Storage | null;
    constructor(useSessionStorage: boolean);
    get(fieldName: string): string;
    set(fieldName: string, value: string, _?: any): void;
    remove(fieldName: string): void;
    _haveLocalStorage(): Storage;
}
declare const _default: (useSessionStorage: boolean) => WebLocalStorage;
export default _default;
