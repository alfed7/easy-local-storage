"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLocalStorage = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
function _isBrowser() {
    return typeof localStorage !== "undefined";
}
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
        return (typeof this.storage !== "undefined") && this.storage != null;
    };
    ;
    return WebLocalStorage;
}());
exports.WebLocalStorage = WebLocalStorage;
function getStorage(useCookies, useSessionStorage) {
    if (useCookies === void 0) { useCookies = false; }
    if (useSessionStorage === void 0) { useSessionStorage = false; }
    return useCookies ? js_cookie_1.default : new WebLocalStorage(useSessionStorage);
}
exports.default = getStorage;
//# sourceMappingURL=web-local-storage.js.map