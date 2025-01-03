module.exports = function (options) {
  const bindings = require('./lib/resolve-bindings')(options);
  return bindings;
};
