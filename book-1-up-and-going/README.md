# You Dont Know Js Notes And Practice Assignments

## Book I: Up & Going

### Ch. 1. Into Programming (11/4/22)
- `statement` is made up of one or more `expressions`
- types of `expressions`
  - literal value expression (`2`)
  - variable expression (`b`)
  - arithmetic expression (`b*2`)
  - assignment expression (`a = b*2`)
  - expression statement - expression that stands on its own (`b*2`), not useful
  - call expression (`alert(a)`)
- js is not interpreted (not run from high level code without compilation)! it compiles from source each execution.
- operators: assignment, math, compound (`+=`), increment/decrement, object property access (`.`), equality, comparison, logical
- primitive data types: number, string, boolean, null and undefined (also symbol and bigint)
  - have no methods/properties because not objects
- "coercion" - type conversion in js
  - explicit conversion (ie, built-in `Number("42")`)
  - implicit conversion 
    - happens with "loose equals": `"99.99"==99.99` (LHS converts to number)
- comments should explain "why" not "what" (and "how" if confusing)
- js has dynamic typing (or weak typing) as opposed to static typing
- `console.log` implicitly coerces numbers to strings
- use `.toFixed(2)` to convert to string with specified decimal places
- constants in js by convention use all caps snake case, but can always still be changed (no enforcement of constant property) unless they are `const`!
- blocks are `{ }` and can be used standalone:
  - `{ amount = amount * 2 }` is valid on its own
  - blocks do not need a semicolon to end them
- if statements
  - expect boolean in the `( )` but will coerce if not a boolean
- "falsy" values
  - when coerced to boolean, become `false`
  - `0` and `""`
- "truthy" values
  - when coerced to boolean, become `true`
  - `99` and `"free"`
- loops repeat while a condition holds
- while vs do while - do while will always execute once
- `break` stops a loop
  - will break a while even when inside it in an `if`
- for loops
  - avoids having to manually use a `break` in a while or do while'
  - 3 clauses: init, conditional, update
- each function gets own scope
- nested functions/scopes ok

### Ch. 2. Into JavaScript (11/28/22)
- built in types: string, num, bool, null/undefined, object & symbol
- js bug: 
```
a = null;
typeof a; // returns "object" (should probably be "undefined")
```
- undefined is a type:
```
a = undefined;
typeof a; // returns "undefined"
- only values have types. variables are just containers.
- object bracket notation can be used when the keys have spaces, special chars, etc
- array and function should be considered subtypes of object
- function properties
  - function can have properties because they're objects
  - function properties are rarely used
- String object wrapper 
  - is a "native"
  - "boxes" a primitive string value when you use myStr.toUpperCase()
- implicit/explicit coercion examples:
  - explicit: `var a = "42"; var b = Number(a)`
  - implicit: `var a = "42"; var b = a * 1;
- result of non-booleans coerced into boolean:
  - falsy:
    - empty strings
    - 0, -0, NaN
    - null, undefined
    - false
  - truthy
    - non-empty strings, nums, arrays, objects & functions
    - true 
- incorrect: "== checks value equality and === checks value and type equality"
- correct: "== checks value equality with coercion allowed and === checks value equality with coercion not allowed"
- use === when:
  - either side could be the actual value true or false
  - if either side could be 0 or an empty string/array
  - if you you're not sure what kind of values either side could be
- safe to use == in all other cases
- all objects (including arrays and functions) are compared by reference
  - two arrays with the same values are not == equal
  - oddly an array is == equal to the equivalent comma separated string (it's coerced to string and the strings are the same)
- < and >
  - two strings are compared like the one that comes first in a dictionary is smaller
  - if one side isn't a string, both sides are coerced to numbers
  - if one side isn't a string and anything that can't be coerced to a number is NaN
  - NaN is neither lesser or greater than any other value
- identifiers
  - must start with a-z, A-Z, $ or _
  - can contain a-z, A-Z, $, _ and 0-9
  - all variables including functions must be valid identifiers, but cannot be reserved words
  - object property names follow same rules but can be reserved words
- hoisting 
  - wherever a var is declared in a scope, it is availalbe in the whole scope
  - this means a var in a while/for inside a function is available in the whole function
- let
  - let block scopes to the nearest { }
- accessing/setting undeclared vars
- if you try to access a variable where it's not available, you get ReferenceError
- if you try to set a variable that's not declared, -
  - strict mode on: error 
  - strict mode off: global variable
- strict mode 
  - you can "use strict" inside a function or an entire file
- setting variables equal to functions
  - ie, var x = function() { }; or var x = function bar() { };
  - these functions are not executed yet
- IIFE
  - immediately invoked function expressions
  ```
  (function IIFE() {
    console.log('hi')
  })();
  // hi
  ```
  - the function is declared and run
- normal function calls
  - ie foo()
  - foo is the reference to the declared function
  - () executes it
- closure
```
function foo(x) {
  function bar(y) {
    return x + y;
  }
  return bar;
}
var addOne = foo(1);
foo(3) // 4
```
- module pattern 
```
function User() {
  function doLogin(user,pass) {
    ...
  }
  var publicAPI = {
    login: doLogin
  };
  return publicAPI;
}
var fred = User();
fred.login('fred','password')
- note new User() is not used
- .call
  - uses a different objects method 
  - `person.fullName.call(person1)` calls fullName, using it on person1
- this
  - this inside a function does not refer to the function
  - it usually points to an object
- 4 rules to how this is set
  - this inside a function (not an object) refers to the global object
  - this inside an object refers to the object
  - `foo.call(obj2)` with a this inside foo will refer to obj2
  - new foo() with a this inside foo is undefined
- const me = Object.create(person) sets me's prototype to person
- prototypes
  - if you reference object property that doesn't exist, it checks the object's prototype reference for the property.
  - Simpson says creating "fake" class inheritance with prototypes is common, but an abuse of prototype
  - Simpson says good use of prototype is behavior delegation

### Ch. 3 Into YDKJS (11/29/22)
- YDKJS is about all parts of js
- scope/closures book
  - debunks idea that js is interpreted
  - (it's compiled at runtime)
  - lexical scope
- this/prototypes
  - this doesn't refer to the function it's in
  - prototypes only create poor version of inheritance
  - prototypes are complicated
- types/grammar
  - covers coercion 
  - simpson asserts coercion isn't bad or a flaw in js
  - simpson asserts we should use coercion
- async/perf
  - callbacks are insufficient 
    - inversion of control trust loss
    - lack of linear reason-ability
  - generators pause, yield, resume
  - combining promises/generators gives effective async
  - parallelism, web workers
- es6 and beyond
  - destructuring 
  - default param vals 
  - symbols 
  - concise methods
  - computed properties 
  - arrow functions
  - block scoping 
  - promises
  - generators
  - iterators 
  - modules
  - proxies
  - weakmaps