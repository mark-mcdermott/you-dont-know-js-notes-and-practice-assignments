# You Dont Know Js Notes And Practice Assignments

## Book II: Scope & Closures

### Ch. 1: What's The Scope (12/2/22)
- It's more subtle, but essentially js is compiled at runtime
- Entire file is parsed/lexed before execution
- let/const are hoisted (ch 5)
- `eval(...)` is not compiled until runtime
  - var/function inside eval change its scope
- `with` turns object to local scope (and changes scope at runtime)
- use strict mode - eval/with are not allowed
- scope is determined at compile time
- other than declarations, identifiers/vars have one of two roles:
  - target: LHS
  - source: RHS
  - non-obvious targets:
    - for (let student of students) // student 
    - getStuentName(73) // the var 73 is assigned to
    - function getStudentName(studentId) // getStudentName
  - sources:
    - for (let student of students) // students
    - if (student.id ==  studentId) // both
    - return student.name
    - getStudentName // getStudentName
    - console.log(nextStudent) // console & nextStudent

### Ch. 2: Illustrating Lexical Scope
- What constructs create scope? Global, functions and loops
- What constructs don't create scope? If statements.
- What do scopes hold? Identifiers/variables
  - identifiers/vars are assigned scope where they are declared
  - properties are not identifiers/vars and their access rules are covered in book 3
- What isn't scoped? Value literals (RHS)
- Mental models for scope
  - colored sections
  - converation between Engine (runtime), Compiler & Scope Manager
- Compiler creates code that Engine runs at runtime
- Each var reference in code is either the declaration or a target reference
- Converation between Engine, Compiler & Scope Managers
  - 1) Coversation between Compiler and Scope Managers
    - for each var declaration, Compiler asks the Scope Manager if they already have that var in their list
      - if yes, it's ignored for now
      - if no, it's added to their list for this scope 
    - for each new scope-creating construct, Compiler asks Scope Manager to create a new Scope bucket/manager
  - 2) Conversation Engine & Scope Managers
    - Engine first asks about hoisted identifiers, to associate values/functions
    - Engine then asks about source/target identifer references
      - it initializes source references to variables
      - it executes functions for references to functions 
- lookup failures happen when Engine goes all the way up the scope tree and never finds the identifier
  - handling the failure depends on whether strict mode is on or not
    - unresolved source references are Undeclared and result in ReferenceError 
    - unresolved target references
       - in strict mode, it's considered undeclared and throws ReferenceError 
- undeclared vs undefined
  - when you see "undefined", know there are two kinds of undefined
  - undeclared: no matching decalaration in any scope
  - undefined: declared but has no value
  - typeof <undefined var> // undefined
  - typeof <undeclared var> // also undefined <-- an error/confusion in js 
- accidental global