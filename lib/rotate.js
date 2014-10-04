// Generated by CoffeeScript 1.8.0
(function() {
  var arity, rotate;

  arity = require("./arity");

  module.exports = rotate = function(fn, count, dir) {
    var func;
    if (dir == null) {
      dir = 1;
    }
    if (!(dir === 1 || dir === -1)) {
      throw new RangeError("direction parameter must be 1 or -1");
    }
    func = function() {
      var arg, args, chunk, i, _i, _len;
      args = new Array(arguments.length);
      for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
        arg = arguments[i];
        args[i] = arg;
      }
      chunk = args.splice((dir === 1 ? 0 : dir * count), count);
      return fn.apply(this, dir === 1 ? args.concat(chunk) : chunk.concat(args));
    };
    return arity(func, fn.length);
  };

}).call(this);