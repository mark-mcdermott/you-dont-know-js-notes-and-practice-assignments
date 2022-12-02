# You Dont Know Js Notes And Practice Assignments

## Book II: Scope & Closures

### Ch. 1. What's The Scope (12/2/22)
- It's more subtle, but essentially js is compiled at runtime
- Entire file is parsed/lexed before execution
- let/const are hoisted (ch 5)
- `eval(...)` is not compiled until runtime
  - var/function inside eval change its scope
- `with` turns object to local scope (and changes scope at runtime)
- use strict mode - eval/with are not allowed
- scope is determined at compile time