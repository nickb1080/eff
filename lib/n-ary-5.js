// Generated by CoffeeScript 1.8.0
(function() {
  var nAry5;

  module.exports = nAry5 = function(fn, n) {
    if (!(n > 0)) {
      n = 0;
    }
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
    } else {
      throw new RangeError("Function must take 5 or fewer arguments");
    }
  };

}).call(this);