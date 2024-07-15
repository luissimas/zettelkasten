---
created-at: 2023-12-06
---

> Avoid testing implementation details, test behaviors

Testing implementation details leads to very fragile and expensive to maintain test suites because implementation details change more often than the high-level requirements of the software. At the same time, these more "low-level" implementation details tests deliver way less value, because no behavior is actually being tested.

By definition, refactoring should not break any tests. If your tests break while refactoring either your refactoring altered a behavior of the system or your tests are testing implementation details.

This is an excellent talk about testing: https://www.youtube.com/watch?v=EZ05e7EMOLM
