arity = require "./arity"

module.exports = demethodize = ( fn, newArity ) ->
  func = ( context ) ->
    args = new Array arguments.length - 1
    args[i - 1] = arg for arg, i in arguments when i > 0
    fn.apply context, args
  arity func, newArity or fn.length
