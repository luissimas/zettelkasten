---
created-at: "2024-06-03"
---

This is a project that I've created with the goal of visualizing metrics from my zettelkasten in my [[Grafana]] instance deployed in my [[Homelab]]. It was the first service that I've written that was deployed to a [[Kubernetes]] cluster.

![[Pasted image 20240715071605.png]]

I've written it in [[Go]], since the language is an excellent fit for small services and I was feeling like writing it.

The initial idea was to expose the metrics on a [[Prometheus]] scrape endpoint, but I learned that the pull model was not a good fit for registering historical data. With that in mind, I've migrated to [[InfluxDB]] for the initial release.

Things I learned so far:

- Prometheus has a great [documentation on writing exporters](https://prometheus.io/docs/instrumenting/writing_exporters/)
- Parse markdown with [goldmark](https://github.com/yuin/goldmark)
- Better test assertions with [testify](https://pkg.go.dev/github.com/stretchr/testify@v1.9.0)
- Using the `fs.FS` interface instead of directly reading system files with `os` improves testability. Got that one from [[Learn Go with tests|learn Go with tests]]
- [[Prometheus]] is really not the best tool for this job, I've switched to [[InfluxDB]]
- The [flux](https://docs.influxdata.com/flux/v0/) query language looks a lot like [[Elixir]]'s pipe syntax, and it's quite good at creating pipelines for transforming data
- [[goreleaser]] is a great tool for creating GitHub releases
- Working with GitHub's container registry is quite easy with [[GitHub Actions]]

# References

https://github.com/luissimas/zettelkasten-exporter
