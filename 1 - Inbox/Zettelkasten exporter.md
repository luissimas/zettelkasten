---
created-at: "2024-06-03"
---

I've been working on a project called *zettelkasten-exporter*. The idea is to create a service that can receive a pointer to a Zettelkasten (either a directory path or a git URL) to collect and expose metrics about it on a [[Prometheus]] scrape endpoint. I'm writing it in [[Go]], since the language is an excellent fit for small HTTP services and I was feeling like write it.

Things I learned so far:

- Prometheus has a great [documentation on writing exporters](https://prometheus.io/docs/instrumenting/writing_exporters/)
- Parse markdown with [goldmark](https://github.com/yuin/goldmark)
- Better test assertions with [testify](https://pkg.go.dev/github.com/stretchr/testify@v1.9.0)
- Using the `fs.FS` interface instead of directly reading system files with `os` improves testability

# References

https://github.com/luissimas/zettelkasten-exporter
