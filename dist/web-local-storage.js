"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLocalStorage = void 0;
function _isBrowser() {
    return typeof localStorage !== "undefined";
}
var varStorage = {};
var WebLocalStorage = /** @class */ (function () {
    function WebLocalStorage(useSessionStorage) {
        if (useSessionStorage === void 0) { useSessionStorage = false; }
        this.storage = _isBrowser()
            ? useSessionStorage
                ? sessionStorage
                : localStorage
            : null;
    }
    WebLocalStorage.prototype.get = function (fieldName) {
        var _a;
        var v = null;
        if (this._haveLocalStorage()) {
            v = (_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(fieldName);
        }
        if (!v)
            v = varStorage[fieldName];
        return v;
    };
    ;
    WebLocalStorage.prototype.set = function (fieldName, value, _) {
        var _a;
        if (_ === void 0) { _ = null; }
        if (this._haveLocalStorage()) {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(fieldName, value);
        }
        varStorage[fieldName] = value;
    };
    ;
    WebLocalStorage.prototype.remove = function (fieldName) {
        var _a;
        if (this._haveLocalStorage()) {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(fieldName);
        }
        varStorage[fieldName] = null;
    };
    ;
    WebLocalStorage.prototype._haveLocalStorage = function () {
        return (typeof this.storage !== "undefined") && this.storage != null;
    };
    ;
    return WebLocalStorage;
}());
exports.WebLocalStorage = WebLocalStorage;
exports.default = (function (useSessionStorage) {
    if (useSessionStorage === void 0) { useSessionStorage = false; }
    return new WebLocalStorage(useSessionStorage);
});
//# sourceMappingURL=web-local-storage.js.map