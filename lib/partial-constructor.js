// Generated by CoffeeScript 1.8.0
(function() {
  var arity, partialConstructor;

  arity = require("./arity");

  module.exports = partialConstructor = function(Ctor) {
    var arg, func, i, len, outer, _i, _len;
    len = arguments.length - 1;
    outer = new Array(len);
    for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
      arg = arguments[i];
      if (i > 0) {
        outer[i - 1] = arg;
      }
    }
    func = function() {
      var args, obj, outerArg, outerLen, result, _j, _k, _len1, _len2;
      outerLen = outer.length;
      len = arguments.length + outer.length;
      args = new Array(len);
      for (i = _j = 0, _len1 = outer.length; _j < _len1; i = ++_j) {
        outerArg = outer[i];
        args[i] = outerArg;
      }
      for (i = _k = 0, _len2 = arguments.length; _k < _len2; i = ++_k) {
        arg = arguments[i];
        args[outerLen + i] = arg;
      }
      obj = Object.create(Ctor.prototype);
      result = Ctor.apply(obj, args);
      if (result && typeof result === "object" || typeof result === "function") {
        return result;
      } else {
        return obj;
      }
    };
    return arity(func, Ctor.length - outer.length);
  };

}).call(this);