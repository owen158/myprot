//var jrg='http://192.168.0.7:8480/XPJ/';
Function.prototype.method = function (name,fn) {
    this.prototype[name] = fn;
    return this;
};
