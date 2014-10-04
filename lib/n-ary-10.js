// Generated by CoffeeScript 1.8.0
(function() {
  var nAry10;

  module.exports = nAry10 = function(fn, n) {
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

}).call(this);