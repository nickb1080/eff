// Generated by CoffeeScript 1.8.0
var flip, swap;

swap = require("./swap");

module.exports = flip = function(fn) {
  return swap(fn, 0, 1);
};
