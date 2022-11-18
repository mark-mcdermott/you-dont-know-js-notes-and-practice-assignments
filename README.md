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