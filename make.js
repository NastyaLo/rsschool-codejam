module.exports = function make(...args) {
  return function a(...innerArgs) {
    let callArray = [];

    if (innerArgs.length === 1 && typeof innerArgs[0] === 'function') {
      return args.reduce(innerArgs[0]);
    }

    callArray = args.concat(innerArgs);
    return make.apply(this, callArray);
  };
};
