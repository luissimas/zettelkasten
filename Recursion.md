# Recursion
Recursion is a technique for solving problems that evolves around the idea of a function that calls itself itself until the output reaches a *base case*, then the functions start to return the values to the ones that called them. This is one of the mos elegant ways of solving problems, it can be very efficient and we can solve a lot of problems using few lines of code.

 ## Base case
 Base cases are very important in recursive functions, without them we'll end up with infinite loops. To prevent that we always have to break the problem in a base case and a recursive base. The function will call itself until it eventually reaches a base case, then the values can be returned to the ones that called them.
 
 ## Stack
Stack is a simple way to arrange data one on top of each other. Computers have a *call stack* to organize the function calls, the last call is always put on top of the stack, and when the function returns, it gets removed from the stack. This is very important when it comes down to *recursion*, because each call of the function gets put on top of the stack to be executed while the previous function is paused, until the last function reaches the *base case*, then the values are returned to the previous functions, that uses this value to return another value to the previous and so on.

>"Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation."

---

created: 25/11/2020
modified: 25/11/2020