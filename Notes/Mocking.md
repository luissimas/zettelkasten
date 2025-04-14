---
created-at: "2025-04-11"
---

Mocking is a technique in [[Software testing]] in which we substitute (or "mock") a dependency of the component under test for a fake dependency that we can **control and inspect**. This can be needed for several reasons, but mostly because:

- The real dependencies make the tests _slow_ (e.g. interacting with the filesystem, external databases, network etc)
- The real dependencies are _unreliable_ and can lead to flaky tests
- We want to inspect the _behavior_ of the component under test when interacting with those dependencies

Mocks are valuable in the sense that they allow us to have **faster and more reliable tests** while still allowing assertions on how our code **would interact** with the real dependency.

At the same time, mocking can be **harmful** when done in the wrong way. When we start mocking dependencies, it is very easy to get into the mindset of "the more we can assert about the interaction with the mock, the better". This can lead to tightly coupled tests that test implementation details and not external behavior.

By definition, [[Refactoring]] means that code changes but behavior stays the same. So a refactor should **never** break any tests. If what it seems to be a refactor results in failing tests, then either the tests are asserting on internal behavior or the refactor changed the existing behavior.

# References

https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/mocking#but-isnt-mocking-evil
