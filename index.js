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

function twice(func) {
  return function (num) {
    return func(num, num)
  };
};

function composeU(func1, func2) {
  function ourFunc1(num1) {
    const num2 = func1(num1, num1)
    function ourFunc2(num2) {
      return func2(num2);
    };
    return ourFunc2(num2)
  };
  return ourFunc1
};

function composeB(func1, func2) {
  function ourFunc1(num1, num2, num3) {
    const num4 = func1(num1, num2)
    return func2(num3, num4)
  };
  return ourFunc1;
};

function limit(func, limit) {
  function ourFunc(num1, num2) {
    if (--limit >= 0) {
      return func(num1, num2)
    };  
  };
  return ourFunc;
};

function from(num) {
  function increment() {
  return num++
}    
return increment
}

function to(func, limit) {
  const start = func()
  function increment() {
      if (--limit >= start) {
      return func()-1
    }
  }
  return increment
}

function fromTo(num1, num2) {
  const start = num1
  function increment() {
    if (--num2 >= start) {
      return num1++
    }    
  }    
  return increment
}

function element(arr, func) {
  const lastHope = from(0)
  function increment() {
    if (func === undefined) {
      return arr[lastHope()]
    }
      return arr[func()]
  }    
  return increment
}

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
