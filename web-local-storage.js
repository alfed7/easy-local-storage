function WebLocalStorage(useSessionStorage) {
    this.storage = useSessionStorage ? sessionStorage : localStorage;
    this.get = function (fieldName) {
        if(this._haveLocalStorage()) {
            return this.storage.getItem(fieldName);
        }
    }
    this.set = function (fieldName, value, options = null) {
        if(this._haveLocalStorage()) {
            this.storage.setItem(fieldName, value);
        }
    }
    this.remove = function (fieldName) {
        if(this._haveLocalStorage()) {
            this.storage.removeItem(fieldName);
        }
    }
    this._haveLocalStorage = function () {
        return typeof this.storage !== "undefined";
    }
}

module.exports = WebLocalStorage;