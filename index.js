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

function collect(func, arr) {
  function runFunc() {
    const itemToCollect = func();
    arr.push(itemToCollect);
    return itemToCollect;
  }
  if (func === undefined) return runFunc;
  
  return runFunc;
};

function filter(func, predicate) {
  function filteredIncrement() {
    const value = func();
    if (predicate(value)) {
      return value;
    } else {
      return;
    };
  };

  return filteredIncrement
}

function concat(gen1, gen2) {
  function run() {
    const run1 = gen1();
    if (run1 === undefined && gen2 !== undefined) {
      return gen2();
    } else {
      return run1;
    }
  }
  return run;
}

function fibonacciF(num1, num2) {
  let currentNum = num1;
  let nextNum = num2;
  let count = 0;
  function generate() {
    const result = currentNum + nextNum;
    if (count ===0) {
      count++;
      return num1;
    }  
    if (count === 1) {
      count++;
      return num2;
    }
    currentNum = nextNum;
    nextNum = result;
    return result;
}
  return generate
}

function genSymF(symbol) {
  let num = 0;
  function generateSymbol() {
    return `${symbol}${num++}`
  }
  return generateSymbol;
}

function genSymFF() {
  function genSymF(symbol) {
    let num = 0;
    function generateSymbol() {
      return `${symbol}${num++}`
    }
    return generateSymbol;
  }
  return genSymF;  
}

function counter(num) {
  const result = {}
  let number = num
  result.up = function up() {
    number++;
    return number
  }
  result.down = function down() {
    number--;
    return number
  }

  return result;
}

function revokable(func) {
  const result = {};
  let toggleFunc = func;
  result.invoke = function invoke(num1, num2) {
    if(toggleFunc === undefined) return toggleFunc 
    return toggleFunc(num1, num2)
  };
  result.revoke = function revoke() {
    toggleFunc = undefined;
    return toggleFunc;
  };
  return result;
}

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
