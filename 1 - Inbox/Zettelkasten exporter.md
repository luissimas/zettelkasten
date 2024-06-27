---
created-at: "2024-06-03"
---

I've been working on a project called *zettelkasten-exporter*. The idea is to create a service that can receive a pointer to a Zettelkasten (either a directory path or a git URL) to collect and expose metrics about it on a [[Prometheus]] scrape endpoint. I'm writing it in [[Go]], since the language is an excellent fit for small HTTP services and I was feeling like write it.

Things I learned so far:

- Prometheus has a great [documentation on writing exporters](https://prometheus.io/docs/instrumenting/writing_exporters/)
- Parse markdown with [goldmark](https://github.com/yuin/goldmark)
- Better test assertions with [testify](https://pkg.go.dev/github.com/stretchr/testify@v1.9.0)
- Using the `fs.FS` interface instead of directly reading system files with `os` improves testability. Got that one from [[Learn Go with tests|learn Go with tests]]
- [[Prometheus]] is really not the best tool for this job, I've switched to [[InfluxDB]]
- The [flux](https://docs.influxdata.com/flux/v0/) query language looks a lot like [[Elixir]]'s pipe syntax, and it's quite good at creating pipelines for transforming data

# References

https://github.com/luissimas/zettelkasten-exporter
