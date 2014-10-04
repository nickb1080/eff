// Generated by CoffeeScript 1.7.1
(function() {
  var arity, curry, demethodize, firstToLast, flip, lastToFirst, merge, min0, nAry, partial, partialConstructor, partialRight, reverse, swap, unary,
    __hasProp = {}.hasOwnProperty;

  merge = function(target) {
    var i, key, source, _i, _len;
    for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
      source = arguments[i];
      if (i > 0) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          target[key] = source[key];
        }
      }
    }
    return target;
  };

  min0 = function(num) {
    if (num < 0) {
      return 0;
    } else {
      return num;
    }
  };

  curry = function(fn) {
    var arg, curried, i, len, outer, _i, _len;
    len = arguments.length;
    outer = new Array(len);
    for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
      arg = arguments[i];
      if (i > 0) {
        outer[i] = arg;
      }
    }
    curried = function() {
      var args, outerArg, outerLen, _j, _k, _len1, _len2;
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
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return curry.apply(null, [fn].concat(args));
      }
    };
    return arity(curried, min0(fn.length - len));
  };

  partial = function(fn) {
    var arg, func, i, len, outer, _i, _len;
    len = arguments.length;
    outer = new Array(len);
    for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
      arg = arguments[i];
      if (i > 0) {
        outer[i] = arg;
      }
    }
    func = function() {
      var args, outerArg, outerLen, _j, _k, _len1, _len2;
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
      return fn.apply(this, args);
    };
    return arity(func, min0(fn.length - outer.length));
  };

  partialRight = function(fn) {
    var arg, func, i, len, outer, _i, _len;
    len = arguments.length;
    outer = new Array(len);
    for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
      arg = arguments[i];
      if (i > 0) {
        outer[i] = arg;
      }
    }
    func = function() {
      var args, innerLen, outerArg, _j, _k, _len1, _len2, _results;
      innerLen = arguments.length;
      len = arguments.length + outer.length;
      args = new Array(len);
      for (i = _j = 0, _len1 = arguments.length; _j < _len1; i = ++_j) {
        arg = arguments[i];
        args[i] = arg;
      }
      _results = [];
      for (i = _k = 0, _len2 = arguments.length; _k < _len2; i = ++_k) {
        outerArg = arguments[i];
        _results.push(args[innerLen + i] = outerArg);
      }
      return _results;
    };
    return arity(func, min0(fn.length - outer.length));
  };

  partialConstructor = function(Ctor) {
    var arg, func, outer, _i, _len;
    outer = [];
    for (_i = 0, _len = arguments.length; _i < _len; _i++) {
      arg = arguments[_i];
      if (i > 0) {
        outer.push(arg);
      }
    }
    func = function() {
      var args, obj, result, _j, _len1;
      args = outer.slice();
      for (_j = 0, _len1 = arguments.length; _j < _len1; _j++) {
        arg = arguments[_j];
        args.push(arg);
      }
      obj = Object.create(Ctor.prototype);
      result = fn.apply(obj, args);
      if (result && typeof result === "object") {
        return result;
      } else {
        return obj;
      }
    };
    return arity(func, min0(fn.length - outer.length));
  };

  flip = function(fn) {
    return swap(fn, 0, 1);
  };

  reverse = function(fn) {
    var func;
    func = function() {
      var arg, args, i, len, _i;
      len = arguments.length;
      args = new Array(len);
      for (i = _i = arguments.length - 1; _i >= 0; i = _i += -1) {
        arg = arguments[i];
        args[i] = arg;
      }
      return fn.apply(this, args.reverse());
    };
    return arity(func, fn.length);
  };

  firstToLast = function(fn) {
    var func;
    func = function() {
      var arg, args;
      args = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          arg = arguments[_i];
          _results.push(arg);
        }
        return _results;
      }).apply(this, arguments);
      args.push(args.shift());
      return fn.apply(this, args);
    };
    return arity(func, fn.length);
  };

  lastToFirst = function(fn) {
    var func;
    func = function() {
      var arg, args;
      args = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          arg = arguments[_i];
          _results.push(arg);
        }
        return _results;
      }).apply(this, arguments);
      args.unshift(args.pop());
      return fn.apply(this, args);
    };
    return arity(func, fn.length);
  };

  swap = function(fn, p1, p2) {
    var func;
    func = function() {
      var a, arg, args, b;
      args = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          arg = arguments[_i];
          _results.push(arg);
        }
        return _results;
      }).apply(this, arguments);
      a = args[p1];
      b = args[p2];
      args[p1] = b;
      args[p2] = a;
      return fn.apply(this, args);
    };
    return arity(func, fn.length);
  };

  unary = function(fn) {
    return flip(nAry);
  };

  demethodize = function(fn) {
    var func;
    func = function(context) {
      var arg, args, i, _i, _len;
      args = [];
      for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
        arg = arguments[i];
        if (i > 0) {
          args.push(arg);
        }
      }
      return fn.apply(context, args);
    };
    return arity(func, fn.length + 1);
  };

  nAry = function(fn, n) {
    if (n === 0) {
      return function() {
        return fn.call(this);
      };
    } else if (n === 1) {
      return function(a) {
        return fn.call(this, a);
      };
    } else if (n === 2) {
      return function(a, b) {
        return fn.call(this, a, b);
      };
    } else if (n === 3) {
      return function(a, b, c) {
        return fn.call(this, a, b, c);
      };
    } else if (n === 4) {
      return function(a, b, c, d) {
        return fn.call(this, a, b, c, d);
      };
    } else if (n === 5) {
      return function(a, b, c, d, e) {
        return fn.call(this, a, b, c, d, e);
      };
    } else if (n === 6) {
      return function(a, b, c, d, e, f) {
        return fn.call(this, a, b, c, d, e, f);
      };
    } else if (n === 7) {
      return function(a, b, c, d, e, f, g) {
        return fn.call(this, a, b, c, d, e, f, g);
      };
    } else if (n === 8) {
      return function(a, b, c, d, e, f, g, h) {
        return fn.call(this, a, b, c, d, e, f, g, h);
      };
    } else if (n === 9) {
      return function(a, b, c, d, e, f, g, h, i) {
        return fn.call(this, a, b, c, d, e, f, g, h, i);
      };
    } else if (n === 10) {
      return function(a, b, c, d, e, f, g, h, i, j) {
        return fn.call(this, a, b, c, d, e, f, g, h, i, j);
      };
    } else {
      throw new RangeError("Function must take 10 or fewer arguments");
    }
  };

  arity = function(fn, n) {
    if (n === 0) {
      return function() {
        return fn.call(this);
      };
    } else if (n === 1) {
      return function(a) {
        return fn.apply(this, arguments);
      };
    } else if (n === 2) {
      return function(a, b) {
        return fn.apply(this, arguments);
      };
    } else if (n === 3) {
      return function(a, b, c) {
        return fn.apply(this, arguments);
      };
    } else if (n === 4) {
      return function(a, b, c, d) {
        return fn.apply(this, arguments);
      };
    } else if (n === 5) {
      return function(a, b, c, d, e) {
        return fn.apply(this, arguments);
      };
    } else if (n === 6) {
      return function(a, b, c, d, e, f) {
        return fn.apply(this, arguments);
      };
    } else if (n === 7) {
      return function(a, b, c, d, e, f, g) {
        return fn.apply(this, arguments);
      };
    } else if (n === 8) {
      return function(a, b, c, d, e, f, g, h) {
        return fn.apply(this, arguments);
      };
    } else if (n === 9) {
      return function(a, b, c, d, e, f, g, h, i) {
        return fn.apply(this, arguments);
      };
    } else if (n === 10) {
      return function(a, b, c, d, e, f, g, h, i, j) {
        return fn.apply(this, arguments);
      };
    } else {
      throw new RangeError("Function must take 10 or fewer arguments");
    }
  };

  module.exports = {
    curry: curry,
    arity: arity,
    nAry: nAry,
    unary: unary,
    binary: binary,
    swap: swap,
    flip: flip,
    reverse: reverse,
    partial: partial,
    partialConstructor: partialConstructor,
    firstToLast: firstToLast,
    lastToFirst: lastToFirst
  };

}).call(this);