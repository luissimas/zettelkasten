---
created-at: "2025-04-28"
---

Go has built-in tooling for testing. This includes commands to run tests and benchmarks, as well as several testing libraries in the standard library.

The standard library implements not only a basic testing and benchmarking framework, but also includes several helpers to test concurrency, HTTP servers, interactions with the filesystem and even a [[Property testing]] framework.

The only thing lacking from the standard library in regards to testing is higher level assertions. For this, I use the [testify](https://github.com/stretchr/testify) package.

We can run benchmarks and include information about how many allocations were made in each iteration with the following command:

```shell
go test -bench=. -benchmem ./...
```
