function identity(arg) {
  return arg;
};

function identityF(arg) {
  function identity() {
    return arg;
  }
  return identity;
};

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2
}

function increment(num) {
  return add(num, 1);
}

function addF(num1) {
  function add(num2) {
    return num1 + num2;
  };
  return add;
}

function curry(func, num) {
  function ourFunc(num2) {
    return func(num, num2)
  }
return ourFunc
}

function liftF(func) {
  function ourFunc(num1) {
    function ourFunc2(num2) {
      return func(num1, num2)
    }
      return ourFunc2
  }
  return ourFunc
}

function twice() {}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
