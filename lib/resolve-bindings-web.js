function resolveBindings (options) {
  if (navigator.bluetooth) {
    return new (require('./webbluetooth/bindings'))(options);
  }
}

module.exports = resolveBindings;
