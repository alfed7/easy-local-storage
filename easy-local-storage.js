function EasyLocalStorage() {
    this.get = function (fieldName) {
        if(this._haveLocalStorage()) {
            return localStorage.getItem(fieldName);
        }
    }
    this.set = function (fieldName, value, options = null) {
        if(this._haveLocalStorage()) {
            localStorage.setItem(fieldName, value);
        }
    }
    this.remove = function (fieldName) {
        if(this._haveLocalStorage()) {
            localStorage.removeItem(fieldName);
        }
    }
    this._haveLocalStorage = function () {
        return typeof localStorage !== "undefined";
    }
}

module.exports = EasyLocalStorage;