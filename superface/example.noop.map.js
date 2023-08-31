function Example({ input, parameters, services }) {
  __ffi.unstable.printDebug('Input:', input);
  __ffi.unstable.printDebug('Parameters:', parameters);
  __ffi.unstable.printDebug('Services:', services);

  return 'example result';
}