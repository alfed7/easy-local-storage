"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLocalStorage = void 0;
function _isBrowser() {
    return typeof this.storage !== "undefined";
}
var WebLocalStorage = /** @class */ (function () {
    function WebLocalStorage(useSessionStorage) {
        this.storage = _isBrowser()
            ? useSessionStorage
                ? sessionStorage
                : localStorage
            : null;
    }
    WebLocalStorage.prototype.get = function (fieldName) {
        var _a;
        if (this._haveLocalStorage()) {
            return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(fieldName);
        }
    };
    ;
    WebLocalStorage.prototype.set = function (fieldName, value, _) {
        var _a;
        if (_ === void 0) { _ = null; }
        if (this._haveLocalStorage()) {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(fieldName, value);
        }
    };
    ;
    WebLocalStorage.prototype.remove = function (fieldName) {
        var _a;
        if (this._haveLocalStorage()) {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(fieldName);
        }
    };
    ;
    WebLocalStorage.prototype._haveLocalStorage = function () {
        return typeof this.storage !== "undefined" && this.storage;
    };
    ;
    return WebLocalStorage;
}());
exports.WebLocalStorage = WebLocalStorage;
exports.default = (function (useSessionStorage) { return new WebLocalStorage(useSessionStorage); });
//# sourceMappingURL=web-local-storage.js.map